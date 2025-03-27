"use client"
import AccountSizeIcon from '@/components/AccountSizeIcon'
import { getUserBalance } from '@/components/prisma/addUser'
import useUserStore from '@/components/providers/userStore'
import UserInvoice from '@/components/table/Invoice'
import { Separator } from '@/components/ui/separator'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const Profile = () => {
    const [currentBalance, setCurrentBalance] = useState(0)
    const { normalUser } = useUserStore()

    useEffect(() => {
        async function fetchCurrentBalance() {
            if (normalUser) {
                try {
                    const result = await getUserBalance(normalUser?.id)
                    setCurrentBalance(result)
                } catch (error: any) {
                    toast.error(error.message || "Hiba történt adatlekérés közben")
                }
            }
        }
        fetchCurrentBalance()
    }, [])



    return (
        <div className='max-w-[1000px] mx-auto'>
            <div className='flex flex-row py-2 items-center justify-between w-full'>
                <h1 className='text-3xl'>{normalUser?.name}</h1>
                <AccountSizeIcon balance={normalUser?.balance || 0} />
            </div>
            <Separator className='bg-purple' />
            <div className='flex flex-row py-2 items-center justify-between w-full pt-10'>
                <div className='flex flex-col'>
                    <p className='text-xl '>Jelenlegi egyenleg:</p>
                    <div className='flex flex-row pt-[2.5vh] pl-[2vw]'>
                        <p className="text-6xl lg:text-7xl font-semibold">{currentBalance || "0"}</p>
                        <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='text-xl '>Befektetett összeg:</p>
                    <div className='flex flex-row pt-[2.5vh] pl-[2vw]'>
                        <p className="text-6xl lg:text-7xl font-semibold">{normalUser?.balance || "0"}</p>
                        <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
                    </div>
                </div>
            </div>
            <Separator className='bg-purple my-10' />
            <UserInvoice wallets={normalUser?.wallets} transactions={normalUser?.transactions} investments={normalUser?.investments}/>


        </div >
    )
}

export default Profile