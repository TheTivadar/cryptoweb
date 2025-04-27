import { HoverCardDemo } from '@/components/card/InformationHover'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { tradingTiers } from '@/data/tradingTiersData'
import { useTranslations } from 'next-intl'

export const UiTable = () => {
    const t = useTranslations("tierInfoTable")
    return (
      <div className='px-2 md:px-10 bg-black-100 pt-52 hidden lg:block'>
        <div className=' z-10 relative w-full flex justify-center flex-col items-center'>
          <h1 className='items-center text-5xl md:text-7xl pb-20 font-semibold text-center '>{t('title')}<span className='font-[300]'>{' '} {t('title2')}</span></h1>
          <TradingTiersTable />
        </div>
      </div>
    )
  }
  
  export const TradingTiersTable = () => {
    const t = useTranslations("tierInfoTable")
    return (
      <Table className="rounded-lg border bg-background max-w-[1920px] mx-auto">
        <TableHeader>
          {/* Main header row */}
          <TableRow className="bg-muted py-1 md:py-4 ">
            <TableHead className="md:w-[100px] py-6 text-center text-lg md:text-xl border-l-4">{t('tier')}</TableHead>
            <TableHead className='text-center text-lg md:text-xl'>{t('balance')}</TableHead>
            <TableHead colSpan={2} className="text-center text-lg md:text-xl">
              {t('type1')}
            </TableHead>
            <TableHead colSpan={2} className="text-center text-lg md:text-xl">
            {t('type2')}
            </TableHead>
            <TableHead colSpan={2} className="text-center text-lg md:text-xl border-r-4">
            {t('type3')}
            </TableHead>
          </TableRow>
  
          {/* Sub-header row */}
          <TableRow className="bg-secondary/50 ">
            <TableHead className='border-l-4'></TableHead>
            <TableHead></TableHead>
            <TableHead className=' py-3 md:py-0'><HoverCardDemo title={t('commission')} description={t('commuissionDescription')} className='no-underline text-center text-lg text-muted-foreground' /></TableHead>
            <TableHead ><HoverCardDemo title={t('compensation')} description={t('compensationDescription')} className='no-underline text-center text-lg text-muted-foreground' /></TableHead>
            <TableHead ><HoverCardDemo title={t('commission')} description={t('commuissionDescription')} className='no-underline text-center text-lg text-muted-foreground' /></TableHead>
            <TableHead ><HoverCardDemo title={t('compensation')}description={t('compensationDescription')} className='no-underline text-center text-lg text-muted-foreground' /></TableHead>
            <TableHead ><HoverCardDemo title={t('commission')} description={t('commuissionDescription')} className='no-underline text-center text-lg text-muted-foreground' /></TableHead>
            <TableHead className='border-r-4'><HoverCardDemo title={t('compensation')} description={t('compensationDescription')} className='no-underline text-center text-lg text-muted-foreground' /></TableHead>
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