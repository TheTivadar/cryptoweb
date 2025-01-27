import React from 'react'
import Spline from '@splinetool/react-spline'

const SimpleText = () => {
  return (
    <div className='bg-black-100 h-full py-10'>
      <div className='grid grid-cols-12'>
        <div className='col-span-6'>

        </div>
        <div className='col-span-5 flex flex-col justify-center pr-10'>
          <h1 className='text-4xl pb-8'>
          AI OPTIMIZED TRADING CONTRACTS</h1>
          <p className='pb-8'>Earn the maximum from your capital with an AlgosOne investment plan. Capital is initially invested for 24 months. Any additional investments made within that calendar year are added to the same 24-month plan. However, investments made in the following calendar year start a new 24-month plan. All investment plan deposits are converted into USD, except, if you make a direct deposit in BTC or ETH. Then, the investment plan can be locked in the deposit cryptocurrency.</p>
          <button className='text-start'>Kezdj bele most!</button>
        </div>
      </div>
    </div>
  )
}

export default SimpleText