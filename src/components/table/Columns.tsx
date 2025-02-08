import { ColumnDef } from "@tanstack/react-table"
import { Payment } from "./DataTable"
import { Checkbox } from "@radix-ui/react-checkbox"
import { Button } from "../ui/button"
import { ArrowUpDown } from "lucide-react"

export const ColumnsUserTable: ColumnDef<Payment>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Név
            <ArrowUpDown />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("email")}</div>
      ),
    },
    {
      accessorKey: "role",
      header: () => <div className="text-right">Jogosultság</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("role"))
        return <div className="text-right font-medium">{amount}</div>
      },
    },
    {
      accessorKey: "balance",
      header: () => <div className="text-right">Egyenleg</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("balance"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
  
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "share",
      header: () => <div className="text-right">Részesedés</div>,
      cell: ({ row }) => {
        const share = parseFloat(row.getValue("share"))
        return <div className="text-right font-medium">{share}</div>
      },
    },
    {
      accessorKey: "id",
      header: () => <div className="text-right">Id</div>,
      cell: ({ row }) => (
        <div className="capitalize text-right">{row.getValue("id")}</div>
      ),
    }
]