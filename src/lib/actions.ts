'use server'

import { revalidatePath } from 'next/cache'
import { createExpense } from '@/lib/expenses'
import { createUser } from './users'
import { createAnalytics } from './analytics'

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

export async function createUserAction(nameData:string,emailData:string) {
  const name =nameData as string
  if (typeof name !== 'string') {
    throw new Error('name must be a string')
  }
  const email = emailData as string
  if (typeof email !== 'string') {
    throw new Error('email must be a string')
  }

  const role = 0
  const balance = 0


  await createUser({name, email,role,balance})
/*   revalidatePath('/') */
}


export async function createAnalyticsAction(state:any, formData: FormData  ) {
  const data = Object.fromEntries(formData.entries())
  const balance = parseFloat(data.totalBalance as string)
  if (isNaN(balance)){
    throw new Error("Must be a number")
  }
  const user_id = "3d17187e-c427-466e-96d7-ed93773d1169"
  const totalProfit = 100
  await createAnalytics({user_id, totalBalance:balance,totalProfit:totalProfit})
} 

