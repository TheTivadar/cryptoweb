
import { auth } from "@/auth"
import AddWalletClient from "@/components/dbclientactions/AddWalletClient"
import IncrementUSerBalance from "@/components/prisma/AdjustUserBalance"
import DailyAnalytics from "@/components/prisma/CreateAnalytics"
import CreateNews from "@/components/prisma/CreateNews"
import IncrementPotBalance from "@/components/prisma/IncrementPotBalance"

import UpdatePotBalance from "@/components/prisma/UpdatePotBalance"
import { DataTableUser } from "@/components/table/DataTable"
import { createPot } from "@/lib/actions/potActions"
import { createUserManually } from "@/lib/actions/userActions"

import { getAllPotBalances, getBalancePotByType } from "@/lib/pot"
import { getUser, getUserByEmail, getUserWithBalance } from "@/lib/users"


export default async function Page() {

  /*  const session = await auth() 
  /* const expenses: Expenses[] = await getExpenses()

*/
  const session = await auth();
  if (session && session.user?.email !== 'swagtivadar@gmail.com') {
    return <div>admin oldal</div>
  }
  const totalBalances = await getAllPotBalances()
  const user = await getUserWithBalance()
  const allUser = await getUser()

  if (!session?.user?.email) {
    throw new Error('User email is missing in the session.');
  }

  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-white  overflow-hidden">
        <div className="flex justify-between items-center px-2 w-full">
          <div>
            <p className="pl-2 text-xl font-medium">Safe Balance</p>
            <p className="pl-2 text-5xl font-semibold pt-2">{totalBalances.SAFE}$</p>
          </div>
          <div>
            <p className="pl-2 text-xl font-medium">Normal Balance</p>
            <p className="pl-2 text-5xl font-medium pt-2">{totalBalances.NORMAL}$</p>
          </div>
          <div>
            <p className="pl-2 text-xl font-medium">Risky Balance</p>
            <p className="pl-2 text-5xl font-medium pt-2">{totalBalances.RISKY}$</p>
          </div>
        </div>
        <p>Risky Balances</p>
{/*         <div className="py-20 mx-auto w-full">
          <form action={createUserManually}>
            <input type="hidden" name="name" value="Szabolcs Simon" />
            <input type="hidden" name="email" value="swagtivadar@gmail.com" />
            <input type="hidden" name="role" value="0" />
            <button type="submit" className="text-white">
              Create New User
            </button>
          </form>
        </div>  */}
        <div className="py-20 mx-auto w-full">
          <form action={createPot}>
            <input type="hidden" name="type" value="NORMAL" />
            <button type="submit" className="text-white">
              Create Balance Pot
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-between py-10 space-y-6 md:space-y-0 px-2 md:px-0 md:py-28">
          <UpdatePotBalance />
          <IncrementPotBalance />
        </div>
        <div className="flex flex-col md:flex-row justify-between py-10 space-y-6 md:space-y-0 px-2 md:px-0 md:py-28">
          <IncrementUSerBalance users={allUser} />
          <CreateNews />
        </div>
        <div className="flex flex-col md:flex-row justify-between py-10 space-y-6 md:space-y-0 px-2 md:px-0 md:py-28">
          <AddWalletClient />
          <DailyAnalytics />
        </div>
        <div className="px-1 md:px-4">
          <DataTableUser data={user} />
        </div>
      </div>
    </div>
  )
}

