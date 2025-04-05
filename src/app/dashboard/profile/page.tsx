import { auth } from '@/auth'
import AccountSizeIcon from '@/components/AccountSizeIcon'
import UserInvoice from '@/components/table/Invoice'
import { Separator } from '@/components/ui/separator'
import { getUserByEmail } from '@/lib/users'
import { calculateInvestedMoney } from '@/lib/utils'

const Profile = async() => {
const session = await auth();

  if (!session?.user?.email) {
    throw new Error('User email is missing in the session.');
  }

  const user = await getUserByEmail(session.user.email);

  if (!user?.id) {
    throw new Error('User ID is missing.');
  }

   const investedMoney = user.transactions
  .filter(tx => tx.type === 'DEPOSIT')
  .reduce((sum, tx) => sum + tx.amount, 0); 

    return (
        <div className='w-full px-4 lg:max-w-[1000px] lg:mx-auto  '>
            <div className='flex flex-row py-2 items-center justify-between w-full'>
                <h1 className='text-3xl'>{user.name}</h1>
                <AccountSizeIcon balance={user.balance || 0} />
            </div>
            <Separator className='bg-purple' />
            <div className='flex flex-row py-2 items-center justify-between w-full pt-10'>
                <div className='flex flex-col'>
                    <p className='text-md md:text-xl '>Jelenlegi egyenleg:</p>
                    <div className='flex flex-row pt-[2.5vh] pl-[2vw]'>
                        <p className="text-4xl lg:text-7xl font-semibold">{user.balance.toFixed(1) || "0"}</p>
                        <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <p className='text-md md:text-xl '>Befektetett összeg:</p>
                    <div className='flex flex-row pt-[2.5vh] pl-[2vw]'>
                        <p className="text-4xl lg:text-7xl font-semibold">{investedMoney || "0"}</p>
                        <p className="text-sm lg:text-md pl-2 font-semibold">USD</p>
                    </div>
                </div>
            </div>
            <Separator className='bg-purple my-10' />
            <UserInvoice wallets={user.wallets} transactions={user.transactions}/>


        </div >
    )
}

export default Profile