import Charts from "@/components/dashboard/Charts";
import Penzes from "@/components/dashboard/Penzes";
import { getAllAnalytics } from "@/lib/analytics";


export default async function Page() {
  const analytics = await getAllAnalytics()

  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Penzes />
        <Charts areaChart={analytics} pieChart={pieChart} negativeChart={NegativeChart}/>
      </div>
    </div>
  )
}



const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]


const NegativeChart = [
  { month: "November", visitors: 0 },
  { month: "December", visitors: 10 },
  { month: "Január", visitors: 7 }
]