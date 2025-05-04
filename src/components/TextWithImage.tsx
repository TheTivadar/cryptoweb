"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import CardsWithHero from './card/CardsWithHero';

const TextWithImage = () => {
    const t = useTranslations('aitrading1')
    const button = useTranslations('getStarted')
    const t2 = useTranslations('aitrading2')
    const info = useTranslations('aitradingInfo')


    
     const aiTradingCardData = [
        {
            id: 1,
            title: info('0.title'),
            description: info('0.description')
        },
        {
            id: 2,
            title: info('1.title'),
            description: info('1.description')
        },
        {
            id: 3,
            title: info('2.title'),
            description: info('2.description')
        },
        {
            id: 4,
            title: info('3.title'),
            description: info('3.description')
        },
        {
            id: 5,
            title: info('4.title'),
            description: info('4.description')
        },
        {
            id: 6,
            title: info('5.title'),
            description: info('5.description')
        },
    ]
    return (
        <div className='bg-black-100 w-full h-full overflow-x-hidden py-20 pb-10 lg:py-40 relative'>
            <div className='grid grid-cols-12 max-w-[1920px] mx-auto'>
                <div className='col-span-12 lg:col-span-7 flex flex-col pl-[2vw] lg:pl-[6vw] z-10 relative w-full sm:w-[90%] lg:w-[80%]'>
                    <h1 className='text-5xl font-semibold w-[80%]  pb-10 lg:pb-20 text-white'>{t('title')}</h1>
                    <p className='text-4xl font-[100] pb-8 text-white'>{t('subtitle1')} <span className='font-medium'>{t('subtitle2')}</span></p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>{t('text1')}</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>{t('text2')}</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'> {t('text3')}</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>{t('text4')}</p>
                </div>
                <div className="relative col-span-12 lg:col-span-5 flex justify-center items-center px-4 lg:px-0">
                    <div className="absolute inset-0 m-auto h-[600px] w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
                    <Image
                        src="/aitradingwebp.webp"
                        alt="aitrading"
                        width={1000}
                        height={1000}
                        className="w-auto  max-h-[500px]  lg:max-h-[700px] border-4 mr-4 border-gray-300/40  rounded-[25px] z-10 relative"
                    />
                </div>
                <div className='col-span-12 lg:col-span-2 pl-[6vw] pt-14'>
                    <Link href={"/login"} className="inline-flex h-12 animate-shimmer whitespace-nowrap items-center justify-center rounded-[10px] border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        {button('text')}
                    </Link>
                </div>
            </div>
            <CardsWithHero data={aiTradingCardData}/>
            <div className='grid grid-cols-12 order py-14 lg:py-32 max-w-[1920px] mx-auto'>
                <div className="relative col-span-12 lg:col-span-5 order-2 lg:order-1 flex flex-row justify-center items-center px-2 lg:px-0">

                    <Image
                        src="/aitrading2.jpg"
                        alt="dashboard"
                        width={1000}
                        height={1000}
                     className="w-auto  max-h-[500px]  lg:max-h-[700px] ml-1 md:ml-4 border-4 border-gray-300/40  rounded-[25px] z-10 relative"
                    />
                </div>

                <div className='col-span-12 lg:col-span-7 flex flex-col items-start order-1 lg:order-2 text-start  pl-[2vw] lg:pl-[6vw] z-10 relative w-full sm:w-[90%] lg:w-[80%]'>
                    <h1 className='text-5xl font-semibold w-[90%] md:w-[80%] lg:w-[60%] pb-10 lg:pb-20 text-white'>{t2('title')}</h1>
                    <p className='text-4xl font-[100] pb-8 text-white'><span className='font-medium'>{t2('subtitle1')}</span> {t2('subtitle2')}</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>{t2('text1')}</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>{t2('text2')}</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>{t2('text3')}</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>{t2('text4')}</p>
                </div>
            </div>
        </div>
    )
}

export default TextWithImage

interface FeatureProps {
    id: number;
    title: string;
    description: string;
}
