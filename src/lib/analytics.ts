import prisma from "@/lib/prisma";

export async function getAnalytics(userId: string) {
    return await prisma.analytics.findMany({
      where: { userId },
      orderBy: { date: "asc" }, 
    });
  }

  export async function getAllAnalytics() {
    return await prisma.analytics.findMany({
      orderBy: { date: "asc" }, 
    });
  }

  export async function createAnalytics(data: {user_id: string, totalBalance: number, totalProfit: number}) {
    const today = new Date().toISOString().split("T")[0]; // Get YYYY-MM-DD
    const date = new Date(today); // Ensure the date is consistent

    return await prisma.analytics.upsert({
        where: {
          userId_date: {
            userId: data.user_id,
            date: date, // The unique constraint you set in Prisma schema
          },
        },
        update: {
          totalBalance: data.totalBalance,
          totalProfit: data.totalProfit,
          date: date,
        },
        create: {
          userId: data.user_id,
          totalBalance: data.totalBalance,
          totalProfit: data.totalProfit,
          date: date,
        },
      });
  }