"use client"

import {
  DropdownMenu
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar"
import dynamic from "next/dynamic"
import * as React from "react"


const WalletMultiButton = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then((mod) => mod.WalletMultiButton),
  { ssr: false }
);

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
    logo: React.ElementType
    plan: string
  }[]
}) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
        <WalletMultiButton  />
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
