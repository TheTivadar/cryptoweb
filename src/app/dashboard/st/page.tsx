import Charts from "@/components/dashboard/Charts";
import Penzes from "@/components/dashboard/Penzes";


export default function Page() {


  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Penzes balance={"14987"}/>
        <Charts areaChart={areaChart} pieChart={pieChart} negativeChart={NegativeChart}/>
      </div>
    </div>
  )
}


const areaChart = [

  { date: "2025-01-22", crypto: 14987 }
];

const NegativeChart = [
  { month: "Január", visitors: -2 }
]

const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]

