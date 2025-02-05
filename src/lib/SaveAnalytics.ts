import prisma from "@/lib/prisma"; 



  export async function saveAnalyticsForDays(user_id: string, areaChart: { date: string; crypto: number }[]) {
    for (let entry of areaChart) {
      const date = new Date(entry.date); // Convert string date to Date object
  
      try {
        // Using upsert to either create or update the analytics record for the given user on the specific date
        await prisma.analytics.upsert({
          where: {
            userId_date: {
              userId: user_id,  // Ensure it's the same user
              date: date,       // Ensure it's the correct date
            },
          },
          update: {
            totalBalance: entry.crypto, // Update the balance if the record exists
            totalProfit: 0,             // You can update profit here (set default as needed)
          },
          create: {
            userId: user_id,            // Create new record with user_id
            totalBalance: entry.crypto, // Store the crypto value
            date: date,                 // Store the date
            totalProfit: 0,             // Default totalProfit if not provided
          },
        });
      } catch (error) {
        console.error(`Failed to save data for date ${entry.date}:`, error);
      }
    }
  }
  