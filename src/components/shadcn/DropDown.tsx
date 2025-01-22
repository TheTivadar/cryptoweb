import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">HU</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            EN
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            DE
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            FR
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            IT
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            TR
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            ES
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            HU
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
