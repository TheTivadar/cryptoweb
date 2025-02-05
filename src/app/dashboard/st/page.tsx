
import NewAnalyticsForm from "@/components/prisma/addAnalytics"
import { getUserBalance } from "@/components/prisma/addUser"
import NewExpenseForm from "@/components/prisma/newExpenseForm"
import AddBalanceToUser from "@/components/prisma/UpdateBalance"
import { getAllAnalytics } from "@/lib/analytics"
import { getTotalBalance, updateUserShare } from "@/lib/balance"
import { getExpenses } from "@/lib/expenses"
import { Expenses } from "@/types/types"


export default async function Page() {
  /*  const session = await auth() */
  const expenses: Expenses[] = await getExpenses()
  const analytics = await getAllAnalytics()
  const balance = await getTotalBalance()
  const userbalance = await getUserBalance("164b9068-3c24-4fca-ac2d-0b4ef16c4a1d")



  
console.log(balance)

  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <ul className="mt-4 flex flex-col gap-1">
          {expenses.map((expense: Expenses) => (
            <li key={expense.id} className="flex justify-between">
              <span>{expense.title}</span>
              <span>{expense.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <NewExpenseForm />
      <NewAnalyticsForm />
      <AddBalanceToUser />
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

