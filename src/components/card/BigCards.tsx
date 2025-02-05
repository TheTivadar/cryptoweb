import Image from 'next/image';
import React from 'react'

const BigCards = () => {
    return (
        <div className='bg-black-100'>
            <div className='relative max-w-7xl mx-auto'>
                <div className="absolute inset-0 -top-[25vh] left-[115%] h-[600px] w-[1000px] bg-blue-600 blur-3xl opacity-30 rounded-full z-0"></div>
                <div className="absolute inset-0 top-[0] left-[115%] h-[600px] w-[1000px] bg-violet-950 blur-3xl opacity-40 rounded-full z-0"></div>
                <div className="flex gap-[1rem] max-lg:flex-wrap">
                    {pricing.map((item) => (
                        <div
                            key={item.id}
                            className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                        >
                            <h4 className="h4 mb-4 text-white">{item.title}</h4>

                            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50 text-white/80">
                                {item.description}
                            </p>

                            <div className="flex items-center h-[5.5rem] mb-6">
                                {item.price && (
                                    <>
                                        <div className="h3 text-white">$</div>
                                        <div className="text-[5.5rem] leading-none font-bold text-white/80">
                                            {item.price}
                                        </div>
                                    </>
                                )}
                            </div>
                            <button
                                className=" mb-6 px-6 rounded-md p-2 bg-white text-black "
                            >
                                Get started
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
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "---",
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
    {
        id: "1",
        title: "Premium",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        price: "---",
        features: [
            "An advanced AI chatbot that can understand complex queries",
            "An analytics dashboard to track your conversations",
            "Priority support to solve issues quickly",
        ],
    },
    {
        id: "2",
        title: "Enterprise",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: "---",
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
];