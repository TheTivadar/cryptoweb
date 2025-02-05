import React from 'react'
import { LeftCurve, RightCurve } from "./svg/Curves"
import Image from 'next/image'

const Technologies = () => {
    return (
        <div className='pt-40 pb-20 bg-black-100'>
            <div className="max-w-7xl mx-auto lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8 text-white">
                        AI Chat App for seamless collaboration
                    </h2>
                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map((item) => (
                            <li className="mb-3 py-3" key={item.id}>
                                <div className="flex items-center">
                                    <Image src={"/technologies/check.svg"} width={24} height={24} alt="check" />
                                    <h6 className="body-2 ml-5 text-white">{item.title}</h6>
                                </div>
                                {item.text && (
                                    <p className="body-2 mt-3 text-n-4 text-white/80">{item.text}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#172554,45%,#3b82f6,55%,#172554)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Kezdj bele!
                    </button>
                </div>
                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto text-white">
                    {collabText}
                    </p>
                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                    <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                    <Image
                                        src={"/technologies/brainwave-symbol.svg"}
                                        width={48}
                                        height={48}
                                        alt="brainwave"
                                    />
                                </div>
                            </div>
                        </div>
                        <ul>
                            {collabApps.map((app, index) => (
                                <li
                                    key={app.id}
                                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}
                                    style={{
                                        transform: `rotate(${index * 45}deg)`, 
                                    }}
                                >
                                    <div
                                        className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl`}
                                        style={{
                                            transform: `rotate(-${index * 45}deg)`, 
                                        }}
                                    >
                                        <Image
                                            className="m-auto"
                                            width={app.width}
                                            height={app.height}
                                            alt={app.title}
                                            src={app.icon}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Technologies



const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

const collabContent = [
    {
        id: "0",
        title: "Seamless Integration",
        text: collabText,
    },
    {
        id: "1",
        title: "Smart Automation",
    },
    {
        id: "2",
        title: "Top-notch Security",
    },
];

const collabApps = [
    {
        id: "0",
        title: "Figma",
        icon: "/technologies/figma.png",
        width: 26,
        height: 36,
    },
    {
        id: "1",
        title: "Notion",
        icon: "/technologies/notion.png",
        width: 34,
        height: 36,
    },
    {
        id: "2",
        title: "Discord",
        icon: "/technologies/discord.png",
        width: 36,
        height: 28,
    },
    {
        id: "3",
        title: "Slack",
        icon: "/technologies/slack.png",
        width: 34,
        height: 35,
    },
    {
        id: "4",
        title: "Photoshop",
        icon: "/technologies/photoshop.png",
        width: 34,
        height: 34,
    },
    {
        id: "5",
        title: "Protopie",
        icon: "/technologies/protopie.png",
        width: 34,
        height: 34,
    },
    {
        id: "6",
        title: "Framer",
        icon: "/technologies/framer.png",
        width: 26,
        height: 34,
    },
    {
        id: "7",
        title: "Raindrop",
        icon: "/technologies/raindrop.png",
        width: 38,
        height: 32,
    },
];