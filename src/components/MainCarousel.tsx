"use client"
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

interface Cardprops {
    title: string,
    src: string,
    p1: string,
    p2: string,
    p3: string
}

const cards: Cardprops[] = [
    {
        title: "Ülj le, dőlj hátra és közben keress pénzt",
        src: "/laptop.png",
        p1: " Az AI automatikusan figyeli és elemzi a piacot helyetted, így nem kell órákat töltened a grafikonok előtt.",
        p2: "Az algoritmusok másodpercek alatt reagálnak a piaci változásokra, kihasználva a legjobb lehetőségeket, mielőtt az emberi kereskedők észrevennék őket.",
        p3: "Az AI nem befolyásolható félelemmel vagy kapzsisággal, mindig a statisztikai adatok és a bevált stratégiák alapján hoz döntéseket."
    },
    {
        title: "Teljesen testreszabható",
        src: "/telefon.png",
        p1: "Beállíthatod, hogy a bot folyamatosan dolgozzon, vagy csak akkor lépjen akcióba, amikor te engedélyezed.",
        p2: "Könnyedén mozgathatod a tőkéd, beállíthatod a kockázati szinteket és szabályozhatod, hogy mikor és mennyit fektessen be a rendszer.",
        p3: "Te határozod meg a stratégiát, az AI pedig pontosan úgy hajtja végre, ahogy szeretnéd."
    },
    {
        title: "Tapasztald meg a modern kereskedés erejét",
        src: "/telefon2.png",
        p1: "Felhasználóbarát felület, amely még kezdők számára is egyszerűvé teszi az indulást.",
        p2: "Valós idejű adatok és átlátható kereskedési jelentések, hogy mindig naprakész legyél.",
        p3: "Professzionális eszközök minden szinten lévő kereskedő számára."
    }
]

const MainCarousel = () => {
    const t = useTranslations('maincarousel');
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? cards.length - 1 : prevIndex - 1)
    }
    const cards = [
        {
            title: t('0.title'),
            p1: t('0.p1'),
            p2: t('0.p2'),
            p3: t('0.p3'),
            src: "/laptop.png",
        },
        {
            title: t('1.title'),
            p1: t('1.p1'),
            p2: t('1.p2'),
            p3: t('1.p3'),
            src: "/telefon.png",
        },
        {
            title: t('2.title'),
            p1: t('2.p1'),
            p2: t('2.p2'),
            p3: t('2.p3'),
            src: "/telefon2.png",
        }
    ];


    return (
        <div>
            <div className='h-full relative  bg-black-100 w-full pb-16 lg:pb-32  pt-16 lg:pt-0'>
                <div className="absolute overflow-visible inset-0 -left-[57vw]  h-[1000px] w-[1000px] bg-blue-800 blur-3xl opacity-20 rounded-full z-1"></div>
                <div className="absolute overflow-visible inset-0  left-[80vw] top-[50vh] h-[1000px] w-[1000px] bg-violet-500 blur-3xl opacity-10 rounded-full z-1"></div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-12 w-full h-full relative ">
                        <div className="hidden lg:block col-span-1" />
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4 px-4 lg:px-0 flex flex-col justify-center items-center  w-full">
                            <h1 className='text-[4.5vw] md:text-5xl text-start text-stone-100 font-semibold '>{cards[currentIndex].title}</h1>
                            <ul className="pl-[4vw] pt-8 space-y-2 ">
                                <li className='text-sm md:text-md text-start flex items-center'>
                                    <span className='w-3 h-3 md:h-6 xl:h-10 rounded-full bg-blue-500 mr-2'></span>
                                    <p className="text-white/80 md:text-lg xl:text-xl">{cards[currentIndex].p1 && cards[currentIndex].p1}</p>
                                </li>
                                <li className='text-sm md:text-md text-start flex items-center'>
                                    <span className='w-3 h-3 md:h-6 xl:h-10 rounded-full bg-red-500 mr-2'></span>
                                    <p className="text-white/80 md:text-lg xl:text-xl">{cards[currentIndex].p2 && cards[currentIndex].p2}</p>
                                </li>
                                <li className='text-sm md:text-md text-start flex items-center'>
                                    <span className='w-3 h-3 md:h-6 xl:h-10 rounded-full bg-yellow-500 mr-2'></span>
                                    <p className="text-white/80 md:text-lg xl:text-xl">{cards[currentIndex].p3 && cards[currentIndex].p3}</p>
                                </li>
                            </ul>

                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-7 py-6 flex justify-center items-center w-full h-full">
                            <Image
                                src={`${cards[currentIndex].src}`}
                                alt="asd"
                                width={1200}
                                height={1200}
                                className=" h-full  max-h-[250px] md:max-h-[350px] lg:max-h-[600px] w-full object-center object-contain z-20"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="flex flex-row gap-6 w-full justify-center pt-14 z-50 relative ">
                    <button onClick={handlePrev}>
                        <GoArrowLeft className={`size-14 lg:size-20 p-3  lg:p-6 border-2 text-white/80 rounded-full hover:bg-blue-950 duration-300`} />
                    </button>
                    <button onClick={handleNext}>
                        <GoArrowRight className={`size-14 lg:size-20  p-3 lg:p-6 border-2 text-white/80 rounded-full hover:bg-blue-950 duration-300`} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainCarousel