import Charts from "@/components/dashboard/Charts";
import Penzes from "@/components/dashboard/Penzes";


export default function Page() {


  return (
    <div>
    
      {/*< div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Penzes balance={"225"}/>
        <Charts areaChart={areaChart} pieChart={pieChart} negativeChart={NegativeChart}/>
      </div> */}
    </div>
  )
}


const areaChart = [
  { date: "2024-12-27", crypto: 208 },
  { date: "2024-12-28", crypto: 212 },
  { date: "2024-12-29", crypto: 225 },
  { date: "2024-12-30", crypto: 202 },
  { date: "2024-12-31", crypto: 209 },
  { date: "2025-01-01", crypto: 214 },
  { date: "2025-01-02", crypto: 220 },
  { date: "2025-01-03", crypto: 210 },
  { date: "2025-01-04", crypto: 215 },
  { date: "2025-01-05", crypto: 223 },
  { date: "2025-01-06", crypto: 208 },
  { date: "2025-01-07", crypto: 211 },
  { date: "2025-01-08", crypto: 217 },
  { date: "2025-01-09", crypto: 226 },
  { date: "2025-01-10", crypto: 220 },
  { date: "2025-01-11", crypto: 225 },
  { date: "2025-01-12", crypto: 213 },
  { date: "2025-01-13", crypto: 230 },
  { date: "2025-01-14", crypto: 224 },
  { date: "2025-01-15", crypto: 227 },
  { date: "2025-01-16", crypto: 210 },
  { date: "2025-01-17", crypto: 218 },
  { date: "2025-01-18", crypto: 222 },
  { date: "2025-01-19", crypto: 209 },
  { date: "2025-01-20", crypto: 215 },
  { date: "2025-01-21", crypto: 220 },
  { date: "2025-01-22", crypto: 225 }
];

const NegativeChart = [
  { month: "Január", visitors: 9 }
]

const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]

