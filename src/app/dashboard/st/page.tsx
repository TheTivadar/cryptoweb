import NewExpenseForm from "@/components/prisma/newExpenseForm"
import { getExpenses } from "@/lib/expenses"


export default async function Page() {
  const expenses = await getExpenses()

  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <ul className="mt-4 flex flex-col gap-1">
          {expenses.map(expenses => (
            <li key={expenses.id} className="flex justify-between">
              <span>{expenses.title}</span>
              <span>{expenses.amount}</span>
            </li>
          ))}
          </ul>
      </div>
      <NewExpenseForm />
    </div>
  )
}

