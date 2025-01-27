import { AppSidebar } from "@/components/app-sidebar";
import {
    SidebarProvider
} from "@/components/ui/sidebar";
import { ThemeProvider } from "../../components/theme-provider/theme-provider";
import TopBar from "../../components/TopBar";

export default function Layout({ children }) {
    return (
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <SidebarProvider>
                    <AppSidebar />
                    <main className="w-full ">
                        <TopBar />
                        {children}
                    </main>
                </SidebarProvider>
            </ThemeProvider>
    );
}
