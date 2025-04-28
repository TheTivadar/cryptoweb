'use client'

/* import { addBalance } from '@/lib/actions' */
import { useActionState, useState } from 'react'
import { ComboboxDemo } from '../Selecter/Combobox'
import { User } from '@/types/types'
import { Button } from '../ui/button'
import { updateBalancePotTotal } from '@/lib/pot'
import { updatePot } from '@/lib/actions/potActions'
import { PotTypeComboBox } from '../Selecter/BalanceTypeCheckBox'



export default function UpdatePotBalance() {
    const [state, action] = useActionState(updatePot, null);
    const [selectedPot, setSelectedPot] = useState("");
  
    // Define the pot options
    const potOptions = [
        { value: 'SAFE', name: 'Biztonságos' },
        { value: 'NORMAL', name: 'Normál' }
      ];
  
    return (
      <div className='w-full md:mx-32 border-2 border-zinc-300/80 p-4 rounded-2xl space-y-10'> 
        <h3 className='text-xl font-bold'>Teljes Egyenleg adása Pot-ba</h3>
        <form className='mt-3 flex flex-col gap-4 space-y-6' action={action}>
          <PotTypeComboBox 
            data={potOptions}
            value={selectedPot}
            setValue={setSelectedPot}
          />
          <input type="hidden" name="type" value={selectedPot} />
  
          <input
            type='number'
            name='amount'
            placeholder='Egyenleg'
            className='border border-zinc-300 p-2 text-white bg-background'
          />
          <Button type='submit' disabled={!selectedPot}>
            Küldés
          </Button>
        </form>
      </div>
    );
  }


