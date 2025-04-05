import prisma from "@/lib/prisma";
import { adjustUserBalance } from "./users";

interface BalanceResult {
  SAFE: number
  NORMAL: number
  RISKY: number
}

export async function createBalancePot(type: 'SAFE' | 'NORMAL', initialAmount: number = 0) {
  try {
    const balancePot = await prisma.balancePot.create({
      data: {
        type,
        total: initialAmount
      }
    });
    return balancePot;
  } catch (error) {
    console.error('Error creating balance pot:', error);
    throw error;
  }
}

// VIsszaadja az összes potbalance-ról egy listát
export async function getAllBalancePots() {
  try {
    return await prisma.balancePot.findMany();
  } catch (error) {
    console.error('Error fetching balance pots:', error);
    throw error;
  }
}
// Visszaadja a potbalance-t ami a paraméterben érkezik
export async function getBalancePotByType(type: 'SAFE' | 'NORMAL') {
  try {
    return await prisma.balancePot.findUnique({
      where: { type }
    });
  } catch (error) {
    console.error(`Error fetching ${type} balance pot:`, error);
    throw error;
  }
}
export async function getAllPotBalances(): Promise<BalanceResult> {
  try {
    // Get SAFE and NORMAL balances from balancePot table
    const [safePot, normalPot, riskyBalances] = await Promise.all([
      prisma.balancePot.findUnique({
        where: { type: 'SAFE' },
        select: { total: true }
      }),
      prisma.balancePot.findUnique({
        where: { type: 'NORMAL' },
        select: { total: true }
      }),
      // Get sum of all RISKY balances from userBalances
      prisma.userBalance.aggregate({
        where: { type: 'RISKY' },
        _sum: { amount: true }
      })
    ])

    return {
      SAFE: safePot?.total || 0,
      NORMAL: normalPot?.total || 0,
      RISKY: riskyBalances._sum.amount || 0
    }
  } catch (error) {
    console.error('Error fetching balances:', error)
    throw new Error('Failed to retrieve balances')
  }
}


export async function updateBalancePotTotal(
  type: 'SAFE' | 'NORMAL',
  amount: number
) {
  try {
    return await prisma.$transaction(async (prisma) => {
      // 1. Update the BalancePot

      const updatedPot = await prisma.balancePot.update({
        where: { type },
        data: { total: amount },
      });

      // 2. Get all UserBalance records for this pot type
      const userBalances = await prisma.userBalance.findMany({
        where: {
          type,
          share: { gt: 0 }
        },
        include: {
          user: {
            select: {
              id: true,
              userBalances: true // We'll need all balances to calculate total
            }
          }
        }
      });

      if (userBalances.length === 0) {
        console.warn(`No users found with a share in ${type} pot`);
        return updatedPot;
      }

      for (const userBalance of userBalances) {
        // Calculate the NEW specific balance amount
        const newBalanceAmount = amount * userBalance.share;

        // Update the specific balance (SAFE/NORMAL)
        await prisma.userBalance.update({
          where: { id: userBalance.id },
          data: { amount: newBalanceAmount }
        });

        // Get the user's other balances (excluding the one we just updated)
        const otherBalances = userBalance.user.userBalances.filter(
          b => b.id !== userBalance.id
        );

        // Calculate total balance with the NEW value
        const totalBalance = otherBalances.reduce(
          (sum, b) => sum + b.amount,
          newBalanceAmount // Start with our newly calculated amount
        );

        // Update user's main balance
        await prisma.user.update({
          where: { id: userBalance.user.id },
          data: { balance: totalBalance }
        });
      }
      return updatedPot;
    });
  } catch (error) {
    console.error(`Error updating ${type} pot and user balances:`, error);
    throw error;
  }
}

//hozzáadja az értékhez az amount-ot
export async function adjustBalancePot(type: 'SAFE' | 'NORMAL', amount: number) {
  try {
    return await prisma.$transaction(async (prisma) => {
      // 1. Increment the BalancePot first (atomic operation)
      const currentPot = await prisma.balancePot.findUnique({
        where: { type }
      });

      if (!currentPot) {
        throw new Error(`${type} pot not found`);
      }

      // 2. Calculate new total pot balance
      const newPotTotal = currentPot.total + amount;

      // 3. Update the BalancePot with new total
      const updatedPot = await prisma.balancePot.update({
        where: { type },
        data: { total: newPotTotal },
      });


      const userBalances = await prisma.userBalance.findMany({
        where: {
          type,
          share: { gt: 0 }
        },
        include: {
          user: {
            select: {
              id: true,
              userBalances: true
            }
          }
        }
      });

      if (userBalances.length === 0) {
        console.warn(`No users found with a share in ${type} pot`);
        return updatedPot;
      }

      for (const userBalance of userBalances) {
        // Calculate the NEW specific balance amount
        const newBalanceAmount = newPotTotal * userBalance.share;

        // Update the specific balance (SAFE/NORMAL)
        await prisma.userBalance.update({
          where: { id: userBalance.id },
          data: { amount: newBalanceAmount }
        });

        // Get the user's other balances (excluding the one we just updated)
        const otherBalances = userBalance.user.userBalances.filter(
          b => b.id !== userBalance.id
        );

        // Calculate total balance with the NEW value
        const totalBalance = otherBalances.reduce(
          (sum, b) => sum + b.amount,
          newBalanceAmount // Start with our newly calculated amount
        );

        // Update user's main balance
        await prisma.user.update({
          where: { id: userBalance.user.id },
          data: { balance: totalBalance }
        });
      }
      return updatedPot;
    });
  } catch (error) {
    console.error(`Error adjusting ${type} pot and user balances:`, error);
    throw error;
  }
}



// For SAFE/NORMAL transfers:
// - Decreases source pot total and updates shares
// - Increases destination pot total and updates shares
// - Maintains all user proportions

// For RISKY transfers:
// - Only affects the specified user's balances
export async function transferBetweenBalances(
  userId: string,
  fromType: 'SAFE' | 'NORMAL' | 'RISKY',
  toType: 'SAFE' | 'NORMAL' | 'RISKY',
  amount: number
) {
  // Validate transfer types
  if (fromType === toType) {
    throw new Error("Cannot transfer between same balance types");
  }

  return await prisma.$transaction(async (prisma) => {
    // 1. First decrease the source balance
    await adjustUserBalance(userId, fromType, -amount);

    // 2. Then increase the destination balance
    await adjustUserBalance(userId, toType, amount);

    // 3. For SAFE/NORMAL transfers, pots are automatically updated by adjustUserBalance
    // No additional pot updates needed here

    // 4. Return the updated balances
    const [updatedFrom, updatedTo] = await Promise.all([
      prisma.userBalance.findUniqueOrThrow({
        where: { userId_type: { userId, type: fromType } }
      }),
      prisma.userBalance.findUniqueOrThrow({
        where: { userId_type: { userId, type: toType } }
      })
    ]);

    return {
      newFromBalance: updatedFrom.amount,
      newToBalance: updatedTo.amount,
      message: "Transfer completed successfully"
    };
  }, {
    maxWait: 20000,
    timeout: 20000,
    isolationLevel: 'Serializable' // Strongest isolation for financial ops
  });
}