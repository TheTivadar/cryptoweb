import React from 'react'
import FlashyCards from '../card/FlashyCards'
import Experience from '../Experience'

const TradingBotsMain = () => {
    return (
        <div className='w-full  h-full border rounded-[30px] border-none sm:border-purple/50 bg-background flex flex-col 2xl:p-[1vw] pt-10 lg:pt-0'>
            <h1 className='text-2xl pb-4 text-center sm:text-start'>Jelenleg elérhető kereskedő botok</h1>
            <FlashyCards />
            {/* <FlashyCards title={"asd"} description={"asdsadfkjgbdsiajkbgsdaéjgbasdopiéubgajsdéjkogsabdégkjasdbgljksabdgjéasbdpiujasdbklgjéabsdékbgjb"} src="/bnb.jpeg" />
            <FlashyCards title={"asd"} description={"asdsadfkjgbdsiajkbgsdaéjgbasdopiéubgajsdéjkogsabdégkjasdbgljksabdgjéasbdpiujasdbklgjéabsdékbgjb"} src="/bnb.jpeg" />  */}
        </div>
    )
}

export default TradingBotsMain