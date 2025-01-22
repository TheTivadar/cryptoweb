import React from 'react'

const CardsWithHero = () => {
    return (
        <div className='bg-black-100 w-full py-28 relative'>
            <div className="absolute  left-[100%] transform -translate-x-1/2 -translate-y-2/3 right h-[600px] w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
            <div className="absolute top-[100%]  transform -translate-x-1/2 -translate-y-1/2 right h-[600px] w-[1000px] bg-violet-500 blur-[300px] opacity-40 rounded-full z-0"></div>
            <div className='max-w-6xl w-full flex flex-col mx-auto items-center relative'>
            <h1 className='text-5xl font-[200]'>MIK A ELŐNYEI AZ</h1>
<p className='text-5xl font-semibold pt-2 pb-8'>AI ALAPÚ KERESKEDÉSNEK?</p>
<p className='text-xl font-normal tracking-tight pb-16'>Használja ki az AI-alapú kereskedési technológia sebességét, hatékonyságát és páratlan pontosságát</p>
                <div className='grid grid-cols-3 gap-x-8 gap-y-10'>
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
            <p className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-violet-700 via-purple-400 to-violet-300 w-min">
                {item.id}
            </p>
            <h1 className='text-xl font-semibold py-2'>{item.title}</h1>
            <p>{item.description}</p>
        </div>
    )
}

const data = [
    {
        id: 1,
        title: "Kivételes Feldolgozási Sebesség",
        description: "A kereskedő botok hatalmas napi piaci adatokat dolgozhatnak fel, különféle kereskedéssel kapcsolatos forrásokból szinte azonnal, olyan sebességgel, amit egy ember nem képes elérni."
    },
    {
        id: 2,
        title: "Tanulási és Fejlődési Képesség",
        description: "A kereskedő botok hatalmas napi piaci adatokat dolgozhatnak fel, különféle kereskedéssel kapcsolatos forrásokból szinte azonnal, olyan sebességgel, amit egy ember nem képes elérni."
    },
    {
        id: 3,
        title: "Bonyolult Elemző Képességek",
        description: "A kereskedő botok hatalmas napi piaci adatokat dolgozhatnak fel, különféle kereskedéssel kapcsolatos forrásokból szinte azonnal, olyan sebességgel, amit egy ember nem képes elérni."
    },
    {
        id: 4,
        title: "Érzelemmentes Döntéshozatal",
        description: "A kereskedő botok hatalmas napi piaci adatokat dolgozhatnak fel, különféle kereskedéssel kapcsolatos forrásokból szinte azonnal, olyan sebességgel, amit egy ember nem képes elérni."
    },
    {
        id: 5,
        title: "Piaci Hozzáférhetőség Kiterjesztése",
        description: "A kereskedő botok hatalmas napi piaci adatokat dolgozhatnak fel, különféle kereskedéssel kapcsolatos forrásokból szinte azonnal, olyan sebességgel, amit egy ember nem képes elérni."
    },
    {
        id: 6,
        title: "Kivételes Feldolgozási Sebesség",
        description: "A kereskedő botok hatalmas napi piaci adatokat dolgozhatnak fel, különféle kereskedéssel kapcsolatos forrásokból szinte azonnal, olyan sebességgel, amit egy ember nem képes elérni."
    },
]