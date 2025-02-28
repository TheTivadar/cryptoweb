"use client"
import { usePathname } from 'next/navigation'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb'

const BreadCrumbDemo = () => {
    const pathName = usePathname()
    const cleanedPathname = pathName.split("/").filter(Boolean);

    const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || "";
    let accumulatedPath = "";

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    {cleanedPathname.map((path: string, index: number) => {
                        accumulatedPath += `/${path}`; // Append each path to build the correct link
                        const href = `${baseUrl}${accumulatedPath}`;
                        return (
                            <div className='flex flex-row items-center justify-center ' key={index}>
                                <BreadcrumbItem className="hidden md:block" >
                                    <BreadcrumbLink href={href}>
                                        {path}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator
                                    className={` pl-2 ${index === cleanedPathname.length - 1 ? "hidden" : "hidden md:block"}`}
                                />
                            </div>)
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div >
    )
}

export default BreadCrumbDemo