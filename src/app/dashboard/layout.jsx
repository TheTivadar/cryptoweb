import { AppSidebar } from "@/components/app-sidebar";
import {
    SidebarProvider
} from "@/components/ui/sidebar";
import { ThemeProvider } from "../../components/providers/theme-provider";
import TopBar from "../../components/TopBar";

import { auth } from "@/auth";

export default async function Layout({ children }) {
    const session = await auth();
    return (
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <SidebarProvider>
                    <AppSidebar session={session}/>
                    <main className="w-full ">
                        <TopBar />
                        {children}
                    </main>
                </SidebarProvider>
            </ThemeProvider>
    );
}
