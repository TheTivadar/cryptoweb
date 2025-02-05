'use client'

import { createAnalyticsAction } from '@/lib/actions'
import { useActionState } from 'react'

export default function NewAnalyticsForm() {
  const [state, action] = useActionState(createAnalyticsAction, null)

  return (
    <div className='w-1/3'>
      <h3 className='text-xl font-bold'>Add new analytics</h3>
      <form className='mt-3 flex flex-col gap-4' action={action}>
        <input
          type='text'
          name='totalBalance'
          placeholder='totalBalance'
          className='border border-zinc-300 p-2'
        />
        <button type='submit' className='bg-purple-600 p-2 text-white'>
          Add
        </button>
      </form>
    </div>
  )
}


