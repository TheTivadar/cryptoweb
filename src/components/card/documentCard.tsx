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
        title: "Kriptovaluta Kereskedési Szakértelem",
        text: "Az AI rendszer elemzi a globális kriptovaluta piacokat, valós időben hoz döntéseket a kereskedési pozíciók optimalizálása érdekében.",
        backgroundUrl: "./cardSVG/card-1.svg",
        iconUrl: "/cardSVG/icon-1.svg",
        imageUrl: "/dashboard.jpg",
    },
    {
        id: "1",
        title: "Piaci Elemzési Információk",
        text: "Az AI a makrogazdasági híreket és a kriptovalutákkal kapcsolatos híreket is figyelembe véve ad mélyebb piaci betekintést, jobb előrejelzéseket készítve.",
        backgroundUrl: "./cardSVG/card-2.svg",
        iconUrl: "/cardSVG/icon-2.svg",
        imageUrl: "/dashboard.jpg",
        light: true,
    },
    {
        id: "2",
        title: "Valós Idejű Döntéshozatal",
        text: "Az AI képes másodpercek alatt döntéseket hozni, reagálva a piaci ingadozásokra, hogy maximalizálja a nyereséget.",
        backgroundUrl: "./cardSVG/card-3.svg",
        iconUrl: "/cardSVG/icon-3.svg",
        imageUrl: "/dashboard.jpg",
    },
    {
        id: "3",
        title: "Fejlett Kockázatkezelés",
        text: "Az AI folyamatosan figyeli a kockázatokat, és folyamatosan optimalizálja a kereskedési stratégiákat, hogy minimalizálja a veszteségeket és maximalizálja a hozamot.",
        backgroundUrl: "./cardSVG/card-4.svg",
        iconUrl: "/cardSVG/icon-4.svg",
        imageUrl: "/dashboard.jpg",
        light: true,
    },
    {
        id: "4",
        title: "Algoritmikus Tanulás",
        text: "Az AI a múltbeli kereskedési adatok és a folyamatos piaci viselkedés elemzésével tanul, és javítja képességét a jövőbeli trendek előrejelzésében.",
        backgroundUrl: "./cardSVG/card-5.svg",
        iconUrl: "/cardSVG/icon-5.svg",
        imageUrl: "/dashboard.jpg",
    },
    {
        id: "5",
        title: "Folyamatos Piaci Figyelés",
        text: "Az AI 24/7 figyeli a kriptovaluták árait, trendjeit és híreit, hogy a legjobb pillanatban tudjon cselekedni és optimalizálja a nyereséget.",
        backgroundUrl: "./cardSVG/card-6.svg",
        iconUrl: "/cardSVG/icon-6.svg",
        imageUrl: "/dashboard.jpg",
    },
];