"use client"
import { signOut } from "next-auth/react"
import { DropdownMenuItem } from "../ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { useWallet } from "@solana/wallet-adapter-react";

export function Logout() {
    const { disconnect } = useWallet();
    const handleLogoutWallet = async () => {
        await disconnect();
        signOut()
      };
    return (
        <DropdownMenuItem
            onClick={ () => {
                handleLogoutWallet();
            }}
        >
            <LogOut />
            <p className="text-white">Kijelentkezés</p>
        </DropdownMenuItem>
    )
}