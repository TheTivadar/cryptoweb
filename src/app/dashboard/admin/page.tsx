
import { auth } from "@/auth"
import AddWalletClient from "@/components/dbclientactions/AddWalletClient"
import IncrementUSerBalance from "@/components/prisma/AdjustUserBalance"
import IncrementPotBalance from "@/components/prisma/IncrementPotBalance"

import AddBalanceToUser from "@/components/prisma/UpdateBalance"
import UpdatePotBalance from "@/components/prisma/UpdatePotBalance"
import { DataTableUser } from "@/components/table/DataTable"
import { createNewsManually } from "@/lib/actions/newsActions"
import { incrementPot, transferPots, updatePot } from "@/lib/actions/potActions"
import { adjustBalanceForUsers, createUserManually } from "@/lib/actions/userActions"

import { createNews } from "@/lib/news"
import { getAllBalancePots, getAllPotBalances, getBalancePotByType } from "@/lib/pot"
import { getUser, getUserByEmail, getUserWithBalance } from "@/lib/users"


export default async function Page() {

  /*  const session = await auth() 
  /* const expenses: Expenses[] = await getExpenses()
  const analytics = await getAllAnalytics()
*/
const session = await auth();
if (session && session.user?.email !==  'swagtivadar@gmail.com') {
  return <div>admin oldal</div>
}
const totalBalances = await getAllPotBalances()
const safePot = await getBalancePotByType('SAFE')
const normalPot = await getBalancePotByType('NORMAL')
const user = await getUserWithBalance()
const allUser = await getUser()

if (!session?.user?.email) {
  throw new Error('User email is missing in the session.');
}
const currentUser = await getUserByEmail(session.user.email);
  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
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
        <div className="flex flex-row py-20 w-full justify-between">
          <div>
            <p>Safe PlotBalances</p>
            {safePot?.total}
          </div>
          <div>
            <p>Normal PlotBalances</p>
            {normalPot?.total}
          </div>
        </div>
        <p>Risky Balances</p>

      {/* <form action={adjustBalanceForUsers}>
        <input type="hidden" name="userId" value="ec9569a0-1af4-470a-b69d-58829132c9aa" />
        <input type="hidden" name="type" value="SAFE" />
        <input type="hidden" name="amount" value="300" />
        <button type="submit" className="text-white my-20">
          Add 300 to SAFE Balance
        </button>
      </form> */}
      {/* <div className="py-20 mx-auto w-full">
        <form action={InitializePotBalances}>
          <button type="submit" className="text-white">
            Initialize Pot balances
          </button>
        </form>
      </div> */}
      <div className="py-20 mx-auto w-full">
        <form action={createUserManually}>
          <input type="hidden" name="title" value="Szabolcs Simon" />
          <input type="hidden" name="description" value="swagtivadar@gmail.com" />
          <input type="hidden" name="link" value="sdkfbl" />
          <button type="submit" className="text-white">
            Create New User
          </button>
        </form>
      </div>
      <div className="py-20 mx-auto w-full">
        <form action={createNewsManually}>
          <input type="hidden" name="title" value="Here’s what happened in crypto today" />
          <input type="hidden" name="description" value="Today in crypto, a SEC commissioner and known crypto critic pushes back against the SEC’s new stablecoin statement, the SEC issues new stablecoin guidelines," />
          <input type="hidden" name="link" value="https://www.tradingview.com/news/cointelegraph:b431ea497094b:0-here-s-what-happened-in-crypto-today/" />
          <input type="hidden" name="type" value="ARTICLE" />
          <button type="submit" className="text-white">
            Create New new
          </button>
        </form>
      </div>
      <div className="flex flex-col md:flex-row justify-between py-10 space-y-6 md:space-y-0 px-2 md:px-0 md:py-28">
        <UpdatePotBalance />
        <IncrementPotBalance />
      </div>
      <div className="flex flex-col md:flex-row justify-between py-10 space-y-6 md:space-y-0 px-2 md:px-0 md:py-28">
      <IncrementUSerBalance users={allUser} />
      </div>
      <AddWalletClient />
      <div className="px-1 md:px-4">
        <DataTableUser data={user} />
      </div>
    </div>
    </div>
  )
}

