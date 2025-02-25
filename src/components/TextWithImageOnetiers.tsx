import Image from 'next/image';
import React from 'react'
import Background from './background/background';
import Link from 'next/link';

const TextWithImageOneTiers = () => {
    return (
        <div className='bg-black-100 w-full h-full overflow-x-hidden py-32 relative'>
            <Background />
            <div className='grid grid-cols-12 relative z-10'>
                <div className='col-span-12 lg:col-span-7 flex flex-col pl-[2vw] lg:pl-[6vw] z-10 relative w-full sm:w-[90%] lg:w-[80%]'>
                    <h1 className='text-5xl font-semibold w-[80%]  pb-10 lg:pb-20 text-white'>Kereskedési típusok</h1>
                    <p className='text-lg font-[300] pb-6 text-white/80'><span className='text-white font-semibold'>Automatikusan jóváhagyott kereskedések</span><br/>
                        Az automatikusan jóváhagyott kereskedések esetében az AI kiválasztja, a pozíció nagyságát, a kereskedés irányát, illetve beállítja a veszteséglimitet és a célárat a jelenlegi piaci trendek alapján. Ezután automatikusan jóváhagyja és végrehajtja a kereskedést, anélkül, hogy bárminemű tevékenységre lenne szükség tőled.</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'><span className='text-white font-semibold'>1-kattintásos jóváhagyott kereskedések</span><br/>
                        <span className='font-semibold'>(Jelenleg fejlesztés alatt)</span> Az AI automatikusan meghatározza a pozíció nagyságát, a kereskedés irányát, illetve beállítja a veszteséglimitet és a célárat de csak akkor hajtja végre a kereskedést, amikor te rákattintasz a &quot;Jóváhagyom&quot; gombra a kereskedésről szóló értesítésben, amelyet elküldünk neked. Van egy meghatározott időkorlát, amelyen belül a kereskedést jóvá kell hagynod.</p>
                </div>
                <div className="relative col-span-12 lg:col-span-5 flex justify-center items-center px-4 lg:px-0">
                    <div className="absolute inset-0 m-auto h-[600px] w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
                    <Image
                        src="/tiers.jpg"
                        alt="dashboard"
                        width={1000}
                        height={1000}
                        className="w-auto lg:w-full max-h-[500px]  lg:max-h-[600px] border-4 border-gray-300/40 lg:ml-40 rounded-[25px] z-10 relative"
                    />
                </div>
                <div className='col-span-12 lg:col-span-2 pl-[6vw] pt-14'>
                    <Link href={"/login"} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Fiók létrehozása!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TextWithImageOneTiers

