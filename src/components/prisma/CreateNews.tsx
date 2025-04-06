'use client'

/* import { addBalance } from '@/lib/actions' */
import { useActionState, useState } from 'react'
import { ComboboxDemo } from '../Selecter/Combobox'
import { User } from '@/types/types'
import { Button } from '../ui/button'
import { updateBalancePotTotal } from '@/lib/pot'
import { updatePot } from '@/lib/actions/potActions'
import { PotTypeComboBox } from '../Selecter/BalanceTypeCheckBox'
import { createNewsManually } from '@/lib/actions/newsActions'



export default function CreateNews() {
    const [state, action] = useActionState(createNewsManually, null);
    const [selectedPot, setSelectedPot] = useState("");

    // Define the pot options
    const potOptions = [
        { value: 'TWEET', name: 'Tweet' },
        { value: 'ARTICLE', name: 'Hír' },
        { value: 'UPDATE', name: 'Frissités' }
    ];

    return (
        <div className='w-full md:mx-32 border-2 border-zinc-300/80 p-4 rounded-2xl space-y-10'>
            <h3 className='text-xl font-bold'>Hir létrehozása</h3>
            <form className='mt-3 flex flex-col gap-4 space-y-6' action={action}>
                <input
                    type='text'
                    name='title'
                    placeholder='Cím'
                    className='border border-zinc-300 p-2'
                />
                <textarea
                    name='description'
                    placeholder='Leírás'
                    className='border border-zinc-300 p-2 '
                    rows={4}
                />
                <input
                    type='text'
                    name='link'
                    placeholder='Link'
                    className='border border-zinc-300 p-2'
                />
                <PotTypeComboBox
                    data={potOptions}
                    value={selectedPot}
                    setValue={setSelectedPot}
                />
                <input type="hidden" name="type" value={selectedPot} />

                <Button type='submit' disabled={!selectedPot}>
                    Küldés
                </Button>
            </form>
        </div>
    );
}
