"use client"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function BreadcrumbDemo() {

    const pathname = usePathname();

    const [pathParts, setPathParts] = useState<string[]>([]);

    useEffect(() => {
        if (pathname) {
            setPathParts(
                pathname.split("/").filter((part) => part !== "" && part !== "dashboard")
            );
        }
    }, [pathname]);
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                {
                    pathParts.map((item, index) => (
                        <div key={index} className="flex flex-row justify-center items-center">
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/docs/components">{item}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </div>
                    ))
                }

            </BreadcrumbList>
        </Breadcrumb>
    )
}
