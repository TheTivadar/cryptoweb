
import { auth } from "@/auth"
import AddWalletClient from "@/components/dbclientactions/AddWalletClient"
import NewAnalyticsForm from "@/components/prisma/addAnalytics"
import { getUserBalance } from "@/components/prisma/addUser"
import NewExpenseForm from "@/components/prisma/newExpenseForm"
import AddBalanceToUser from "@/components/prisma/UpdateBalance"
import { DataTableUser } from "@/components/table/DataTable"
import { getAllAnalytics } from "@/lib/analytics"
import { getTotalBalance, updateUserShare } from "@/lib/balance"
import { getExpenses } from "@/lib/expenses"
import { getUser, getUserEmail, getUserId } from "@/lib/users"
import { addWallet, createWallet } from "@/lib/wallet"
import { Expenses } from "@/types/types"


export default async function Page() {
  
  /*  const session = await auth() 
  /* const expenses: Expenses[] = await getExpenses()
  const analytics = await getAllAnalytics()
  const balance = await getTotalBalance()
  const userbalance = await getUserBalance("164b9068-3c24-4fca-ac2d-0b4ef16c4a1d") */
  const session = await auth();
    if(session && session.user?.email !== 'tivadar.simon01@gmail.com'){
      <div>asd</div>
    }
  const totalBalance = await getTotalBalance()
  const user = await getUser()
  const usersWithBalance = await Promise.all(
    user.map(async (users) => ({
      ...users,
      balance: await getUserBalance(users.id), // Fetch balance for each user
    }))
  );

  if (!session?.user?.email) {
    throw new Error('User email is missing in the session.');
  }
  const currentUser = await getUserEmail(session.user.email);

  console.log(currentUser!.id,"user id")

  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <div className="flex justify-between items-center px-2">
          <h1 className="text-3xl font-semibold ">Admin felület</h1>
          <div className="text-4xl font-semibold flex flex-row ">
            {totalBalance}
            <p className="pl-2 text-xl font-medium">Teljes összeg</p>
          </div>
        </div>
        {/*  <ul className="mt-4 flex flex-col gap-1">
          {expenses.map((expense: Expenses) => (
            <li key={expense.id} className="flex justify-between">
              <span>{expense.title}</span>
              <span>{expense.amount}</span>
            </li>
          ))}
        </ul> */}
      </div>
      {/*  <NewExpenseForm /> */}
      <div className="flex flex-col md:flex-row justify-between py-10 space-y-6 md:space-y-0 px-2 md:px-0 md:py-28">
      <NewAnalyticsForm />
      <AddBalanceToUser user={usersWithBalance} />
      </div>
      <AddWalletClient currentUserId={currentUser!.id}/>
      <div className="px-1 md:px-4">
      <DataTableUser data={usersWithBalance} />
      </div>
      {/*  <ul>
        {user.map((item,index)=> (
          <li key={item.id}>{item.name} {await getUserBalance(item.id)} </li>
        ))}
      </ul> */}
      {/*  <ul className="mt-4 flex flex-col gap-1">
          {user.map((user: User) => (
            <li key={user.id} className="flex justify-between">
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.role}</span>
              <span>{user.balance}</span>
            </li>
          ))}
          </ul> */}
    </div>
  )
}

