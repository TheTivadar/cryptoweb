import TradingViewChart from '@/components/TradingViewCharts/TradingViewChart'
import React from 'react'

const analytics = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">Crypto Trading Chart</h1>
      <TradingViewChart symbol="ETHUSDT" />
    </div>
  )
}

export default analytics