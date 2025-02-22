import Image from 'next/image';
import React from 'react'
import Background from '../background/background';

const BigCards = () => {
    return (
        <div className='bg-black-100 pt-10 md:pt-0'>
            <Background />
            <div className='relative max-w-7xl mx-auto z-10'>
                <div className="absolute inset-0 -top-[25vh] left-[115%] h-[600px] w-[1000px] bg-blue-600 blur-3xl opacity-30 rounded-full z-0"></div>
                <div className="absolute inset-0 top-[0] left-[115%] h-[600px] w-[1000px] bg-violet-950 blur-3xl opacity-40 rounded-full z-0"></div>
                <div className="flex md:gap-[2px] lg:gap-[1rem] max-md:flex-wrap px-4 md:px-0">
                    {pricing.map((item) => (
                        <div
                            key={item.id}
                            className="w-[19rem] lg:min-w-[400px] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                        >
                            <h4 className="h4 mb-4 text-white text-3xl font-semibold">{item.title}</h4>

                            <p className="body-2 min-h-[2rem] md:min-h-[4rem] mb-3 text-n-1/50 text-white/80">
                                {item.description}
                            </p>
                            <p className="mb-2  text-white">
                                Jutalék
                            </p>

                            <div className="flex items-center h-[5.5rem] mb-2 md:mb-6">
                                {item.price && (
                                    <>
                                        <div className="h3 text-white">%</div>
                                        <div className="text-[5.5rem] leading-none font-bold text-white/80">
                                            {item.price}
                                        </div>
                                    </>
                                )}
                            </div>
                            <button
                                className=" mb-6 px-6 rounded-md p-2 bg-white text-black "
                            >
                                Befektetési módok
                            </button>
                            <ul>
                                {item.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start py-5 border-t border-n-6"
                                    >
                                        <Image src={"/technologies/check.svg"} width={24} height={24} alt="Check" />
                                        <p className="body-2 ml-4 text-white/80">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BigCards



const pricing = [
    {
        id: "0",
        title: "High-Risk",
        description: "Volatilis altcoinok kereskedése",
        price: "---",
        features: [
            "Jelenleg nem elérhető",
            "Jelenleg nem elérhető",
            "Jelenleg nem elérhető",
        ],
    },
    {
        id: "1",
        title: "Normál",
        description: "Alacsony kockázatú befektetések, kiegyensúlyozott hozam",
        price: "7",
        features: [
            "Alacsony kezelési költségek",
            "Alacsony kockázatú kereskedések",
            "Kiegyensúlyozott hozam",
            "Nincs befizetési küszöb",
        ],
    },
    {
        id: "2",
        title: "Extreme",
        description: "Jelenleg fejlesztés alatt",
        price: "---",
        features: [
            "Jelenleg nem elérhető",
            "Jelenleg nem elérhető",
            "Jelenleg nem elérhető",
        ],
    },
];