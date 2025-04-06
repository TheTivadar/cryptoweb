'use server'

import { createExpense } from '@/lib/expenses'
import { revalidatePath } from 'next/cache'

import { transferBetweenBalances } from './pot'
import { createInternalTransactions } from './transactions'




export async function createExpenseAction(state: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries())

  const title = data.title as string
  if (typeof title !== 'string') {
    throw new Error('Title must be a string')
  }

  const amount = parseFloat(data.amount as string)
  if (isNaN(amount)) {
    throw new Error('Amount must be a number')
  }

  await createExpense({ title, amount })
  revalidatePath('/')
}

/* export async function createUserAction(nameData: string, emailData: string) {
  const name = nameData as string
  if (typeof name !== 'string') {
    throw new Error('name must be a string')
  }
  const email = emailData as string
  if (typeof email !== 'string') {
    throw new Error('email must be a string')
  }

  const role = 0
  const balance = 0


  await createUser({ name, email, role, balance })
    revalidatePath('/')
} */


export async function transferBetweenPots(state: any, fromData: FormData) {
  try {
    const data = Object.fromEntries(fromData.entries())
    const userId = data.userId as string
    if (typeof userId !== 'string') {
      throw new Error('userId must be a string')
    }
    const fromType = data.fromType as 'SAFE' | 'NORMAL' | 'RISKY';
    if (typeof fromType !== 'string') {
      throw new Error('fromType must be a string')
    }
    const toType = data.toType as 'SAFE' | 'NORMAL' | 'RISKY';
    if (typeof toType !== 'string') {
      throw new Error('toType must be a string')
    }
    const amount = parseFloat(data.amount as string)
    if (isNaN(amount)) {
      throw new Error('Amount must be a number')
    }
    await transferBetweenBalances(userId, fromType, toType, amount)
    await createInternalTransactions(userId, amount, fromType, toType)
    revalidatePath("/dashboard/aimodels");
    return { success: true, message: 'Transfer successful' };
  } catch (error) {
    console.error('Transfer failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
