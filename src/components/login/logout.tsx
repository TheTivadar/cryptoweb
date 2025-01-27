"use client"
import { signOut } from "next-auth/react"
import { DropdownMenuItem } from "../ui/dropdown-menu"
import { LogOut } from "lucide-react"

export  function Logout() {
    return (
        <DropdownMenuItem
            onClick={ () => {
                 signOut();
            }}
        >
            <LogOut />
            <p className="text-white">Log out</p>
        </DropdownMenuItem>
    )
}