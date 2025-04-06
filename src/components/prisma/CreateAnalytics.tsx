'use client'

/* import { addBalance } from '@/lib/actions' */
import { createAnalytics } from '@/lib/actions/analyticsActions';
import { useActionState, useState } from 'react';
import { Button } from '../ui/button';



export default function DailyAnalytics() {
    const [state, action] = useActionState(createAnalytics, null);

    return (
        <div className='w-full md:mx-32 border-2 border-zinc-300/80 p-4 rounded-2xl space-y-10'>
            <h3 className='text-xl font-bold'>Napi Analitika létrehozása</h3>
            <form className='mt-3 flex flex-col gap-4 space-y-6' action={action}>

                <Button type='submit'>
                    Küldés
                </Button>
            </form>
        </div>
    );
}
