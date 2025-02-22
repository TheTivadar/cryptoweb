import Image from 'next/image';
import React from 'react'
import Background from './background/background';

const TextWithImageOne = () => {
    return (
        <div className='bg-black-100 w-full h-full overflow-x-hidden py-32 relative'>
           <Background />
            <div className='grid grid-cols-12 relative z-10'>
                <div className='col-span-12 lg:col-span-7 flex flex-col pl-[2vw] lg:pl-[6vw] z-10 relative w-full sm:w-[90%] lg:w-[80%]'>
                    <h1 className='text-5xl font-semibold w-[80%]  pb-10 lg:pb-20 text-white'>TELJES HOZZÁFÉRÉS A GLOBÁLIS PIACHOZ</h1>
                    <p className='text-lg font-[300] pb-6 text-white/80'>Az Alegexnél hisszük, hogy mindenkinek lehetőséget kell kapnia arra, hogy biztosítsa pénzügyi jövőjét, kihasználva az áttörést jelentő AI-alapú kereskedési technológiát és a professzionális piaci ismereteket.</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>A globális piacoknak mindenki számára elérhetőnek kell lenniük – nem csupán azoknak, akik mélyreható pénzügyi tudással, rengeteg szabadidővel rendelkeznek a piacok folyamatos figyelésére, vagy hatalmas tőkével bírnak ahhoz, hogy hivatalosan is fedezeti alap befektetőkké váljanak.</p>
                    <p className='text-lg font-[300] pb-6 text-white/80'>Éppen ezért nálunk nincs szükség nagy kezdeti befektetésre. Amint a befizetés megtörténik, gépi tanuláson alapuló kereskedési botunk veszi át az irányítást, és már az első naptól kezdve passzív pénzt termel.</p>
                </div>
                <div className="relative col-span-12 lg:col-span-5 flex justify-center items-center px-4 lg:px-0">
                    <div className="absolute inset-0 m-auto h-[600px] w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
                    <Image
                        src="/bubbles.png"
                        alt="dashboard"
                        width={1000}
                        height={1000}
                        className="w-auto lg:w-full max-h-[500px]  lg:max-h-[600px] border-4 border-gray-300/40 lg:ml-40 rounded-[25px] z-10 relative"
                    />
                </div>
                <div className='col-span-12 lg:col-span-2 pl-[6vw] pt-14'>
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Fiók létrehozása!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TextWithImageOne

