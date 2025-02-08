'use client'

import { createAnalyticsAction } from '@/lib/actions'
import { useActionState } from 'react'
import { Button } from '../ui/button'

export default function NewAnalyticsForm() {
  const [state, action] = useActionState(createAnalyticsAction, null)

  return (
    <div className='w-full  md:mx-32 border-2 border-zinc-300/80 p-4 rounded-2xl space-y-10'>
      <h3 className='text-xl font-bold '>Napi Adat felvitele</h3>
      <form className='mt-3 flex flex-col gap-4 space-y-6' action={action}>
        <input
          type='text'
          name='totalBalance'
          placeholder='Egyenleg'
          className='border border-zinc-300 p-2'
        />
        <Button type='submit' >
          Küldés
        </Button>
      </form>
    </div>
  )
}


