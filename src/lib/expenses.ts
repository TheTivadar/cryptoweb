import prisma from '@/lib/prisma'

export async function getExpenses() {
  // @ts-ignore: Prisma Client nem találja az 'expense' modellt
  return await prisma.expense.findMany()
}

export async function createExpense(data: { amount: number; title: string }) {
  // @ts-ignore: Prisma Client nem találja az 'expense' modellt
  return await prisma.expense.create({
    data
  })
}