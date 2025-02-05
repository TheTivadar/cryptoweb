
import { auth } from "@/auth"
import NewAnalyticsForm from "@/components/prisma/addAnalytics"
import NewExpenseForm from "@/components/prisma/newExpenseForm"
import { getAllAnalytics } from "@/lib/analytics"
import { getExpenses } from "@/lib/expenses"
import { saveAnalyticsForDays } from "@/lib/SaveAnalytics"
import { getUser } from "@/lib/users"
import { Expenses, User } from "@/types/types"


export default async function Page() {
 /*  const session = await auth() */
  const expenses: Expenses[] = await getExpenses()
  const analytics = await getAllAnalytics()
  console.log(analytics) 

  /* const user:User[] = await getUser() */
  /* const normalUser = useUserStore((state) => state.normalUser); */
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

