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
/* import { InvoiceTable } from '../table/InvoiceTable' */
import { Separator } from '../ui/separator'
import { InvoiceTable } from "./InvoiceTable"
import { Investment, Transaction, Wallet } from "@/types/types"
import { TransactionColumns } from "@/content/tableData/transactions"
import { WalletColumns } from "@/content/tableData/wallets"
import { InvestmentColumns } from "@/content/tableData/investments"
/* import { InvoiceColumns, InvoiceData } from "@/content/tableData/InvoiceData"
import { ServiceColumns, ServiceData } from "@/content/tableData/ServiceData"
import InvoiceuserData from "./InvoiceuserData" */

const UserInvoice = ({wallets, transactions, investments}:{wallets?:Wallet[], transactions?:Transaction[], investments?:Investment[]}) => {
  return (
    <Card className='px-2 pt-4 sm:pt-0 sm:px-4 my-6 sm:p-4 border-indigo-300'>
      <CardTitle className='text-2xl pb-4'>
        Számlázás
      </CardTitle>
      <Separator />
      <Tabs defaultValue="invoice" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-indigo-100 dark:bg-indigo-100/30 rounded-none sm:rounded-b-lg ">
          <TabsTrigger className="text-sm sm:text-base -mt-1" value="investment">Befizetések</TabsTrigger>
          <TabsTrigger className="text-sm sm:text-base -mt-1" value="transaction">Tranzakciók</TabsTrigger>
          <TabsTrigger className="text-sm sm:text-base -mt-1" value="wallet">Tárcák</TabsTrigger>
        </TabsList>
        <TabsContent value="investment">
          <Card>
            <CardHeader>
              <CardTitle>Befizetések</CardTitle>
              <CardDescription>
                Itt jelennek meg a korábbi befizetések, kiutalások is szerepelnek.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
             { investments && <InvoiceTable data={investments} columns={InvestmentColumns} />}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="transaction">
          <Card>
            <CardHeader>
              <CardTitle>Tranzakciók</CardTitle>
              <CardDescription>
                Korábbi tranzakciók.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
            {transactions &&  <InvoiceTable data={transactions} columns={TransactionColumns} />}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="wallet">
          <Card>
            <CardHeader>
              <CardTitle>Tárcák</CardTitle>
              <CardDescription>
                Korábban regisztrált tárcák, kiutalásoknál vagy tranzakcióknál ezek közül tudsz majd választani.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
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