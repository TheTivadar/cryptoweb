"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import Link from "next/link"


/* export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
} */

export const columns: ColumnDef<any>[] = [
    {
        accessorKey: "pairData.baseToken.name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Token
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => (
            <div className="lowercase flex flex-row items-center w-[300px] ">
                {
                    row.original?.pairData.chainId === "solana" ? ( // Use optional chaining
                        <Image
                            width={100}
                            height={100}
                            src={"/solana.png"}
                            alt="Token Img"
                            className="size-5 ml-2"
                        />
                    ) : row.original?.pairData.chainId === "bsc" ? (
                        <Image
                            width={100}
                            height={100}
                            src={"/bnb.png"}
                            alt="Token Img"
                            className="size-5 ml-2"
                        />
                    ) : row.original?.pairData.chainId === "ethereum" ? (
                        <Image
                            width={100}
                            height={100}
                            src={"/eth.webp"}
                            alt="Token Img"
                            className="size-5 ml-2"
                        />
                    ) :
                        <div className="size-5 border-2 rounded-md border-gray-800  ml-2 place-content-center">?</div>
                }
                {
                    row.original?.icon ? ( // Use optional chaining
                        <Image
                            width={100}
                            height={100}
                            src={row.original.icon}
                            alt="Token Img"
                            className="size-6 ml-2"
                        />
                    ) :
                        <div className="size-6 border-2 rounded-md border-gray-800  ml-2" />
                }
                <div className="flex flex-row items-center pl-2">
                    <p className="text-white/50"><span className="text-base font-medium text-white">{row.original.pairData.baseToken.symbol}</span>/{row.original.pairData.quoteToken.symbol}</p>
                </div>
                <p className="truncate pl-2">{row.original.pairData.baseToken.name}</p>
            </div>
        ),
    },
    {
        accessorKey: "pairData.priceUsd",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => {
            const priceUsd = row.original.pairData.priceUsd;
            const priceNative = row.original.pairData.priceNative;
            const amount = parseFloat(priceUsd || priceNative);
            if (isNaN(amount)) {
                return <div className="text-right font-medium">N/A</div>;
            }

            return <div className="text-left font-medium">${amount}</div>;
        },
    },
    {
        accessorKey: "pairData.pairCreatedAt",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Age
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => {
            const createdAt = row.original.pairData.pairCreatedAt; // Assuming pairCreatedAt is in milliseconds
            const now = Date.now(); // Current timestamp in milliseconds
            const ageInMilliseconds = now - createdAt; // Age in milliseconds

            // Convert age to seconds, minutes, hours, and days
            const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
            const ageInMinutes = Math.floor(ageInSeconds / 60);
            const ageInHours = Math.floor(ageInMinutes / 60);
            const ageInDays = Math.floor(ageInHours / 24);

            if (ageInSeconds < 60) {
                return <div className="lowercase">{ageInSeconds}s</div>; // Show in seconds
            } else if (ageInMinutes < 60) {
                return <div className="lowercase">{ageInMinutes}m</div>; // Show in minutes
            } else if (ageInHours < 24) {
                return <div className="lowercase">{ageInHours}h</div>; // Show in hours
            } else {
                return <div className="lowercase">{ageInDays}d</div>; // Show in days
            }
        },
    },
    {
        accessorKey: "pairData.txns.h24.buys", // Access nested field
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Buys
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.original.pairData.txns.h24.buys}</div>, // Access nested field
    },
    {
        accessorKey: "pairData.txns.h24.sells", // Access nested field
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Sells
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => <div className="lowercase">{row.original.pairData.txns.h24.sells}</div>,
    },
    {
        accessorKey: "pairData.volume.h24",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Volume
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => {
            const volume = row.original.pairData.volume.h24;
            return <div className="lowercase">{volume}</div>;
        },
    },
    {
        accessorKey: "pairData.liquidity.usd", // Access nested field
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Liquidity
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => {
            const liquidity = row.original.pairData.liquidity?.usd;
            if (liquidity === undefined || liquidity === null) {
                return <div className="lowercase">N/A</div>;
            }
            const amount = parseFloat(liquidity);
            return <div className="lowercase">${amount}</div>;
        },
    },
    {
        accessorKey: "pairData.priceChange.m5",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    5M
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => <div className={`lowercase ${row.original.pairData.priceChange.m5 > 0 ? "text-green-500" : row.original.pairData.priceChange.m5 < 0 ? "text-red-500" : "text-white/80"}`}>{row.original.pairData.priceChange.m5}%</div>
    },
    {
        accessorKey: "pairData.priceChange.h1",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    1H
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => <div className={`lowercase ${row.original.pairData.priceChange.h1 > 0 ? "text-green-500" : row.original.pairData.priceChange.h1 < 0 ? "text-red-500" : "text-white/80"}`}>{row.original.pairData.priceChange.h1}%</div>
    },
    {
        accessorKey: "pairData.priceChange.h6",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    6H
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => <div className={`lowercase ${row.original.pairData.priceChange.h6 > 0 ? "text-green-500" : row.original.pairData.priceChange.h6 < 0 ? "text-red-500" : "text-white/80"}`}>{row.original.pairData.priceChange.h6}%</div>
    },
    {
        accessorKey: "pairData.priceChange.h24",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    24H
                    {/*  <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => <div className={`lowercase ${row.original.pairData.priceChange.h24 > 0 ? "text-green-500" : row.original.pairData.priceChange.h24 < 0 ? "text-red-500" : "text-white/80"}`}>{row.original.pairData.priceChange.h24}%</div>
    },
    {
        accessorKey: "pairData.marketCap", // Access nested field
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    MCap
                    {/* <ArrowUpDown /> */}
                </Button>
            );
        },
        cell: ({ row }) => {
            const marketCap = row.original.pairData.marketCap; // Access nested field
            return <div className="lowercase">{marketCap}</div>;
        },
    },
];

export function CryptoTable({ data }: { data: any }) {
    console.log(data)
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 30,
    });
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        onPaginationChange: setPagination,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            pagination,
        },
    })

    return (
        <div className="w-full">
            {/*  <div className="flex items-center py-4"> */}
            {/*  <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                /> */}
            {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Oszlopok <ChevronDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div> */}
            <div className=" border overflow-x-auto">
                <Table>
                    <TableHeader className="bg-[#34343b]">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="border-2 border-white/20">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className="bg-gray-950/80">
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => {

                                return (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id} className="border-2 border-white/10">
                                                <Link href={`tokens/${row.original.pairData.chainId}=${row.original.pairData.baseToken.address}`}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </Link>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                )
                            })
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
