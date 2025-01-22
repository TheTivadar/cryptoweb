import Image from 'next/image';
import React from 'react'

const TextWithImage = () => {
    return (
        <div className='bg-black-100 w-full h-full overflow-x-hidden py-32 relative'>
            <div className='grid grid-cols-12'>
                <div className='col-span-8 flex flex-col pl-[6vw] z-10 relative w-[80%]'>
                    <h1 className='text-5xl font-semibold w-[60%] pb-20'>AI Trading with AlgosOne</h1>
                    <p className='text-4xl font-[100] pb-8'>What Is <span className='font-medium'>AI Trading?</span></p>
                    <p className='text-lg font-[300] pb-6'>AI trading integrates Artificial Intelligence capabilities into algorithmic trading systems.</p>
                    <p className='text-lg font-[300] pb-6'>AI trading bots have the capacity to crunch a vast amount of technical and fundamental market data in real time, relating to a wide variety of financial markets like stocks, commodities, bonds, indices, forex and crypto.</p>
                    <p className='text-lg font-[300] pb-6'>AI trading systems can perform a wide range of activities including historic price and volume analysis, risk assessment, signal creation, entry and exit suggestions, strategy testing and trade execution.</p>
                    <p className='text-lg font-[300] pb-6'>One rapidly developing area of AI is Machine Learning. It enables trading bots to identify, analyze and draw inferences from data patterns, so they can adapt to shifting market conditions and respond to trading opportunities without explicit programmed instructions.</p>
                </div>
                <div className="relative col-span-4">
                    <div className="absolute inset-0 m-auto h-[600px] w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
                    <Image
                        src="/dashboard.jpg"
                        alt="dashboard"
                        width={1000}
                        height={1000}
                        className="w-full h-full border-4 border-gray-300/40 ml-20 rounded-[25px] z-10 relative"
                    />
                </div>
                <div className='col-span-2 pl-[6vw] pt-14'>
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Kezdj bele!
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-12 order py-32'>
                <div className="relative col-span-4 order-2">

                    <Image
                        src="/dashboard.jpg"
                        alt="dashboard"
                        width={1000}
                        height={1000}
                        className="w-full h-full border-4 border-gray-300/40 mr-20 rounded-[25px] z-10 relative"
                    />
                </div>

                <div className='col-span-8 flex flex-col items-start z-10 relative w-full order-2 text-start pl-10'>
                    <h1 className='text-5xl font-semibold w-[60%] pb-20'>AI Trading with AlgosOne</h1>
                    <p className='text-4xl font-[100] pb-8'>What Is <span className='font-medium'>AI Trading?</span></p>
                    <p className='text-lg font-[300] pb-6'>AI trading integrates Artificial Intelligence capabilities into algorithmic trading systems.</p>
                    <p className='text-lg font-[300] pb-6'>AI trading bots have the capacity to crunch a vast amount of technical and fundamental market data in real time, relating to a wide variety of financial markets like stocks, commodities, bonds, indices, forex and crypto.</p>
                    <p className='text-lg font-[300] pb-6'>AI trading systems can perform a wide range of activities including historic price and volume analysis, risk assessment, signal creation, entry and exit suggestions, strategy testing and trade execution.</p>
                    <p className='text-lg font-[300] pb-6'>One rapidly developing area of AI is Machine Learning. It enables trading bots to identify, analyze and draw inferences from data patterns, so they can adapt to shifting market conditions and respond to trading opportunities without explicit programmed instructions.</p>
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
        description: "ALGOSONE crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
    },
    {
        id: 2,
        title: "Machine Learning",
        description: "ALGOSONE crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
    },
    {
        id: 3,
        title: "Predictive Analysis",
        description: "ALGOSONE crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
    },
    {
        id: 4,
        title: "Proven Performance ",
        description: "ALGOSONE crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
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