import React from 'react'
import Background from './background/background'
import { useTranslations } from 'next-intl'

const Commissions = () => {
    const t = useTranslations('profitabilityInfo')
    return (
        <div className='  w-full h-full overflow-x-hidden py-16 md:py-32 relative'>
            <Background />
            <div className='relative z-10 '>
                <h1 className='text-white text-4xl md:text-7xl text-center font-semibold pb-4 md:pb-10'>{t('title')}</h1>
                <p className='text-white/80 max-w-5xl text-center mx-auto font-medium'>{t('description')}</p>
                <div className='sm:grid flex flex-col max-w-[1800px] mx-auto sm:flex-none sm:grid-cols-12 pt-20 px-4 sm:px-10 gap-10 lg:px-0 lg:gap-0'>
                    <div className='hidden lg:block lg:col-span-1' />
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 h-auto'>
                        <div className='flex  flex-col order sm:order-none sm:flex-row sm:items-center gap-4'>
                            <h1 className='text-white order-2 font-semibold text-xl'>{t('commissionTitle')}</h1>
                            <div className='size-4 order-1 bg-yellow-500 rounded-full ' />
                        </div>
                        <p className='text-white pt-4 '>{t('commissionDescription1')}<br /><span className='text-lg font-semibold'>{t('commissionDescription2')}</span>{t('commissionDescription3')}
                        </p>
                        <p className="text-white pt-4">
                            {t('commissionDescription4')}
                        </p>
                        <ul className="text-white pl-6 pt-2 list-disc">
                            <li>{t('commissionFeatures.0')}</li>
                            <li>{t('commissionFeatures.1')}</li>
                            <li>{t('commissionFeatures.2')}</li>
                        </ul>
                    </div>
                    < div className='hidden lg:block col-span-2' />
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-center'>
                        <div className='flex  flex-col order sm:order-none sm:flex-row sm:items-center gap-4'>
                            <h1 className='text-white order-2 font-semibold text-xl'>{t('compensationTitle')}</h1>
                            <div className='size-4 order-1 bg-red-500 rounded-full ' />
                        </div>
                        <p className='text-white pt-4'>
                            {t('compensationDescription')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commissions