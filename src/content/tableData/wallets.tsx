import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { FaCopy, FaExternalLinkAlt } from "react-icons/fa";
import { Wallet } from "@/types/types";

export const WalletColumns: ColumnDef<Wallet>[] = [
  {
    accessorKey: "address",
    header: "Cím",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="font-mono">{row.getValue("address")}</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 text-gray-500 hover:text-indigo-500"
          onClick={() => {
            navigator.clipboard.writeText(row.getValue("address"));
            // Add toast notification if needed
          }}
        >
          <FaCopy className="h-4 w-4" />
          <span className="sr-only">Másolás</span>
        </Button>
      </div>
    ),
  },
/*   {
    accessorKey: "currency",
    header: "Pénznem",
    cell: ({ row }) => (
      <div className="uppercase">{row.getValue("currency")}</div>
    ),
  }, */
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Létrehozva
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return <div>{date.toLocaleDateString("hu-HU")}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Frissítve
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      return <div>{date.toLocaleDateString("hu-HU")}</div>;
    },
  },
  {
    accessorKey: "user",
    header: "Tulajdonos",
    cell: ({ row }) => (
      <div>{row.original.user?.name || "Ismeretlen"}</div>
    ),
  },
  /* {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const wallet = row.original;
      const explorerUrl = `https://explorer.solana.com/address/${wallet.address}`;
      
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-indigo-500"
            onClick={() => window.open(explorerUrl, "_blank")}
          >
            <FaExternalLinkAlt className="h-4 w-4" />
            <span className="sr-only">Megnyitás Explorerben</span>
          </Button>
        </div>
      );
    },
  }, */
];