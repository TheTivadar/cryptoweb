import React from 'react'
import Background from './background/background'

const Commissions = () => {
    return (
        <div className='bg-black-100  w-full h-full overflow-x-hidden py-16 md:py-32 relative'>
            <Background />
            <div className='relative z-10 '>
                <h1 className='text-white text-4xl md:text-7xl text-center font-semibold pb-4 md:pb-10'>Hogyan működik a rendszer?</h1>
                <p className='text-white/80 max-w-5xl text-center mx-auto font-medium'>Az Alagex-nél semmilyen rejtett költség vagy tranzakciós díj nincs! Csak a sikeres kereskedések után számolunk fel egy fix 7%-os jutalékot, és a sikertelen kereskedések 2%-át visszatérítjük számodra.</p>
                <div className='sm:grid flex flex-col sm:flex-none sm:grid-cols-12 pt-20 px-4 sm:px-10 gap-10 lg:px-0 lg:gap-0'>
                    <div className='hidden lg:block lg:col-span-1' />
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 h-auto'>
                        <div className='flex  flex-col order sm:order-none sm:flex-row sm:items-center gap-4'>
                            <h1 className='text-white order-2 font-semibold text-xl'>Jutalékok</h1>
                            <div className='size-4 order-1 bg-yellow-500 rounded-full ' />
                        </div>
                        <p className='text-white pt-4 '>Alegex nem számol fel tranzakciós költséget, de amikor egy kereskedés nyereséges, akkor annak 7%-a kerül levonásra jutalékként.<br /><span className='text-lg font-semibold'>Például: </span>Az Alegex nyit egy $1,000-os pozíciót, amely $200 profitot termel. Ebben az esetben: A számládra $186 kerül jóváírásra A rendszer levon $14-t jutalékként (7%-ot a $200 profitból)
                        </p>
                        <p className="text-white pt-4">
                            Az összes jutalék 80%-a a rendszer fenntartására és fejlesztésére fordítódik, beleértve a kockázatkezelést és a technológiai fejlesztéseket.
                            A másik 20% pedig egy biztonsági alapba kerül, amely:
                        </p>
                        <ul className="text-white pl-6 pt-2 list-disc">
                            <li>Biztosítja a felhasználói egyenlegek védelmét váratlan események esetén (pl. piaci összeomlás, technikai hiba).</li>
                            <li>Támogatja a veszteséges kereskedések kompenzációját.</li>
                            <li>Biztonsági tartalékként szolgál a platform stabil működéséhez.</li>
                        </ul>
                    </div>
                    < div className='hidden lg:block col-span-2' />
                    <div className='col-span-12 md:col-span-6 lg:col-span-4 flex flex-col justify-center'>
                        <div className='flex  flex-col order sm:order-none sm:flex-row sm:items-center gap-4'>
                            <h1 className='text-white order-2 font-semibold text-xl'>Kompenzáció a veszteséges kereskedésekre</h1>
                            <div className='size-4 order-1 bg-red-500 rounded-full ' />
                        </div>
                        <p className='text-white pt-4'> Ha egy kereskedés veszteséges, a rendszer a veszteség 2%-át jóváírja a számládon.
                            <span className='text-lg font-semibold'>Például</span>
                            Az Alagex nyit egy $1,000-os pozíciót, amely sajnos $100 veszteséget eredményez. Ebben az esetben:
                            A rendszer $2-t visszatérít a veszteségből a számládra (2% a $100 veszteségből).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Commissions