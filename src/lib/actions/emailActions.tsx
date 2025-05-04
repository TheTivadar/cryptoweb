"use server";
import prisma from "@/lib/prisma";

export async function createSubscription(prevState: { error: string | null, success: boolean }, formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const category = formData.get('category') as string;
    
    if (!email || !category) {
      return { error: "Email és kategória kötelező", success: false };
    }

    await prisma.subscription.create({
      data: { email, category }
    });
    
    return { error: null, success: true };
    
  } catch (error: unknown) {
    let errorMessage = "Sikertelen művelet, kérjük próbálja meg később";
    
    if (typeof error === 'object' && error !== null && 'code' in error) {
      const prismaError = error as { code: string };
      if (prismaError.code === 'P2002') {
        errorMessage = "Az e-mail címet már korábban regisztrálták";
      }
    }
    
    return { error: errorMessage, success: false };
  }
}