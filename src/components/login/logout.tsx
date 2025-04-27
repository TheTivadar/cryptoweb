"use client"
import { signOut } from "next-auth/react"
import { DropdownMenuItem } from "../ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { useWallet } from "@solana/wallet-adapter-react";
import { redirect } from "next/navigation";
import { useRouter } from "@/i18n/navigation";

export function Logout() {
    const router = useRouter()
    const { disconnect } = useWallet();
    const handleLogoutWallet = async () => {
        try {
            await disconnect()
            await signOut({
                redirect: false,
                callbackUrl: '/' // This will be handled by next-intl
            })
            router.push('/') // Manually redirect after sign out
        } catch (error) {
            console.error('Logout error:', error)
        }
    };
    return (
        <DropdownMenuItem
            onClick={() => {
                handleLogoutWallet();
            }}
        >
            <LogOut />
            <p className="text-white">Kijelentkezés</p>
        </DropdownMenuItem>
    )
}