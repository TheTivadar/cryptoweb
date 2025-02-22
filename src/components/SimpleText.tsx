import React from 'react'
import Spline from '@splinetool/react-spline'

const SimpleText = () => {
  return (
    <div className='bg-black-100 h-full py-10'>
      <div className='grid grid-cols-12'>
        <div className='col-span-6'>

        </div>
        <div className='col-span-12 lg:col-span-6 xl:col-span-5 flex flex-col justify-center pr-2 md:pr-10 px-4 lg:px-0'>
          <h1 className='text-4xl pb-8 text-white'>
            AI OPTIMIZED TRADING CONTRACTS</h1>
          <p className='pb-8 text-white/80'>Earn the maximum from your capital with an AlgosOne investment plan. Capital is initially invested for 24 months. Any additional investments made within that calendar year are added to the same 24-month plan. However, investments made in the following calendar year start a new 24-month plan. All investment plan deposits are converted into USD, except, if you make a direct deposit in BTC or ETH. Then, the investment plan can be locked in the deposit cryptocurrency.</p>
          <button className="inline-flex  w-min whitespace-nowrap h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Kezdj bele!
          </button>
        </div>
      </div>
    </div>
  )
}

export default SimpleText