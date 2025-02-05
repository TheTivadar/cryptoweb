'use client'

import { addBalance } from '@/lib/actions'
import { useActionState } from 'react'

export default function AddBalanceToUser() {
  const [state, action] = useActionState(addBalance, null)

  return (
    <div className='w-1/3'>
      <h3 className='text-xl font-bold'>Add balance to user</h3>
      <form className='mt-3 flex flex-col gap-4' action={action}>
        <input
          type='text'
          name='id'
          placeholder='id'
          className='border border-zinc-300 p-2'
        />
        <input
          type='number'
          name='balance'
          placeholder='balance'
          className='border border-zinc-300 p-2'
        />
        <button type='submit' className='bg-purple-600 p-2 text-black'>
          Add
        </button>
      </form>
    </div>
  )
}


