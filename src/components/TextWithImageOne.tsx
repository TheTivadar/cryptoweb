import Image from 'next/image';
import React from 'react'
import Background from './background/background';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const TextWithImageOne = () => {
    const t = useTranslations('technologyInfo')
    return (
        <div className='bg-black-100 w-full h-full overflow-x-hidden py-32 relative'>
            <Background />
            <div className='grid grid-cols-12 relative z-10 max-w-[1920px] mx-auto'>
                <div className='col-span-12 lg:col-span-7 flex flex-col pl-[2vw] lg:pl-[6vw] z-10 relative w-full sm:w-[90%] lg:w-[80%]'>
                    <h1 className='text-5xl font-semibold w-[80%]  pb-10 lg:pb-20 text-white'>{t('title')}</h1>
                    <p className='text-lg font-[300] pb-6 text-white/80'>{t('text1')}</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>{t('text2')}</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>{t('text3')}</p>
                </div>
                <div className="relative col-span-12 lg:col-span-5 flex justify-center items-center px-4 lg:px-0">
                    <div className="absolute inset-0 m-auto h-[600px] w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
                    <Image
                        src="/bubbles.png"
                        alt="dashboard"
                        width={1000}
                        height={1000}
                        className="w-auto  max-h-[500px]  lg:max-h-[700px] border-4 border-gray-300/40 mr-4 rounded-[25px] z-10 relative"
                    />
                </div>
                <div className='col-span-12 lg:col-span-2 pl-[6vw] pt-14'>
                    <Link href={"/login"} className="inline-flex whitespace-nowrap h-12 animate-shimmer items-center justify-center rounded-[10px] border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        {t('cta')}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TextWithImageOne

