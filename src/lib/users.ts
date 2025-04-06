import prisma from "@/lib/prisma"
import { Prisma } from "@prisma/client";


export async function getUser() {
    return await prisma.user.findMany()
}
export async function getUserWithBalance() {
    return await prisma.user.findMany({
      include: {
        userBalances:true,       
      },
    })
}

export async function createUser( name: string, email: string, role: number) {


  const existingUser = await prisma.user.findUnique({
    where: { email },
    select: { id: true }
  });

  if (existingUser) {
    throw new Error('Email already in use');
  }

  return await prisma.$transaction(async (prisma) => {
    // 1. Create the user
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        role: role,
        balance: 0,
      }
    });

    // 2. Create the three default UserBalance records
    await prisma.userBalance.createMany({
      data: [
        {
          userId: user.id,
          type: 'SAFE',
          amount: 0,
          share: 0
        },
        {
          userId: user.id,
          type: 'NORMAL',
          amount: 0,
          share: 0
        },
        {
          userId: user.id,
          type: 'RISKY',
          amount: 0, 
          share: 1
        }
      ]
    });

    return user;
  });
}

export async function getUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email: email,
        },
        include: {
            wallets: true,
            userBalances:true,       
            transactions: true,     
          },
    });
}

export async function getUserById(id: string) {
    return await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
}

export async function adjustUserBalance(
  userId: string,
  type: 'SAFE' | 'NORMAL' | 'RISKY',
  amount: number // Can be positive (add) or negative (subtract)
) {
  return await prisma.$transaction(async (prisma) => {
    // 1. Validate and prepare
    if (amount === 0) throw new Error("Amount cannot be zero");
    const isDecrease = amount < 0;
    const absoluteAmount = Math.abs(amount);

    // 2. Handle RISKY balance (simple adjustment)
    if (type === 'RISKY') {
      if (isDecrease) {
        const current = await prisma.userBalance.findUniqueOrThrow({
          where: { userId_type: { userId, type } }
        });
        if (current.amount < absoluteAmount) {
          throw new Error("Insufficient RISKY balance");
        }
      }

      const updated = await prisma.userBalance.update({
        where: { userId_type: { userId, type } },
        data: { amount: { increment: amount } },
        include: { user: true }
      });

      // Update user's total balance
      await updateTotalBalance(prisma, userId);
      return updated;
    }

    // 3. Handle SAFE/NORMAL balance (with pot recalculations)
    const potType = type;
    const currentPot = await prisma.balancePot.findUniqueOrThrow({
      where: { type: potType }
    });

    // Check sufficient funds for decrease
    if (isDecrease) {
      const userBalance = await prisma.userBalance.findUniqueOrThrow({
        where: { userId_type: { userId, type } }
      });
      if (userBalance.amount < absoluteAmount) {
        throw new Error(`Insufficient ${type} balance`);
      }
    }

    // 4. Update only the target user's balance
    await prisma.userBalance.update({
      where: { userId_type: { userId, type } },
      data: { amount: { increment: amount } }
    });

    // 5. Get all user balances to recalculate shares
    const allBalances = await prisma.userBalance.findMany({
      where: { type: potType }
    });

    const newPotTotal = currentPot.total + amount;
    const totalUserAmounts = allBalances.reduce(
      (sum, balance) => sum + balance.amount,
      0
    );

    // 6. Update shares for all users
    await Promise.all(
      allBalances.map(balance => 
        prisma.userBalance.update({
          where: { id: balance.id },
          data: { 
            share: balance.amount / newPotTotal
          }
        })
      )
    );

    // 7. Update pot total
    await prisma.balancePot.update({
      where: { type: potType },
      data: { total: newPotTotal }
    });

    // 8. Update user's total balance
    await updateTotalBalance(prisma, userId);

    return await prisma.userBalance.findUniqueOrThrow({
      where: { userId_type: { userId, type } }
    });
  }, { timeout: 30000 });
}

// Helper function remains the same
async function updateTotalBalance(prisma: Prisma.TransactionClient, userId: string) {
  const userBalances = await prisma.userBalance.findMany({
    where: { userId },
    select: { amount: true }
  });

  const totalBalance = userBalances.reduce(
    (sum, balance) => sum + balance.amount,
    0
  );

  return prisma.user.update({
    where: { id: userId },
    data: { balance: totalBalance }
  });
}