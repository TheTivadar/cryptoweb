import Image from 'next/image';
import Background from '../background/background';
import { useTranslations } from 'next-intl';

const BigCards = () => {
    const t = useTranslations('toInvest')
    const t2 = useTranslations('tierCards')
    const data = [
        {
            id: "0",
            title: t2('0.title'),
            description: t2('0.description'),
            features: [
                t2('0.features.0'),
                t2('0.features.1'),
                t2('0.features.2'),
            ],
        },
        {
            id: "1",
            title: t2('1.title'),
            description: t2('1.description'),
            features: [
                t2('1.features.0'),
                t2('1.features.1'),
                t2('1.features.2'),
                t2('1.features.3'),
            ],
        },
        {
            id: "2",
            title: t2('2.title'),
            description: t2('2.description'),
            features: [
                t2('2.features.0'),
                t2('2.features.1'),
                t2('2.features.2'),
            ],
        },
    ]
    return (
        <div className='bg-black-100 pt-10 md:pt-0'>
            <Background />
            <div className='relative max-w-7xl mx-auto z-10'>
                <div className="absolute inset-0 top-[20vh] left-[0%] h-[600px] w-[1400px] bg-blue-600 blur-3xl opacity-30 rounded-full z-0"></div>
                <div className="absolute inset-0 -top-[10vh] left-[0%] h-[600px] w-[1400px] bg-violet-950 blur-3xl opacity-40 rounded-full z-0"></div>
                <div className="flex md:gap-[2px]  max-md:flex-wrap px-4 md:px-0 z-10 relative">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="relative w-[19rem] bg-black-100 lg:min-w-[400px] max-lg:w-full h-full px-6 overflow-hidden border md:odd:border-none  border-white/20 shadow-2xl rounded-[2rem] lg:w-auto even:pt-14 even:pb-8 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-b from-black-100 via-black-100   ${item.id === "0" ? "to-yellow-500/20" : item.id === "1" ? "to-blue-500/20" : "to-red-500/30"}`} />
                            <div className='relative z-10'>

                                <h4 className={`h4 mb-4  text-3xl font-semibold underline underline-offset-4 ${item.id === "0" ? "decoration-yellow-500" : item.id === "1" ? "decoration-blue-500" : "decoration-red-500"}`}>{item.title}</h4>

                                <p className="body-2 min-h-[2rem] md:min-h-[4rem] mb-3 text-n-1/50 text-white/80 py-6">
                                    {item.description}
                                </p>
                                <ul>
                                    {item.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start py-5 border-t border-n-6"
                                        >
                                            <Image src={"/technologies/check.svg"} width={24} height={24} alt="Check" />
                                            <p className="body-2 ml-4 text-white/80">{feature}</p>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className=" my-6 px-6  p-2 bg-violet-500 text-white rounded-[10px]  hover:bg-violet-600 transition-colors duration-300 ease-in-out"
                                >
                                    {t('text')}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BigCards


