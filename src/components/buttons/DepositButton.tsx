import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react"
import { PiHandDeposit } from "react-icons/pi"

export function DepositButton({buttonText, content}: {buttonText: string, content:React.ReactNode}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className='p-3 py-4 md:p-6 bg-purple rounded-3xl text-black font-bold flex flex-row items-center gap-2'>{buttonText}<PiHandDeposit className='text-2xl font-semibold' /></button>
      </PopoverTrigger>
      <PopoverContent className="w-80 border-purple rounded-[30px]">
        <div className="grid gap-4">
          <div className="space-y-2">
            {content}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
