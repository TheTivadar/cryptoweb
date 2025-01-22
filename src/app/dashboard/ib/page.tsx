import Charts from "@/components/dashboard/Charts";
import Penzes from "@/components/dashboard/Penzes";


export default function Page() {


  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Penzes balance={"875"}/>
        <Charts areaChart={areaChart} pieChart={pieChart} negativeChart={NegativeChart}/>
      </div>
    </div>
  )
}


const areaChart = [
  { date: "2025-01-08", crypto: 811 },
  { date: "2025-01-09", crypto: 824 },
  { date: "2025-01-10", crypto: 838 },
  { date: "2025-01-11", crypto: 850 },
  { date: "2025-01-12", crypto: 836 },
  { date: "2025-01-13", crypto: 845 },
  { date: "2025-01-14", crypto: 862 },
  { date: "2025-01-15", crypto: 853 },
  { date: "2025-01-16", crypto: 868 },
  { date: "2025-01-17", crypto: 860 },
  { date: "2025-01-18", crypto: 874 },
  { date: "2025-01-19", crypto: 861 },
  { date: "2025-01-20", crypto: 870 },
  { date: "2025-01-21", crypto: 866 },
  { date: "2025-01-22", crypto: 875 }
];


const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]


const NegativeChart = [
  { month: "Január", visitors: 8 }
]