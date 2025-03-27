"use client"
import React from 'react'
import { Card } from '../ui/card'
import { Meteors } from '../ui/meteors'
import Image from 'next/image'
import { FaWallet } from 'react-icons/fa'
import { RiWalletFill } from "react-icons/ri";

const FadedCard = () => {
    return (
        <Card className=' w-full rounded-[30px] border-purple/50 relative overflow-hidden h-auto mt-[7vh]'>
            <div className='absolute inset-0 bg-gradient-to-b from-background  to-violet-950' />
            <div className='z-20 relative flex flex-col p-4'>
                <div className='flex flex-row items-center justify-between w-full '>
                    <Image
                        src={"/Alogo.png"}
                        alt='logo'
                        width={50}
                        height={50}
                    />
                    <div className='bg-purple px-4 py-2 rounded-lg text-black font-medium'>Újdonság</div>
                </div>
                <h1 className='text-3xl font-semibold pt-[3vh]'>Szerezz Alegex Coint!</h1>
                <p className=' pt-4 font-[300] text-white/80' >Kapcsold hozzá Phantom vagy Metamask fiókodat az oldalhoz, hogy amikor forgalomba kerül a saját tokenünk ingyenes részesülj belőle.</p>
                <button className='w-full py-3 bg-purple rounded-xl text-black font-semibold flex flex-row items-center justify-center gap-2 mt-4'>Kapcsold hozzá tárcád<FaWallet /></button>
                <button className='w-full py-3 bg-white/10 rounded-xl text-white font-semibold flex flex-row items-center justify-center gap-2 border-white border mt-4'>Írd be tárca címed<RiWalletFill /></button>
            </div>
            <Meteors />
        </Card>
    )
}

export default FadedCard