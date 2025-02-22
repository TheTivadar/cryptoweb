"use client"
import SendSol from '@/components/crypto/sendSol'
import useUserStore from '@/components/providers/userStore'
import TradingViewChart from '@/components/TradingViewCharts/TradingViewChart'
import WalletBalance from '@/lib/crypto/WalletBalance'
import WalletInfo from '@/lib/crypto/WalletInfo'

const Analytics = () => {
  const {normalUser } = useUserStore()
  console.log(normalUser)
  return (
    <div>
      <h1 className="text-xl font-bold">Crypto Trading Chart</h1>
      <TradingViewChart symbol="ETHUSDT" />
      <WalletBalance />
      <WalletInfo />
      {normalUser && normalUser.name}
      <SendSol fixedAccount={true}/>
    </div>
  )
}

export default Analytics