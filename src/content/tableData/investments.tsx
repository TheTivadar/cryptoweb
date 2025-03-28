import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { FaChartLine, FaInfoCircle } from "react-icons/fa";
import { Investment } from "@/types/types";

export const InvestmentColumns: ColumnDef<Investment>[] = [
  {
    accessorKey: "asset",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Eszköz
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const asset = row.getValue("asset") as string;
      return (
        <div className="flex items-center gap-2">
          <FaChartLine className="text-blue-500" />
          <span className="font-medium">{asset}</span>
            {row.original.currency}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <div className="text-right">
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Összeg
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("hu-HU", {
        style: "currency",
        currency: row.original.currency,
      }).format(amount);
      
      return (
        <div className={`text-right font-medium ${
          amount >= 0 ? "text-green-600" : "text-red-600"
        }`}>
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Kezdés",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return (
        <div className="whitespace-nowrap">
          {date.toLocaleDateString("hu-HU", {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Utolsó módosítás",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      return (
        <div className="whitespace-nowrap">
          {date.toLocaleDateString("hu-HU", {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "user",
    header: "Befektető",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row.original.user?.name || "Ismeretlen"}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <Button
        variant="ghost"
        className="h-8 w-8 p-0 text-blue-500"
        onClick={() => {

        }}
      >
        <FaInfoCircle className="h-4 w-4" />
        <span className="sr-only">Részletek</span>
      </Button>
    ),
  },
];