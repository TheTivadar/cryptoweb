
import { auth } from "@/auth"
import NewExpenseForm from "@/components/prisma/newExpenseForm"
import { getExpenses } from "@/lib/expenses"
import { getUser } from "@/lib/users"
import { Expenses, User } from "@/types/types"




export default async function Page() {
  const session = await auth()
  /* console.log(session) */
  const expenses: Expenses[] = await getExpenses()
  /* const user:User[] = await getUser() */
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

