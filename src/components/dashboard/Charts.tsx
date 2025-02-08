import { auth } from '@/auth'
import { AreaChartDemo } from '@/components/chart/AreaChart'
import { NegativeChart } from '@/components/chart/NegativeChat'
import { PieChartDemo } from '@/components/chart/PieChart'
import React from 'react'

const Charts = async({areaChart,pieChart,negativeChart}:any) => {
   const session = await auth();



  return (
    <div>
        <div className="pt-20">
          {/* {session?.user?.id == "164b9068-3c24-4fca-ac2d-0b4ef16c4a1d" ? 
          <AreaChartDemo chartData={areaChart}/>:
          ""
          } */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <PieChartDemo chartData={pieChart}/>
            <NegativeChart chartData={negativeChart}/>
          </div>
        </div>
    </div>
  )
}

export default Charts