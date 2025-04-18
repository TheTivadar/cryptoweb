import { CalendarIcon } from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/lib/utils"

export function HoverCardDemo({title, description, className}:{title:string, description:string,className?:string}) {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link" className={cn(`underline`, className)}>{title}</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex flex-col justify-between space-x-4 space-y-1">
                    <h4 className="text-sm font-semibold">{title}</h4>
                    <p className="text-sm">
                        {description}
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
