import prisma from "@/lib/prisma";



  export async function getAllAnalytics() {
    return await prisma.analytics.findMany({
      orderBy: { date: "asc" }, 
    });
  }

  export async function updateGlobalBalances() {
    const today = new Date()
    today.setHours(0, 0, 0, 0) 
  
    const [balancePots, riskyBalances] = await Promise.all([
      prisma.balancePot.findMany({
        where: {
          type: { in: ['SAFE', 'NORMAL'] }
        }
      }),
      // Still need to sum RISKY balances from users
      prisma.userBalance.aggregate({
        _sum: {
          amount: true
        },
        where: {
          type: 'RISKY'
        }
      })
    ]);
  
    const safeBalance = balancePots.find(pot => pot.type === 'SAFE')?.total || 0;
    const normalBalance = balancePots.find(pot => pot.type === 'NORMAL')?.total || 0;
    const riskyBalance = riskyBalances._sum.amount || 0;

  
    // Upsert today's record
    return prisma.analytics.upsert({
      where: {
        date: today
      },
      update: {
        safeBalance,
        normalBalance,
        riskyBalance,
        updatedAt: new Date()
      },
      create: {
        date: today,
        safeBalance,
        normalBalance,
        riskyBalance
      }
    })
  }