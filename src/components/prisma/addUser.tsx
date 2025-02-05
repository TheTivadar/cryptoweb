import { auth } from "@/auth"; // Ha van egy saját auth függvényed a session kezelésére
import { PrismaClient } from "@prisma/client"; // PrismaClient importálása
import { createUserAction } from "@/lib/actions"; // A felhasználó létrehozásának logikája

const prisma = new PrismaClient();

export default async function NewUserForm() {

    const session = await auth();
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
