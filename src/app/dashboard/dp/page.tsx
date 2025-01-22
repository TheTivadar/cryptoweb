import Charts from "@/components/dashboard/Charts";
import Penzes from "@/components/dashboard/Penzes";


export default function Page() {


  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <Penzes balance={"541"}/>
        <Charts areaChart={areaChart} pieChart={pieChart} negativeChart={NegativeChart}/>
      </div>
    </div>
  )
}


const areaChart = [
  { date: "2025-01-03", crypto: 500 },
  { date: "2025-01-04", crypto: 502 },
  { date: "2025-01-05", crypto: 503 },
  { date: "2025-01-06", crypto: 505 },
  { date: "2025-01-07", crypto: 507 },
  { date: "2025-01-08", crypto: 508 },
  { date: "2025-01-09", crypto: 510 },
  { date: "2025-01-10", crypto: 512 },
  { date: "2025-01-11", crypto: 513 },
  { date: "2025-01-12", crypto: 515 },
  { date: "2025-01-13", crypto: 517 },
  { date: "2025-01-14", crypto: 518 },
  { date: "2025-01-15", crypto: 520 },
  { date: "2025-01-16", crypto: 522 },
  { date: "2025-01-17", crypto: 523 },
  { date: "2025-01-18", crypto: 525 },
  { date: "2025-01-19", crypto: 527 },
  { date: "2025-01-20", crypto: 528 },
  { date: "2025-01-21", crypto: 530 },
  { date: "2025-01-22", crypto: 541 }
];

const NegativeChart = [
  { month: "Január", visitors: 8 }
]

const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]

