import { useTranslations } from "next-intl"

const CardsWithHero = ({data}:{data:CardProps[]}) => {
    const infoTitle = useTranslations('aitradingInfoTitle')
    return (
        <div className='bg-black-100 w-full py-10 lg:py-28 '>
            <div className="absolute  left-[100%] transform -translate-x-1/2 -translate-y-2/3 right h-[600px] w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
            <div className="absolute top-[100%]  transform -translate-x-1/2 -translate-y-1/2 right h-[600px] w-[1000px] bg-violet-500 blur-[300px] opacity-40 rounded-full z-0"></div>
          
            <div className='max-w-6xl w-full flex flex-col mx-auto items-center '>
                <h1 className='text-3xl md:text-5xl font-[200] text-white/90'>{infoTitle('title')}</h1>
                <p className='text-3xl md:text-5xl font-semibold pt-2 pb-8 text-white text-center md:text-start'>{infoTitle('title2')}</p>
                <p className='text-lg md:text-xl font-normal tracking-tight pb-16 text-white/80 text-center'>{infoTitle('subtitle2')}</p>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 lg:gap-x-8 gap-y-10 px-6 md:px-2'>
                    {data.map((item, index) => (
                        <div key={index} className='col-span-1'>
                            <Card item={item} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CardsWithHero

interface CardProps {
    id: number,
    title: string,
    description: string
}

const Card = ({ item }: { item: CardProps }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row gap-4 items-center'>
                <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-violet-700 via-purple-400 to-violet-300 w-min">
                    {item.id}
                </p>
                <h1 className='text-xl font-semibold py-2 text-white'>{item.title}</h1>
            </div>
            <p className='text-white/80'>{item.description}</p>
            <div className={`${item.id !== 6 ? "w-[95%] bg-gray-300/60 h-[2px] mx-auto mt-4 sm:hidden": ""}`} />
        </div>
    )
}

