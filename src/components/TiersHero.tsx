"use client"
import React, { useEffect } from 'react'
import Background from './background/background'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Lenis from 'lenis'

const TiersHero = () => {
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    const t = useTranslations("tiersHero")
    const data = t.raw('data') as {
        id: string,
        color: string,
        description: string
    }[]

    return (
        <div className='bg-black-100 h-full md:h-screen flex justify-center items-center relative pt-32 lg:pt-0'>
            <Background />
            <div className='max-w-5xl mx-auto relative z-10'>
                <div className="absolute inset-0 -top-[50%] -left-[80%] h-[600px] w-[1000px] bg-red-900 blur-3xl opacity-20 rounded-full z-0"></div>
                <div className='flex flex-col justify-center items-center' >
                    <h1 className='text-5xl pb-10 text-white text-center'>{t('title')}</h1>
                    <p className='pb-20 text-white/80 text-center px-2 md:px-4'>{t('subTitle')}</p>
                    <p className='font-medium pb-8 text-white/80'>{t('subTitle2')}</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-2 md:px-4'>
                        {data.map((items, index) => (
                            <div key={index} className='flex flex-row sm:flex-col space-x-2 items-center md:items-start'>
                                <div
                                    className="rounded-full size-4 mb-4"
                                    style={{ backgroundColor: items.color }}
                                />
                                <p className='text-white/80'>{items.description}</p>
                            </div>
                        ))}
                    </div>
                    <Link href={"/login"} className="inline-flex mt-20 h-12 animate-shimmer items-center justify-center rounded-[10px] border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        {t('button')}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TiersHero


