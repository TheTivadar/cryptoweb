'use client'

/* import { addBalance } from '@/lib/actions' */
import { adjustBalanceForUsers } from '@/lib/actions/userActions'
import { User } from '@/types/types'
import { useActionState, useState } from 'react'
import { PotTypeComboBox } from '../Selecter/BalanceTypeCheckBox'
import { UserTypeComboBox } from '../Selecter/UserTypeComboBox'
import { Button } from '../ui/button'



export default function IncrementUSerBalance({ users }: { users: User[] }) {
    const [state, action] = useActionState(adjustBalanceForUsers, null);
    const [selectedPot, setSelectedPot] = useState("");
    const [selectedUserId, setSelectedUserId] = useState("")
    const [selectedType, setSelectedType] = useState("")

    const potOptions = [
        { value: 'SAFE', name: 'Biztonságos' },
        { value: 'NORMAL', name: 'Normál' },
        { value: 'RISKY', name: 'Agresszív' }
    ];
    const type =[
        {value:"HIDDEN", name: 'Rejtett'},
        {value:"VISIBLE", name: 'Nyilvános'}
    ]
    return (
        <div className='w-full md:mx-32 border-2 border-zinc-300/80 p-4 rounded-2xl space-y-10'>
            <h3 className='text-xl font-bold'>Egyenleg hozzáadása felhasználóhoz</h3>
            <form className='mt-3 flex flex-col gap-4 space-y-6' action={action}>
                <UserTypeComboBox
                    users={users}
                    value={selectedUserId}
                    setValue={setSelectedUserId}
                />
                <input type="hidden" name="userId" value={selectedUserId} />
                <PotTypeComboBox
                    data={potOptions}
                    value={selectedPot}
                    setValue={setSelectedPot}
                />
                <input type="hidden" name="type" value={selectedPot} />
                <PotTypeComboBox
                    data={type}
                    value={selectedType}
                    setValue={setSelectedType}
                />
                   <input type="hidden" name="visiblity" value={selectedType} />
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


