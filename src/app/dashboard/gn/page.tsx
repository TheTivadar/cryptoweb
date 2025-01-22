import Charts from "@/components/dashboard/Charts";
import Penzes from "@/components/dashboard/Penzes";


export default function Page() {


  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Penzes balance={"845"}/>
        <Charts areaChart={areaChart} pieChart={pieChart} negativeChart={NegativeChart}/>
      </div>
    </div>
  )
}


const areaChart = [
  { date: "2024-12-31", crypto: 778 },
  { date: "2025-01-01", crypto: 790 },
  { date: "2025-01-02", crypto: 805 },
  { date: "2025-01-03", crypto: 795 },
  { date: "2025-01-04", crypto: 810 },
  { date: "2025-01-05", crypto: 820 },
  { date: "2025-01-06", crypto: 815 },
  { date: "2025-01-07", crypto: 830 },
  { date: "2025-01-08", crypto: 825 },
  { date: "2025-01-09", crypto: 835 },
  { date: "2025-01-10", crypto: 840 },
  { date: "2025-01-11", crypto: 838 },
  { date: "2025-01-12", crypto: 842 },
  { date: "2025-01-13", crypto: 845 },
  { date: "2025-01-14", crypto: 840 },
  { date: "2025-01-15", crypto: 843 },
  { date: "2025-01-16", crypto: 845 },
  { date: "2025-01-17", crypto: 842 },
  { date: "2025-01-18", crypto: 838 },
  { date: "2025-01-19", crypto: 843 },
  { date: "2025-01-20", crypto: 844 },
  { date: "2025-01-21", crypto: 845 },
  { date: "2025-01-22", crypto: 845 }
];


const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]


const NegativeChart = [
  { month: "Január", visitors: 8 }
]