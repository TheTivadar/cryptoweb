import { auth } from "@/auth";
import { AppSidebar } from "@/components/app-sidebar";
import {
    SidebarProvider
} from "@/components/ui/sidebar";
import { ThemeProvider } from "../../components/providers/theme-provider";
import TopBar from "../../components/TopBar";
import { getUserByEmail } from "../../lib/users"
import UserInitializer from "../../components/providers/website-initializer"
import NewUserForm from "../../components/prisma/addUser"
import AppWalletProvider from "../../components/providers/appWalletProvider"
import { Separator } from "@/components/ui/separator";

export default async function Layout({ children }) {
    const session = await auth();
    const normalUser = await getUserByEmail(session.user.email)
    if (normalUser === null) {
        await NewUserForm(session)
    }
    return (
        <AppWalletProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <SidebarProvider>
                    <UserInitializer normalUser={normalUser} />
                    <AppSidebar session={session} />
                    <main className="w-full main-with-bg h-full">
                        <TopBar />
                        <Separator />
                        {children}
                    </main>
                </SidebarProvider>
            </ThemeProvider>
        </AppWalletProvider>
    );
}
