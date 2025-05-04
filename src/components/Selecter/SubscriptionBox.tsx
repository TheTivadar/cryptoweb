"use client"
import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function SubscriptionBox({
  data,
  value,
  setValue
}: {
  data: Array<{value: string, name: string, id?: number}>;
  value: string;
  setValue: (val: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative inline-flex h-12 w-full overflow-hidden rounded-[10px] p-[1px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="inline-flex h-full w-full items-center justify-center rounded-[9px] bg-slate-950 backdrop-blur-3xl">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between bg-transparent hover:bg-transparent text-white"
            >
              {value
                ? data.find((item) => item.value === value)?.name
                : "Válassz lehetőséget"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0 border-slate-700 bg-slate-950">
            <Command>
              <CommandEmpty>Nincs találat</CommandEmpty>
              <CommandGroup className="bg-slate-950">
                {data.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    className="hover:bg-slate-800 text-white"
                  >
                    {item.name}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}