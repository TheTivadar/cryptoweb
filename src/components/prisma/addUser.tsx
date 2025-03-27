
import { PrismaClient } from "@prisma/client"; // PrismaClient importálása
import { createUserAction } from "@/lib/actions"; // A felhasználó létrehozásának logikája
import { getTotalBalance } from "@/lib/balance";

const prisma = new PrismaClient();

export default async function NewUserForm(session:any) {
    if (!session?.user?.name || !session?.user?.email) {
        console.error("User name or email is missing");
        return;
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    if (!existingUser) {
        console.log("User does not exist, creating new user...");
        await createUserAction(session.user.name, session.user.email);
    } else {
        console.log("User with this email already exists:", session.user.email);
    }
}



export async function addUser(name: string, email: string, initialBalance: number) {
    const totalBalance = await getTotalBalance(); 
    const share = initialBalance / (totalBalance + initialBalance); 

    await prisma.user.create({
        data: {
            name,
            email,
            share,
        },
    });

    const existingUsers = await prisma.user.findMany();
    for (const user of existingUsers) {
        await prisma.user.update({
            where: { id: user.id },
            data: { share: user.share * (totalBalance / (totalBalance + initialBalance)) },
        });
    }
}


export async function getUserBalance(userId: string) {
    const totalBalance = await getTotalBalance(); 
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) throw new Error('User not found');
    return user.share * totalBalance;
}