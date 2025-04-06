import prisma from "@/lib/prisma";


export async function getBalanceHistory(
    options: {
      period?: 'day' | 'week' | 'month' | 'year'
      limit?: number
    } = {}
  ) {
    const { period = 'month', limit = 30 } = options
    const dateFilter = getDateFilter(period)
    
    return prisma.analytics.findMany({
      where: {
        date: { gte: dateFilter }
      },
      orderBy: { date: 'desc' },
      take: limit
    })
  }
  
  function getDateFilter(period: string) {
    const now = new Date()
    const filter = new Date(now)
    
    switch (period) {
      case 'day': filter.setDate(filter.getDate() - 1); break
      case 'week': filter.setDate(filter.getDate() - 7); break
      case 'month': filter.setMonth(filter.getMonth() - 1); break
      case 'year': filter.setFullYear(filter.getFullYear() - 1); break
      default: filter.setMonth(filter.getMonth() - 1)
    }
    
    return filter
  }