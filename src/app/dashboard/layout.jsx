import { auth } from "@/auth";
import { AppSidebar } from "@/components/app-sidebar";
import {
    SidebarProvider
} from "@/components/ui/sidebar";
import { ThemeProvider } from "../../components/providers/theme-provider";
import TopBar from "../../components/TopBar";
import { getUserEmail } from "../../lib/users"
import  UserInitializer  from "../../components/providers/website-initializer"

export default async function Layout({ children }) {
    const session = await auth();
    const normalUser = await getUserEmail(session.user.email)

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <UserInitializer normalUser={normalUser} />
                <AppSidebar session={session} />
                <main className="w-full ">
                    <TopBar />
                    {children}
                </main>
            </SidebarProvider>
        </ThemeProvider>
    );
}
