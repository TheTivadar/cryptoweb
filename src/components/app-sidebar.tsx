"use client"

import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"

// This is sample data.
const data = {
  user: {
    name: "Általános",
    email: "m@vendeg.com",
    avatar: "/robotjobb.png",
  },
  teams: [
    {
      name: "Alegex Ai",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    }/*},
    {
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },*/
  ],
  navMain: [
    {
      title: "AI Modelek",
      url: `${process.env.NEXT_PUBLIC_URL}/dashboard/aimodels`,
      icon: Bot,
      isActive: true,
      items: [
      ],
    },
    {
      title: "Hírek",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Tőzsde hírek",
          url: `${process.env.NEXT_PUBLIC_URL}/dashboard/tradingnews`,
        },
        {
          title: "Tweet",
          url: `${process.env.NEXT_PUBLIC_URL}/dashboard/tweets`,
        }
      ],
    },
    {
      title: "Információk",
      url: "#",
      icon: SquareTerminal,
      items: [
        {
          title: "Kereskedési szintek",
          url: `${process.env.NEXT_PUBLIC_URL}/dashboard/informations/models`,
        },
        {
          title: "Alegex coin",
          url: `${process.env.NEXT_PUBLIC_URL}/dashboard/informations/alegexcoin`,
        },
      ],
    },
    {
      title: "Beállítások",
      url: `${process.env.NEXT_PUBLIC_URL}/dashboard/profile`,
      icon: Settings2,
      items: [
      ],
    },
  ],
  projects: [
    {
      name: "Piac",
      url: `${process.env.NEXT_PUBLIC_URL}/dashboard/tokens`,
      icon: Frame,
    },
/*     {
      name: "Liquidity pool",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Air Drop",
      url: "#",
      icon: Map,
    }, */
  ],
}

export function AppSidebar({
  session,
  ...props
}: React.ComponentProps<typeof Sidebar> & { session: any }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={session!} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
