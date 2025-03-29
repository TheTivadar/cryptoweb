"use client"

import {
  DropdownMenu
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import { FaWallet } from "react-icons/fa"
import { RiExpandUpDownLine } from "react-icons/ri";

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
  const { isMobile, setOpenMobile } = useSidebar()
  return (
    <SidebarMenu >
      <SidebarMenuItem>
        <DropdownMenu >
          <SidebarMenuButton size={"lg"} asChild>
            <Link href={"/dashboard"} onClick={() => {
                          if (isMobile) {
                            setOpenMobile(false)
                          }
                        }}>
              <div className="flex flex-row items-center justify-between ">
                <div className="flex flex-row items-center justify-start">
                  <Image
                    src={"/Alogo.png"}
                    alt="logo"
                    width={50}
                    height={50}
                  />
                  <h1>Alegex AI</h1>
                </div>
              </div>
            </Link>
          </SidebarMenuButton>
          {/*  <div className="w-auto bg-violet-800 rounded-[10px] flex justify-start item-center overflow-hidden">

            <WalletMultiButton style={{
              background: 'transparent',
              color: 'white',
              display: 'flex',
              justifyContent: 'flex-start', // Align content to the start
              alignItems: 'center',
              padding: '0px 8px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              width: '100%', 
            }}><FaWallet className="mr-1 font-semibold text-xl" /> Tárca</WalletMultiButton>
          </div> */}
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
