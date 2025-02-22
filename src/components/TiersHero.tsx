import React from 'react'
import Background from './background/background'

const TiersHero = () => {
    return (
        <div className='bg-black-100 h-full md:h-screen flex justify-center items-center relative pt-32 lg:pt-8'>
            <Background />
            <div className='max-w-5xl mx-auto relative z-10'>
                <div className="absolute inset-0 -top-[50%] -left-[80%] h-[600px] w-[1000px] bg-red-900 blur-3xl opacity-20 rounded-full z-0"></div>
                <div className='flex flex-col justify-center items-center' >
                    <h1 className='text-5xl pb-10 text-white'>STABIL NÖVEKEDÉS</h1>
                    <p className='pb-20 text-white/80 text-center px-2 md:px-4'>Jelenleg egyetlen kereskedési mód érhető el, amely kifejezetten a biztonságos és kiegyensúlyozott növekedésre lett optimalizálva. Kezdj bármekkora összeggel, nálunk nincs befizetési küszöb</p>
                    <p className='font-medium pb-8 text-white/80'>Jelenlegi kereskedési mód az alábbiakat garantálja:</p>
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
                    <button className="inline-flex mt-20 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Csatlakozz most!
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
        description: "Alacsony kockázatú kereskedéseket, hogy minimalizáld a veszteségeket"
    },
    {
        id: 2,
        color: "#f5b942",
        description: "Kezdj bármekkora összeggel, nálunk nincs befizetési küszöb"
    },
    {
        id: 3,
        color: "#42f545",
        description: "Alacsony kezelési költségeket, így a profitodból többet tarthatsz meg"
    },
    {
        id: 4,
        color: "#d43b3b",
        description: "Automatizált működést, hogy időráfordítás nélkül is kihasználhasd a piacok előnyeit"
    }
]