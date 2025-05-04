
import FadedCard from "@/components/card/FadedCard";
import NotificationCard from "@/components/card/NotificationCard";
import { NegativeChart } from "@/components/chart/NegativeChat";
import Penzes from "@/components/dashboard/Penzes";
import TradingBotsMain from "@/components/ui/TradingBotsMain";



export default function Page() {

  return (
    <div>
      <div className="w-full h-full pt-10 lg:px-8 text-white overflow-hidden">
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
          <div className="col-span-6 2xl:col-span-3 pt-6 lg:pt-0 px-2 md:px-0 md:pr-4">
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






const negativeChart = [
  { month: "December", visitors: 10 },
  { month: "Január", visitors: 7 },
  { month: "Február", visitors: 9 },
  { month: "Március", visitors: 12 },
  { month: "Április", visitors: 4 }
]