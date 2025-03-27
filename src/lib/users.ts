import prisma from "@/lib/prisma"


export async function getUser() {
    return await prisma.user.findMany()
}

export async function createUser(data: {name:string,email:string, role:number , balance:number}){
    return await prisma.user.create({
        data
    })
}

export async function getUserEmail(email: string) {
    return await prisma.user.findUnique({
        where: {
            email: email,
        },
        include: {
            wallets: true,       
            transactions: true,  
            investments: true,   
            notifications:true,
            analytics:true,
          },
    });
}
export async function getUserId(id: string) {
    return await prisma.user.findUnique({
        where: {
            id: id,
        },
    });
}