import prisma from "@/lib/prisma"


export async function getUser() {
    return await prisma.user.findMany()
}

export async function createUser(data: {name:string,email:string, role:number , balance:number}){
    return await prisma.user.create({
        data
    })
}