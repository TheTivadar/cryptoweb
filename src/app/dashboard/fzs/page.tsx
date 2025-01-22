import Charts from "@/components/dashboard/Charts";
import Penzes from "@/components/dashboard/Penzes";


export default function Page() {


  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Penzes balance={"1096"}/>
        <Charts areaChart={areaChart} pieChart={pieChart} negativeChart={NegativeChart}/>
      </div>
    </div>
  )
}


const areaChart = [
  { date: "2025-01-07", crypto: 1011 },
  { date: "2025-01-08", crypto: 1032 },
  { date: "2025-01-09", crypto: 1050 },
  { date: "2025-01-10", crypto: 1040 },
  { date: "2025-01-11", crypto: 1065 },
  { date: "2025-01-12", crypto: 1080 },
  { date: "2025-01-13", crypto: 1072 },
  { date: "2025-01-14", crypto: 1090 },
  { date: "2025-01-15", crypto: 1085 },
  { date: "2025-01-16", crypto: 1096 },
  { date: "2025-01-17", crypto: 1087 },
  { date: "2025-01-18", crypto: 1092 },
  { date: "2025-01-19", crypto: 1098 },
  { date: "2025-01-20", crypto: 1085 },
  { date: "2025-01-21", crypto: 1093 },
  { date: "2025-01-22", crypto: 1096 }
];


const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]


const NegativeChart = [
  { month: "Január", visitors: 9 }
]