'use client'

import { addBalance } from '@/lib/actions'
import { useActionState, useState } from 'react'
import { ComboboxDemo } from '../Selecter/Combobox'
import { User } from '@/types/types'
import { Button } from '../ui/button'

export default function AddBalanceToUser({ user }: { user: User[] }) {
  const [state, action] = useActionState(addBalance, null)
  const [selectedUser, setSelectedUser] = useState("")
  
  return (
    <div className='w-full md:mx-32 border-2 border-zinc-300/80 p-4 rounded-2xl space-y-10'> 
      <h3 className='text-xl font-bold'>Egyenleg adása felhasználóhoz</h3>
      <form className='mt-3 flex flex-col gap-4 space-y-6' action={action}>
        <ComboboxDemo  data={user} value={selectedUser} setValue={setSelectedUser} />
        <input type="hidden" name="id" value={selectedUser} />

        <input
          type='number'
          name='balance'
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


