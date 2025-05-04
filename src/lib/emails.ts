import prisma from "@/lib/prisma";



export async function createEmails({
    email,
    category,
  }: {
    email: string;
    category: string;

  }) {
    return await prisma.subscription.create({
      data: {
        email,
        category,
      },
    });
  }