
import { createUser } from "@/lib/users";
import { PrismaClient } from "@prisma/client"; // PrismaClient importálása

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
        await createUser(session.user.name, session.user.email,0);
    } else {
        console.log("User with this email already exists:", session.user.email);
    }
}





