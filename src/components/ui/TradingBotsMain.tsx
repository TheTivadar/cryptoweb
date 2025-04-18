import Link from 'next/link'
import FlashyCards from '../card/FlashyCards'

const TradingBotsMain = () => {
    return (
        <div className='w-full  h-full border rounded-[30px] border-transparent lg:border-purple/50 bg-background flex flex-col lg:p-[1vw] pt-10 lg:pt-4'>
            <div className='flex flex-col md:flex-row items-center justify-between pb-4'>
                <h1 className='text-2xl pb-4 text-center sm:text-start'>Jelenleg elérhető kereskedő botok</h1>
                <Link href={"/dashboard/aimodels"} className='bg-purple px-4 py-2 rounded-lg text-black font-medium'>Tőke áthelyezése</Link>
            </div>
            <FlashyCards />
        </div>
    )
}

export default TradingBotsMain