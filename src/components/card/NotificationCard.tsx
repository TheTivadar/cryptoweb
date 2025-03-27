import { FaArrowRight } from 'react-icons/fa'
import { Card } from '../ui/card'
import { Separator } from '../ui/separator'

const NotificationCard = () => {
    return (
        <>
            <Card className='h-full w-full rounded-[30px] border-transparent lg:border-purple/40 flex flex-col'>
                <h1 className='text-[4vh] flex justify-center font-semibold pt-10'>Hírek</h1>
                <div className='grid grid-cols-2 h-full rounded-[30px] py-[2vh] gap-[1vw] px-[0.5vw]'>
                    <NewsCard title='Új AI-k' description='Hamarosan elérhetővé válik 2 új kereskedő botunk, hogy jobban testre tudják szabni portfóliójukat.'/>
                    <NewsCard title="Új rendszer" description='Az új rendszernek hála könnyeben tudnak majd feltölteni pénzt illetve nyomon követni a változásokat.'/>
                    <NewsCard title="Alegex token" description='Várhatóan május végén megjelenik Alegex saját crypto tokenje, amiből minden user kaphat.'/>
                    <NewsCard title="Airdrop" description='Kapcsolja hozzá phantom vagy Metamask walletjet a fiókhoz, hogy részesüljön majd az airdropp-ból'/>
                </div>
            </Card>
        </>
    )
}

export default NotificationCard


const NewsCard = ({ title, description}: { title: string, description:string }) => {

    return (
        <div className='border border-gray-300/40 rounded-[10px]  pb-4 sm:rounded-[30px] h-full bg-darkblack'>
            <div className='flex flex-row items-center justify-between px-2 sm:px-6 pt-2 sm:pt-4'>
                <h1 className='text-[2vh]'>{title}</h1>
                <div className=' bg-black text-2xl md:text-4xl rounded-full'>
                    <FaArrowRight  className='p-1 sm:p-2 -rotate-[45deg]'/>
                </div>
            </div>
            <Separator className='my-2 h-[2px]'/>
            <p className='px-3 text-[1.5vh]'>{description}</p>
        </div>
    )
}