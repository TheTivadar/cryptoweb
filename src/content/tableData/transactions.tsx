"use client"
import { Button } from "@/components/ui/button"
import { Transaction } from "@/types/types"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { FaFileDownload } from "react-icons/fa"



export const TransactionColumns: ColumnDef<Transaction>[] = [
    {
      accessorKey: "type",
      header: "Típus",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("type")}</div>
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Összeg
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"));
        return (
          <div className="text-right font-medium">
            {amount} {row.original.currency}
          </div>
        );
      },
    },
    {
      accessorKey: "description",
      header: "Leírás",
      cell: ({ row }) => (
        <div>{row.getValue("description") || "Nincs leírás"}</div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Dátum
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("createdAt"));
        return <div>{date.toLocaleDateString()}</div>;
      },
    },
    {
      accessorKey: "user",
      header: "Felhasználó",
      cell: ({ row }) => (
        <div>{row.original.user?.name || "Ismeretlen"}</div>
      ),
    },
  ];