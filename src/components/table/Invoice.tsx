"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { InvestmentColumns } from "@/content/tableData/investments"
import { TransactionColumns } from "@/content/tableData/transactions"
import { WalletColumns } from "@/content/tableData/wallets"
import { Wallet } from "@/types/types"
import { Separator } from '../ui/separator'
import { InvoiceTable } from "./InvoiceTable"


const UserInvoice = ({wallets, transactions}:{wallets?:Wallet[], transactions?:any[]}) => {
   const { investments, transfers } = transactions?.reduce((acc, transaction) => {
    if (transaction.type === 'DEPOSIT' || transaction.type === 'WITHDRAWAL') {
      acc.investments.push(transaction);
    }
    if (transaction.type === 'INTERNAL_TRANSFER') {
      acc.transfers.push(transaction);
    }
    return acc;
  }, { investments: [] as any[], transfers: [] as any[] });

  return (
    <Card className='px-2 pt-4 sm:pt-0 sm:px-4 my-6 sm:p-4 border-indigo-300'>
      <CardTitle className='text-2xl pb-4'>
        Korábbi tevékenységek
      </CardTitle>
      <Separator />
      <Tabs defaultValue="invoice" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-black-100  rounded-none sm:rounded-b-lg ">
          <TabsTrigger className="text-sm sm:text-base -mt-1" value="investment">Befizetések</TabsTrigger>
          <TabsTrigger className="text-sm sm:text-base -mt-1" value="transaction">Tranzakciók</TabsTrigger>
          <TabsTrigger className="text-sm sm:text-base -mt-1" value="wallet">Tárcák</TabsTrigger>
        </TabsList>
        <TabsContent value="investment">
          <Card>
            <CardHeader className="p-0">
              <CardDescription>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 p-0 pt-4">
             { investments && <InvoiceTable data={investments} columns={InvestmentColumns} />}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="transaction">
          <Card>
            <CardHeader className="p-0">
              <CardTitle></CardTitle>
              <CardDescription>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 p-0 pt-4">
            {transfers &&  <InvoiceTable data={transfers} columns={TransactionColumns} />}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="wallet">
          <Card>
            <CardHeader className="p-0">
              <CardTitle></CardTitle>
              <CardDescription>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 p-0 pt-4">
              {wallets && <InvoiceTable data={wallets} columns={WalletColumns}/>}
            </CardContent>
            <CardFooter>
              <Button>Módosítás</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

export default UserInvoice