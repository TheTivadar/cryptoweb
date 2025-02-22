import Image from "next/image";
import { InfiniteSlider } from "./infiniteSlider";


export function InfiniteSliderBasic() {
    return (
        <div className="bg-black-100 z-40 relative p-1">
            <div className="w-full h-[1px] bg-gray-300  my-1 overflow-hidden" />
            <InfiniteSlider gap={20} reverse className="flex">
                <img
                    src='/CoinMarketCap.svg'
                    alt='Apple Music logo'
                    className='h-[40px] lg:h-[80px] w-auto bg-gray-300/80 rounded-3xl p-1 lg:px-2 lg:p-3 border-2 border-black'
                />
                <img
                    src='/Binance.png'
                    alt='Chrome logo'
                    className='h-[40px] lg:h-[80px] w-auto bg-gray-300/80 rounded-3xl p-1 lg:px-2 lg:p-3 border-2 border-black'
                />
                <img
                    src='/Forbes.png'
                    alt='Strava logo'
                    className='h-[40px] lg:h-[80px] w-auto bg-gray-300/80 rounded-3xl p-1 lg:px-2 lg:p-3 border-2 border-black'
                />
                <img
                    src='/WallStreetOnline.png'
                    alt='Apple Music logo'
                    className='h-[40px] lg:h-[80px] w-auto bg-gray-300/80 rounded-3xl p-1 lg:px-2 lg:p-3 border-2 border-black'
                />
                <img
                    src='/Techopedia.png'
                    alt='Chrome logo'
                    className='h-[40px] lg:h-[80px] w-auto bg-gray-300/80 rounded-3xl p-1 lg:px-2 lg:p-3 border-2 border-black'
                />
                <img
                    src='/Insider.png'
                    alt='Strava logo'
                    className='h-[40px] lg:h-[80px] w-auto bg-gray-300/80 rounded-3xl p-1 lg:px-2 lg:p-3 border-2 border-black'
                />

            </InfiniteSlider>
            <div className="w-full h-[1px] bg-gray-300 my-1" />
        </div>
    );
}

export function InfiniteSlider2() {
    return (
        <div className="overflow-hidden bg-gray-300/10 flex">
            <ul className="flex gap-10  text-white py-4 animate-infinite-scroll">
                {data.map((data, index)=> (

                    <li key={index} className="flex gap-2">
                        <Image
                        key={data.id}
                        alt={`${data.src}`}
                        src={`${data.src}`}
                        width={400}
                        height={200}
                        className="h-[80px] w-auto"
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

const data = [
    {
        id: 1,
        src: '/CoinMarketCap.svg' // Érték inicializálva
    },
    {
        id: 2,
        src: '/Binance.png' // Érték inicializálva
    },
    {
        id: 3,
        src: '/Forbes.png'
    },
    {
        id: 4,
        src: '/WallStreetOnline.png'
    },
    {
        id: 5,
        src: '/Techopedia.png'
    },
    {
        id: 6,
        src: '/Insider.png'
    }
]; 
