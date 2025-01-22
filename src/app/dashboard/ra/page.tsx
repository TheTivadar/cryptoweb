import Charts from "@/components/dashboard/Charts";
import Penzes from "@/components/dashboard/Penzes";


export default function Page() {


  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Penzes balance={"7698"}/>
        <Charts areaChart={areaChart} pieChart={pieChart} negativeChart={NegativeChart}/>
      </div>
    </div>
  )
}


const areaChart = [
  { date: "2025-01-12", crypto: 7444 },
  { date: "2025-01-13", crypto: 7521 },
  { date: "2025-01-14", crypto: 7412 },
  { date: "2025-01-15", crypto: 7480 },
  { date: "2025-01-16", crypto: 7555 },
  { date: "2025-01-17", crypto: 7600 },
  { date: "2025-01-18", crypto: 7534 },
  { date: "2025-01-19", crypto: 7625 },
  { date: "2025-01-20", crypto: 7598 },
  { date: "2025-01-21", crypto: 7670 },
  { date: "2025-01-22", crypto: 7698 }
];


const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]


const NegativeChart = [
  { month: "Január", visitors: 3 }
]