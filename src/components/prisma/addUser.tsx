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

    // Ellenőrizzük, hogy létezik-e már felhasználó az adatbázisban a megadott email cím alapján
    const existingUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    });

    // Ha a felhasználó nem létezik
    if (!existingUser) {
        console.log("User does not exist, creating new user...");
        // Új felhasználó létrehozása
        await createUserAction(session.user.name, session.user.email);
    } else {
        // Ha már létezik, kiírjuk az email címet
        console.log("User with this email already exists:", session.user.email);
    }
}
