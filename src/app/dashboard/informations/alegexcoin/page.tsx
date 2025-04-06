import FadedCard from '@/components/card/FadedCard'
import BlurText from '@/components/text/BlurText'
import React from 'react'

const AlegexCoin = () => {
  return (
    <div className='space-y-20 pt-20'>
      <div className='max-w-[500px] mx-auto'>
        <FadedCard />
      </div>
      <div className='flex justify-center items-center h-full'>
        <BlurText
          text="Nemsokára elérhető lesz saját Alegex Coin-unk!"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-3xl md:text-5xl font-semibold mb-8"
        />
      </div>

    </div>
  )
}

export default AlegexCoin