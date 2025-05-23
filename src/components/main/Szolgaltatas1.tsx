
import Image from 'next/image';
import Link from 'next/link';
import Background from '../background/background';
import { useTranslations } from 'next-intl';

const Szolgaltatas1 = () => {

    const t = useTranslations('mainfeatures1');
    const featureKeys = ['1', '2', '3', '4'];
    const data = featureKeys.map((key, index) => ({
        id: index + 1,
        title: t(`${key}.title`),
        description: t(`${key}.description`),
    }));
    return (
        <div className='bg-black-100 w-full h-full overflow-x-hidden py-16 md:py-32 relative'>
            <Background />
            <div className='grid grid-cols-12 relative z-10  max-w-[1920px] mx-auto'>
                <div className='col-span-12 lg:col-span-7 flex flex-col px-4 lg:px-0 lg:pl-[6vw] z-10 relative'>
                    <h1 className={`pb-10 text-white `}>
                        <span className="text-4xl sm:text-5xl font-extralight">{t('headline.line1')}</span> <br />
                        <span className="text-4xl sm:text-5xl font-medium">{t('headline.line2')}</span> <br />
                        <span className="text-4xl sm:text-5xl font-extralight">{t('headline.line3')}</span>
                    </h1>
                    <div className=' grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-7 gap-y-10 gap-4'>
                        {data.map((item, index) => (
                            <div className='col-span-3' key={index}>
                                <Cards item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative col-span-12 lg:col-span-5 flex items-center justify-center pt-20 lg:pt-0 px-4 lg:px-0">
                    <div className="absolute inset-0 m-auto max-h-[600px] max-w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
                    <Image
                        src="/dashboard.jpg"
                        alt="dashboard"
                        width={1000}
                        height={1000}
                        className="w-auto max-h-[500px]  lg:max-h-[700px] border-4 border-gray-300/40 lg:ml-20 rounded-[25px] z-10 relative"
                    />
                </div>
                <div className='col-span-6 lg:col-span-2 pl-[6vw] pt-14'>
                    <Link href={'/login'} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-[10px] border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        {t('cta')}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Szolgaltatas1

interface FeatureProps {
    id: number;
    title: string;
    description: string;
}




const Cards = ({ item }: { item: FeatureProps }) => {
    return (
        <div>
            <h1 className='text-xl sm:text-2xl font-semibold mb-1 text-white/90'>{item.title}</h1>
            <p className=' text-sm sm:text-base font-medium text-white/60'>{item.description}</p>
        </div>
    )


}