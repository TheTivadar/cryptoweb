import React from 'react'
import Arrow from "../svg/Arrow"
import ClipPath from "../svg/ClipPath"
import GradientLight from "../svg/GradientLight"
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const DocumentCard = () => {
    const t = useTranslations('documentCard')
    const information = useTranslations('moreInfo')
    const benefits =[
        {
            id: "0",
            title: t("0.title"),
            text: t("0.description"),
            backgroundUrl: "/cardSVG/card-1.svg",
            iconUrl: "/cardSVG/icon-1.svg",
            imageUrl: "/bitcoin.jpeg",
        },
        {
            id: "1",
            title: t("1.title"),
            text: t("1.description"),
            backgroundUrl: "/cardSVG/card-2.svg",
            iconUrl: "/cardSVG/icon-2.svg",
            imageUrl: "/solana.jpg",
            light: true,
        },
        {
            id: "2",
            title: t("2.title"),
            text: t("2.description"),
            backgroundUrl: "/cardSVG/card-3.svg",
            iconUrl: "/cardSVG/icon-3.svg",
            imageUrl: "/eth.jpg",
        },
        {
            id: "3",
            title: t("3.title"),
            text: t("3.description"),
            backgroundUrl: "/cardSVG/card-4.svg",
            iconUrl: "/cardSVG/icon-4.svg",
            imageUrl: "/bnb.jpeg",
            light: true,
        },
        {
            id: "4",
            title: t("4.title"),
            text: t("4.description"),
            backgroundUrl: "/cardSVG/card-3.svg",
            iconUrl: "/cardSVG/icon-2.svg",
            imageUrl: "/aistock.webp",
        },
        {
            id: "5",
            title: t("5.title"),
            text: t("5.description"),
            backgroundUrl: "/cardSVG/card-2.svg",
            iconUrl: "/cardSVG/icon-1.svg",
            imageUrl: "/dashboard.jpg",
        },
    ]
    return (
        <div className='bg-black-100 py-10'>
            <div className='max-w-7xl mx-auto px-2 lg:px-6  '>
                <div className="flex flex-wrap gap-2 gap-y-6 lg:gap-10 mb-10 justify-center">
                    {benefits.map((item) => (
                        <div
                            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] sm:max-w-[18rem] lg:max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                            key={item.id}
                        >
                            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-auto">
                                <h5 className="h5 mb-5 text-white">{item.title}</h5>
                                <p className="body-2 mb-6 text-n-3 text-white/80">{item.text}</p>
                                <div className="flex items-center mt-auto justify-between">
                                    <Image
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <Link href={"/aitrading"} className='flex items-center relative z-50'>
                                        <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider text-white/80 z-20 ">
                                        {information("text")}
                                        </p>
                                        <Arrow />
                                    </Link>
                                </div>
                            </div>

                            {item.light && <GradientLight />}

                            <div
                                className="absolute inset-0.5 bg-n-8"
                                style={{ clipPath: "url(#benefits)" }}
                            >
                                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                    {item.imageUrl && (
                                        <Image
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

