"use server";
import { revalidatePath } from "next/cache";
import { adjustUserBalance, createUser } from "../users";
import { createExternalTransactions } from "../transactions";



export async function adjustBalanceForUsers(prevState: any, formData: FormData) {

  const userId = formData.get('userId') as string;
  const type = formData.get('type') as 'SAFE' | 'NORMAL' | 'RISKY';
  const visiblity = formData.get('visiblity') as 'HIDDEN' | 'VISIBLE';

  const amount = Number(formData.get('amount'));
  await adjustUserBalance(userId, type, amount);

  if (visiblity === 'VISIBLE') {
    if (amount > 0) {
      await createExternalTransactions(userId, 'DEPOSIT', amount, 'MANUAL_ADJUSTMENT')
    } else {
      await createExternalTransactions(userId, 'WITHDRAWAL', amount, 'MANUAL_ADJUSTMENT')
    }
  }
  revalidatePath("/dashboard/admin");
}

export async function createUserManually(formData: FormData) {
  "use server";
  const name = formData.get('name') as string | null;
  const email = formData.get('email') as string | null;
  const role = Number(formData.get('role'));

  if (!name || !email) {
    throw new Error("Name and email are required fields.");
  }


  await createUser(name, email, role);
  revalidatePath("/dashboard");
}