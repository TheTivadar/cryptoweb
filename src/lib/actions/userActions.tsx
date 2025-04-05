"use server";
import { revalidatePath } from "next/cache";
import { adjustUserBalance, createUser } from "../users";



export async function adjustBalanceForUsers(prevState: any,formData: FormData) {

  const userId = formData.get('userId') as string ;
  const type = formData.get('type') as 'SAFE' | 'NORMAL' | 'RISKY';
  const amount = Number(formData.get('amount'));
  await adjustUserBalance(userId, type, amount);
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