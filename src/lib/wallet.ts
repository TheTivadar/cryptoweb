import prisma from "@/lib/prisma";

export async function getWallet(userid:string) {
    return await prisma.wallet.findMany({
        where: {
            userId: userid
        }
    })
}

export async function createWallet(data: { address: string; userId: string }) {
    return await prisma.wallet.create({
        data: {
            address: data.address,
            userId: data.userId, 
        },
    });
}