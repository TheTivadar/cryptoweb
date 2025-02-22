
import prisma from "@/lib/prisma"; 


export async function getTotalBalance(){
    const latestAnalytics = await prisma.analytics.findFirst({
        orderBy: {
          date: 'desc', 
        },
      });
      if (latestAnalytics) {
        return latestAnalytics.totalBalance;
      } else {
        return 0;
      }
}

export async function updateUserShare(userId: string, addedMoney: number) {
    const totalBalance = await getTotalBalance();
    const user = await prisma.user.findUnique({
        where: {
            id:userId
        }
    })
    const fullUserBalance = addedMoney + (user?.balance ?? 0);
    const share = fullUserBalance / (totalBalance + fullUserBalance);
    await prisma.user.update({
        where: { id: userId },
        data: {
            share, 
            balance:fullUserBalance
        },
    });

    const existingUsers = await prisma.user.findMany({
        where: { id: { not: userId } }, 
    });

    for (const user of existingUsers) {
        await prisma.user.update({
            where: { id: user.id },
            data: {
                share: user.share * (totalBalance / (totalBalance + addedMoney)),
            },
        });
    }

    const latestAnalytics = await prisma.analytics.findFirst({
        orderBy: {
            date: 'desc',
        },
    });

    if (latestAnalytics) {
        await prisma.analytics.update({
            where: { id: latestAnalytics.id },
            data: {
                totalBalance: totalBalance + addedMoney, 
            },
        });
    }


/*     console.log(`User ${userId} updated successfully.`); */
}
