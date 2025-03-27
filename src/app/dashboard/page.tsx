
import FadedCard from "@/components/card/FadedCard";
import NotificationCard from "@/components/card/NotificationCard";
import { NegativeChart } from "@/components/chart/NegativeChat";
import Penzes from "@/components/dashboard/Penzes";
import TradingBotsMain from "@/components/ui/TradingBotsMain";
import { getAllAnalytics } from "@/lib/analytics";


export default function Page() {

  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-black dark:text-white overflow-hidden">
        <div className="flex flex-col lg:grid lg:grid-cols-12 ">
          <div className="col-span-6 2xl:col-span-4 p-[1vw]">
            <Penzes />
          </div>
          <div className="col-span-6 2xl:col-span-4 p-[1vw]">
            <NegativeChart chartData={negativeChart} />
          </div>
          <div className="col-span-6 2xl:col-span-4 p-[1vw]">
            <NotificationCard />
          </div>
          <div className="col-span-6 2xl:col-span-3 px-2 md:px-0 md:pr-4">
            <FadedCard />
          </div>
          <div className="col-span-12 2xl:col-span-9 ">
            <TradingBotsMain />
          </div>
        </div>
      </div>
    </div>
  )
}



const pieChart = [
  { browser: "Bitcoin", visitors: 54, fill: "#ff5733" },
  { browser: "Solana", visitors: 37, fill: "#5D3FD3" },
  { browser: "Altcoinok", visitors: 9, fill: "#FFFF00" }
]


const negativeChart = [
  { month: "December", visitors: 10 },
  { month: "Január", visitors: 7 },
  { month: "Február", visitors: 9 },
  { month: "Március", visitors: 12 }
]