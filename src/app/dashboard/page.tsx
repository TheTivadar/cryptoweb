import Charts from "@/components/dashboard/Charts";
import Penzes from "@/components/dashboard/Penzes";


export default function Page() {


  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Penzes balance={"5798"}/>
        <Charts areaChart={areaChart} pieChart={pieChart} negativeChart={NegativeChart}/>
      </div>
    </div>
  )
}


const areaChart = [
  { date: "2024-11-24", crypto: 4751 },
  { date: "2024-11-25", crypto: 4822 },
  { date: "2024-11-26", crypto: 4901 },
  { date: "2024-11-27", crypto: 4732 },
  { date: "2024-11-28", crypto: 4421 },
  { date: "2024-11-29", crypto: 5156 },
  { date: "2024-11-30", crypto: 4976 },
  { date: "2024-12-01", crypto: 4812 },
  { date: "2024-12-02", crypto: 4893 },
  { date: "2024-12-03", crypto: 4917 },
  { date: "2024-12-04", crypto: 4468 },
  { date: "2024-12-05", crypto: 4934 },
  { date: "2024-12-06", crypto: 5432 },
  { date: "2024-12-07", crypto: 5874 },
  { date: "2024-12-08", crypto: 5304 },
  { date: "2024-12-09", crypto: 5230 },
  { date: "2024-12-10", crypto: 5400 },
  { date: "2024-12-11", crypto: 5723 },
  { date: "2024-12-12", crypto: 5321 },
  { date: "2024-12-13", crypto: 5501 },
  { date: "2024-12-14", crypto: 5965 },
  { date: "2024-12-15", crypto: 6101 },
  { date: "2024-12-16", crypto: 5290 },
  { date: "2024-12-17", crypto: 5160 },
  { date: "2024-12-18", crypto: 5160 },
  { date: "2024-12-19", crypto: 5543 },
  { date: "2024-12-20", crypto: 5810 },
  { date: "2024-12-21", crypto: 5400 },
  { date: "2024-12-22", crypto: 4890 },
  { date: "2024-12-23", crypto: 4927 },
  { date: "2024-12-24", crypto: 4875 },
  { date: "2024-12-25", crypto: 4846 },
  { date: "2024-12-26", crypto: 4920 },
  { date: "2024-12-27", crypto: 4991 },
  { date: "2024-12-28", crypto: 4807 },
  { date: "2024-12-29", crypto: 4853 },
  { date: "2024-12-30", crypto: 5231 },
  { date: "2024-12-31", crypto: 5263 },
  { date: "2025-01-01", crypto: 5293 },
  { date: "2025-01-02", crypto: 5412 },
  { date: "2025-01-03", crypto: 5263 },
  { date: "2025-01-04", crypto: 4930 },
  { date: "2025-01-05", crypto: 5231 },
  { date: "2025-01-06", crypto: 5267 },
  { date: "2025-01-07", crypto: 5222 },
  { date: "2025-01-08", crypto: 5297 },
  { date: "2025-01-09", crypto: 5371 },
  { date: "2025-01-10", crypto: 5641 },
  { date: "2025-01-11", crypto: 5864 },
  { date: "2025-01-12", crypto: 6206 },
  { date: "2025-01-13", crypto: 6598 },
  { date: "2025-01-14", crypto: 5801 },
  { date: "2025-01-15", crypto: 5987 },
  { date: "2025-01-16", crypto: 6321 },
  { date: "2025-01-17", crypto: 5973 },
  { date: "2025-01-18", crypto: 5211 },
  { date: "2025-01-19", crypto: 5432 },
  { date: "2025-01-20", crypto: 5786 },
  { date: "2025-01-21", crypto: 5678 },
  { date: "2025-01-22", crypto: 5432 },
  { date: "2025-01-23", crypto: 5221 },
  { date: "2025-01-24", crypto: 5898 },
  { date: "2025-01-25", crypto: 6210 },
  { date: "2025-01-26", crypto: 6019 },
  { date: "2025-01-27", crypto: 5921 },
  { date: "2025-01-28", crypto: 5798 },
]


const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]


const NegativeChart = [
  { month: "November", visitors: 0 },
  { month: "December", visitors: 10 },
  { month: "Január", visitors: 4 }
]