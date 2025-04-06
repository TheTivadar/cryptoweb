import React from 'react'
import { tradingTiers } from '@/data/tradingTiersData'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"
import { HoverCardDemo } from '@/components/card/InformationHover'

const Models = () => {
  return (
    <div className='px-4  pt-10'>
      <TradingTiersTable />
    </div>
  )
}

export default Models

const TradingTiersTable = () => {

  return (
    <Table className="rounded-lg border bg-background">
      <TableHeader>
        {/* Main header row */}
        <TableRow className="bg-muted py-4 ">
          <TableHead className="w-[100px] py-6 text-center text-xl border-l-4">Tier</TableHead>
          <TableHead className='text-center text-xl'>Egyenleg </TableHead>
          <TableHead colSpan={2} className="text-center text-xl">
            Biztonságos
          </TableHead>
          <TableHead colSpan={2} className="text-center text-xl">
            Normál
          </TableHead>
          <TableHead colSpan={2} className="text-center text-xl border-r-4">
            Agresszív
          </TableHead>
        </TableRow>

        {/* Sub-header row */}
        <TableRow className="bg-secondary/50 ">
          <TableHead className='border-l-4'></TableHead>
          <TableHead></TableHead>
          <TableHead className=' py-3 md:py-0'><HoverCardDemo title={"Jutalék díj (%)"} description={"Ez az a százalék amit egy sikeres kereskedés után a nyereségből levonunk."} className='no-underline text-center text-lg text-muted-foreground'/></TableHead>
          <TableHead ><HoverCardDemo title={"Kompenzáció (%)"} description={"Sikertelen kereskedés után a veszteség ennyi százalékát visszatéréritjük"} className='no-underline text-center text-lg text-muted-foreground'/></TableHead>
          <TableHead ><HoverCardDemo title={"Jutalék díj (%)"} description={"Ez az a százalék amit egy sikeres kereskedés után a nyereségből levonunk."} className='no-underline text-center text-lg text-muted-foreground'/></TableHead>
          <TableHead ><HoverCardDemo title={"Kompenzáció (%)"} description={"Sikertelen kereskedés után a veszteség ennyi százalékát visszatéréritjük"} className='no-underline text-center text-lg text-muted-foreground'/></TableHead>
          <TableHead ><HoverCardDemo title={"Jutalék díj (%)"} description={"Ez az a százalék amit egy sikeres kereskedés után a nyereségből levonunk."} className='no-underline text-center text-lg text-muted-foreground'/></TableHead>
          <TableHead className='border-r-4'><HoverCardDemo title={"Kompenzáció (%)"} description={"Sikertelen kereskedés után a veszteség ennyi százalékát visszatéréritjük"} className='no-underline text-center text-lg text-muted-foreground'/></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {tradingTiers.map((tier) => (
          <TableRow key={tier.tier} className='py-6 text-xl font-medium '>
            <TableCell className="font-medium py-10 border-4 border-t text-center">{tier.tier}</TableCell>
            <TableCell className='border border-b-4 text-center'>{tier.balance}$</TableCell>

            {/* Safe data */}
            <TableCell className='border-b-4 border-l-4 text-center'>{tier.safe.commissionFee}</TableCell>
            <TableCell className='border-b-4 text-center'>{tier.safe.compensation}</TableCell>

            {/* Normal data */}
            <TableCell className='border-b-4 border-l-4 text-center'>{tier.normal.commissionFee}</TableCell>
            <TableCell className='border-b-4 text-center'>{tier.normal.compensation}</TableCell>

            {/* Risky data */}
            <TableCell className='border-b-4 border-l-4 text-center'>{tier.risky.commissionFee}</TableCell>
            <TableCell className='border-b-4 text-center border-r-4'>{tier.risky.compensation}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}