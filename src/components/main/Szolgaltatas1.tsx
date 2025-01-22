"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Szolgaltatas1 = ({data}: {data:FeatureProps[]}) => {



    return (
        <div className='bg-black-100 w-full h-full overflow-x-hidden py-32 relative'>

            <div className='grid grid-cols-12'>
                <div className='col-span-7 flex flex-col pl-[6vw] z-10 relative'>
                    <h1 className='pb-10'>
                        <span className='text-5xl font-[200]'>ALGOSONE&apos;S</span> <br />
                        <span className='text-5xl font-[500]'>GROUNDBREAKING</span> <br />
                        <span className='text-5xl font-[200]'>TECHNOLOGY</span>
                    </h1>
                    <div className=' grid grid-cols-7 gap-y-10 gap-4'>
                        {data.map((item, index) => (
                            <div className='col-span-3' key={index}>
                                <Cards item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative col-span-5">
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
        </div>
    )
}

export default Szolgaltatas1

interface FeatureProps {
    id: number;
    title: string;
    description: string;
}

const data1 = [
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