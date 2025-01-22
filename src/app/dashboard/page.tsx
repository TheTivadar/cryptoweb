import Charts from "@/components/dashboard/Charts";
import Penzes from "@/components/dashboard/Penzes";


export default function Page() {


  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Penzes balance={"0"}/>
        <Charts areaChart={areaChart} pieChart={pieChart} negativeChart={NegativeChart}/>
      </div>
    </div>
  )
}


const areaChart = [
  { date: "2024-11-24", crypto: 0 },
  { date: "2024-11-25", crypto: 0 },
  { date: "2024-11-26", crypto: 0 },
  { date: "2024-11-27", crypto: 0 },
  { date: "2024-11-28", crypto: 0 },
  { date: "2024-11-29", crypto: 0 },
  { date: "2024-11-30", crypto: 0 },
  { date: "2024-12-01", crypto: 0 },
  { date: "2024-12-02", crypto: 0 },
  { date: "2024-12-03", crypto: 0 },
  { date: "2024-12-04", crypto: 0 },
  { date: "2024-12-05", crypto: 0 },
  { date: "2024-12-06", crypto: 0 },
  { date: "2024-12-07", crypto: 0 },
  { date: "2024-12-08", crypto: 0 },
  { date: "2024-12-09", crypto: 0 },
  { date: "2024-12-10", crypto: 0 },
  { date: "2024-12-11", crypto: 0 },
  { date: "2024-12-12", crypto: 0 },
  { date: "2024-12-13", crypto: 0 },
  { date: "2024-12-14", crypto: 0 },
  { date: "2024-12-15", crypto: 0 },
  { date: "2024-12-16", crypto: 0 },
  { date: "2024-12-17", crypto: 0 },
  { date: "2024-12-18", crypto: 0 },
  { date: "2024-12-19", crypto: 0 },
  { date: "2024-12-20", crypto: 0 },
  { date: "2024-12-21", crypto: 0 },
  { date: "2024-12-22", crypto: 0 },
  { date: "2024-12-23", crypto: 0 },
  { date: "2024-12-24", crypto: 0 },
  { date: "2024-12-25", crypto: 0 },
  { date: "2024-12-26", crypto: 0 },
  { date: "2024-12-27", crypto: 0 },
  { date: "2024-12-28", crypto: 0 },
  { date: "2024-12-29", crypto: 0 },
  { date: "2024-12-30", crypto: 0 },
  { date: "2024-12-31", crypto: 0 },
  { date: "2025-01-01", crypto: 0 },
  { date: "2025-01-02", crypto: 0 },
  { date: "2025-01-03", crypto: 0 },
  { date: "2025-01-04", crypto: 0 },
  { date: "2025-01-05", crypto: 0 },
  { date: "2025-01-06", crypto: 0 },
  { date: "2025-01-07", crypto: 0 },
  { date: "2025-01-08", crypto: 0 },
  { date: "2025-01-09", crypto: 0 },
  { date: "2025-01-10", crypto: 0 },
  { date: "2025-01-11", crypto: 0 },
  { date: "2025-01-12", crypto: 0 },
  { date: "2025-01-13", crypto: 0 },
  { date: "2025-01-14", crypto: 0 },
  { date: "2025-01-15", crypto: 0 },
  { date: "2025-01-16", crypto: 0 },
  { date: "2025-01-17", crypto: 0 },
  { date: "2025-01-18", crypto: 0 },
  { date: "2025-01-19", crypto: 0 },
  { date: "2025-01-20", crypto: 0 },
  { date: "2025-01-21", crypto: 0 },
  { date: "2025-01-22", crypto: 0 }
]


const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]


const NegativeChart = [
  { month: "November", visitors: 0 },
  { month: "December", visitors: 0 },
  { month: "Január", visitors: 0 }
]