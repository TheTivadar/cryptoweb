"use server";
import { revalidatePath } from "next/cache";
import { adjustBalancePot, transferBetweenBalances, updateBalancePotTotal } from "../pot";
import { createInternalTransactions } from "../transactions";





export async function incrementPot(prevState: any,formData: FormData) {
  const type = formData.get('type') as 'SAFE' | 'NORMAL';
  const amount = Number(formData.get('amount'));
  await adjustBalancePot(type, amount);
  revalidatePath('/dashboard/admin')
}



  export async function updatePot(prevState: any,formData: FormData) {

    const type = formData.get('type') as 'SAFE' | 'NORMAL';
    const amount = Number(formData.get('amount'));
    await updateBalancePotTotal(type, amount);
    revalidatePath('/dashboard/admin')
  }


   export async function transferPots(formData: FormData) {
     "use server";
    const userId = formData.get('userId') as string;
    const fromType = formData.get('fromType') as 'SAFE' | 'NORMAL' | 'RISKY';
    const toType = formData.get('toType') as 'SAFE' | 'NORMAL' | 'RISKY';
    const amount = Number(formData.get('amount'));
    if(!userId) {
      throw new Error('User ID is missing in the form data.');
    }
    await transferBetweenBalances(userId, fromType, toType, amount )
    await createInternalTransactions(userId, amount, fromType, toType )
  } 

    