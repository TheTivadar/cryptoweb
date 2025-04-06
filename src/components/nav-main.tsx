"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { isMobile, setOpenMobile } = useSidebar()
  const pathName = usePathname().split("/").pop()
  return (
    <SidebarGroup>
      <SidebarGroupLabel>AI kereskedés</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              {item.items?.length ?
                <div>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title} className="py-6 ">
                      {item.icon && <item.icon />}
                      <span className="font-semibold">{item.title}</span>
                      {item.items?.length ? <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> : ""}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title} >
                          <SidebarMenuSubButton asChild >
                            <Link href={subItem.url} onClick={() => {
                              if (isMobile) {
                                setOpenMobile(false)
                              }
                            }}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </div>
                : <div>
                  <Link href={item.url} onClick={() => {
                    if (isMobile) {
                      setOpenMobile(false)
                    }
                  }}>
                    <SidebarMenuButton tooltip={item.title} className={ item.url.split("/").pop() === pathName ? "bg-purple py-6   font-semibold text-black": "text-white py-6  font-semibold"}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </div>}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
