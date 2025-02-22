import Image from 'next/image';
import React from 'react'
import CardsWithHero from './card/CardsWithHero';
import { aiTradingCardData } from '@/data/data';

const TextWithImage = () => {
    return (
        <div className='bg-black-100 w-full h-full overflow-x-hidden py-20 pb-10 lg:py-32 relative'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 lg:col-span-7 flex flex-col pl-[2vw] lg:pl-[6vw] z-10 relative w-full sm:w-[90%] lg:w-[80%]'>
                    <h1 className='text-5xl font-semibold w-[80%]  pb-10 lg:pb-20 text-white'>AI Kereskedés az Alegexszel</h1>
                    <p className='text-4xl font-[100] pb-8 text-white'>Mi az <span className='font-medium'>AI Kereskedés?</span></p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>Az AI kereskedés a mesterséges intelligencia képességeit integrálja az algoritmikus kereskedési rendszerekbe, lehetővé téve a gyorsabb, hatékonyabb és pontosabb pénzügyi döntéshozatalt.</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>Az AI kereskedési rendszerek számos tevékenységet képesek elvégezni, beleértve a történelmi árfolyam- és volumenanalízist, a kockázatértékelést, kereskedési jelek generálását, belépési és kilépési pontok meghatározását, stratégiatesztelést és az ügyletek végrehajtását.</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'> Ezek az algoritmusok nem csupán követik a piaci trendeket, hanem alkalmazkodnak is hozzájuk, optimalizálva a hozamokat és csökkentve a veszteségeket.</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>Az AI egyik leggyorsabban fejlődő területe a gépi tanulás, amely lehetővé teszi a kereskedési botok számára, hogy felismerjék, elemezzék és levonják a következtetéseket az adatokból. Ahelyett, hogy előre meghatározott szabályok alapján működnének, ezek az algoritmusok folyamatosan tanulnak és fejlődnek, alkalmazkodva a változó piaci környezethez.</p>
                </div>
                <div className="relative col-span-12 lg:col-span-5 flex justify-center items-center px-4 lg:px-0">
                    <div className="absolute inset-0 m-auto h-[600px] w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
                    <Image
                        src="/aitradingwebp.webp"
                        alt="aitrading"
                        width={1000}
                        height={1000}
                        className="w-auto lg:w-full max-h-[500px]  lg:max-h-[600px] border-4 border-gray-300/40 lg:ml-40 rounded-[25px] z-10 relative"
                    />
                </div>
                <div className='col-span-12 lg:col-span-2 pl-[6vw] pt-14'>
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Kezdj bele!
                    </button>
                </div>
            </div>
            <CardsWithHero data={aiTradingCardData}/>
            <div className='grid grid-cols-12 order py-14 lg:py-32'>
                <div className="relative col-span-12 lg:col-span-5 order-2 lg:order-1 flex flex-row justify-center items-center px-2 lg:px-0">

                    <Image
                        src="/aitrading2.jpg"
                        alt="dashboard"
                        width={1000}
                        height={1000}
                     className="w-auto lg:w-full max-h-[500px]  lg:max-h-[600px] border-4 border-gray-300/40  rounded-[25px] z-10 relative"
                    />
                </div>

                <div className='col-span-12 lg:col-span-7 flex flex-col items-start order-1 lg:order-2 text-start  pl-[2vw] lg:pl-[6vw] z-10 relative w-full sm:w-[90%] lg:w-[80%]'>
                    <h1 className='text-5xl font-semibold w-[90%] md:w-[80%] lg:w-[60%] pb-10 lg:pb-20 text-white'>Alegex AI - Folyamatos Piaci Elemzés</h1>
                    <p className='text-4xl font-[100] pb-8 text-white'><span className='font-medium'>Hogyan működik </span>az Algoritmusunk?</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>Az Alegex AI algoritmusa egy fejlett, mesterséges intelligenciával támogatott kereskedési rendszer, amely a nap 24 órájában folyamatosan figyeli a piacokat, hogy azonosítsa a legjobb befektetési lehetőségeket. Az algoritmus nem csupán reagál a piaci mozgásokra, hanem előre is jelzi azokat, így segít maximalizálni a hozamokat és minimalizálni a kockázatokat.</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>A rendszer valós időben elemzi a technikai és fundamentális adatokat, figyelembe véve a különböző piacokat, például a részvényeket, árucikkeket, forexet és kriptovalutákat.</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>Az Alegex AI algoritmus legnagyobb előnye, hogy az emberi érzelmek befolyása nélkül hoz döntéseket, kizárólag az adatok és a statisztikai valószínűségek alapján. Ezáltal a kereskedések gyorsak, pontosak és hatékonyak lesznek, miközben a rendszer automatikusan felismeri és kihasználja a legjobb lehetőségeket.</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>Legyen szó rövid távú spekulációról vagy hosszú távú befektetési stratégiákról, az Alegex AI algoritmusa folyamatosan dolgozik, hogy ügyfeleink mindig lépéselőnyben legyenek a piacokkal szemben.</p>
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

const data = [
    {
        id: 1,
        title: "Powerful Processing",
        description: "Alegex crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
    },
    {
        id: 2,
        title: "Machine Learning",
        description: "Alegex crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
    },
    {
        id: 3,
        title: "Predictive Analysis",
        description: "Alegex crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
    },
    {
        id: 4,
        title: "Proven Performance ",
        description: "Alegex crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
    },
]

const Cards = ({ item }: { item: FeatureProps }) => {
    return (
        <div>
            <h1 className='text-2xl font-semibold mb-1'>{item.title}</h1>
            <p className='font-medium text-gray-300'>{item.description}</p>
        </div>
    )


}