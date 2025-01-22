import React from 'react'
import Arrow from "../svg/Arrow"
import ClipPath from "../svg/ClipPath"
import GradientLight from "../svg/GradientLight"

const DocumentCard = () => {
    return (
        <div className='bg-black-100 py-10'>
            <div className='max-w-7xl mx-auto px-6  '>
                <div className="flex flex-wrap gap-10 mb-10 justify-center">
                    {benefits.map((item) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                            key={item.id}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                                <h5 className="h5 mb-5">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                                <div className="flex items-center mt-auto">
                                    <img
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                                        Explore more
                                    </p>
                                    <Arrow />
                                </div>
                            </div>

                            {item.light && <GradientLight />}

                            <div
                                className="absolute inset-0.5 bg-n-8"
                                style={{ clipPath: "url(#benefits)" }}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                    {item.imageUrl && (
                                        <img
                                            src={item.imageUrl}
                                            width={380}
                                            height={362}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </div>
                            </div>
                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DocumentCard

const benefits = [
    {
        id: "0",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./cardSVG/card-1.svg",
        iconUrl: "/cardSVG/icon-1.svg",
        imageUrl: "/dashboard.jpg",
    },
    {
        id: "1",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "./cardSVG/card-2.svg",
        iconUrl: "/cardSVG/icon-2.svg",
        imageUrl: "/dashboard.jpg",
        light: true,
    },
    {
        id: "2",
        title: "Connect everywhere",
        text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
        backgroundUrl: "./cardSVG/card-3.svg",
        iconUrl: "/cardSVG/icon-3.svg",
        imageUrl: "/dashboard.jpg",
    },
    {
        id: "3",
        title: "Fast responding",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./cardSVG/card-4.svg",
        iconUrl: "/cardSVG/icon-4.svg",
        imageUrl: "/dashboard.jpg",
        light: true,
    },
    {
        id: "4",
        title: "Ask anything",
        text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
        backgroundUrl: "./cardSVG/card-5.svg",
        iconUrl: "/cardSVG/icon-2.svg",
        imageUrl: "/dashboard.jpg",
    },
    {
        id: "5",
        title: "Improve everyday",
        text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
        backgroundUrl: "./cardSVG/card-6.svg",
        iconUrl: "/cardSVG/icon-1.svg",
        imageUrl: "/dashboard.jpg",
    },
];