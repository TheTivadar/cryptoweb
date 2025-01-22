import { AreaChartDemo } from '@/components/chart/AreaChart'
import { NegativeChart } from '@/components/chart/NegativeChat'
import { PieChartDemo } from '@/components/chart/PieChart'
import React from 'react'

const Charts = ({areaChart,pieChart,negativeChart}:any) => {
  return (
    <div>
        <div className="pt-20">
          <AreaChartDemo chartData={areaChart}/>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <PieChartDemo chartData={pieChart}/>
            <NegativeChart chartData={negativeChart}/>
          </div>
        </div>
    </div>
  )
}

export default Charts