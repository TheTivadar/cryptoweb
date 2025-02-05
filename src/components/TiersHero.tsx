import React from 'react'

const TiersHero = () => {
    return (
        <div className='bg-black-100 h-screen flex justify-center items-center relative'>
            <div className='max-w-5xl mx-auto'>
            <div className="absolute inset-0 -top-[35%] -left-[30%] h-[600px] w-[1000px] bg-red-900 blur-3xl opacity-20 rounded-full z-0"></div>
                <div className='flex flex-col justify-center items-center' >
                    <h1 className='text-5xl pb-10 text-white'>TRADING UP</h1>
                    <p className='pb-20 text-white/80'>The amount that you earn on your investment plan will depend on your trading tier, which is based on the size of your deposit, calculated in USD.</p>
                    <p className='font-medium pb-8 text-white/80'>Raise your trading tier to receive:</p>
                    <div className='flex flex-row gap-6'>
                        {data.map((items, index) => (
                            <div key={index} className='flex flex-col'>
                                <div
                                    className="rounded-full size-4 mb-4"
                                    style={{ backgroundColor: items.color }}
                                />
                                <p className='text-white/80'>{items.description}</p>
                            </div>
                        ))}
                    </div>
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Kezdj bele!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TiersHero


const data = [
    {
        id: 1,
        color: "#4242f5",
        description: "More, and larger trades per day meaning a higher daily profit"
    },
    {
        id: 2,
        color: "#f5b942",
        description: "More, and larger trades per day meaning a higher daily profit"
    },
    {
        id: 3,
        color: "#42f545",
        description: "More, and larger trades per day meaning a higher daily profit"
    },
    {
        id: 4,
        color: "#d43b3b",
        description: "More, and larger trades per day meaning a higher daily profit"
    }
]