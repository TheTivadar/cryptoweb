"use client"
import { AnimatePresence, motion } from "framer-motion";
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
        p1: "Automatizált AI kereskedési megoldásaink folyamatosan dolgoznak, még akkor is, amikor te pihensz.",
        p2: "Kiemelkedő pontosságú elemzés és gyors döntéshozatal a piaci trendek kiaknázásához.",
        p3: "Élvezd a passzív jövedelem előnyeit anélkül, hogy mély szakértelmet igényelne."
    },
    {
        title: "Teljesen testreszabható",
        src: "/telefon.png",
        p1: "Válassz 3 kereskedési mód közül: konzervatív, kiegyensúlyozott és agresszív stratégiák.",
        p2: "Állítsd be személyes kockázati szintedet, kereskedési párokat és célokat.",
        p3: "Rugalmas rendszerünk alkalmazkodik a változó piaci feltételekhez és a te igényeidhez."
    },
    {
        title: "Tapasztald meg a modern kereskedés erejét",
        src: "/telefon2.png",
        p1: "Felhasználóbarát felület, amely még kezdők számára is egyszerűvé teszi az indulást.",
        p2: "Valós idejű adatok és átlátható kereskedési jelentések, hogy mindig képben legyél.",
        p3: "Professzionális eszközök minden szinten lévő kereskedő számára."
    }
]

const MainCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? cards.length - 1 : prevIndex - 1)
    }

    return (
        <div>
            <div className='h-full relative  bg-black-100 w-full pb-32'>
                <div className="absolute overflow-visible inset-0 -left-[57vw]  h-[1000px] w-[1000px] bg-blue-800 blur-3xl opacity-20 rounded-full z-1"></div>
                <div className="absolute overflow-visible inset-0  left-[80vw] top-[50vh] h-[1000px] w-[1000px] bg-violet-500 blur-3xl opacity-10 rounded-full z-1"></div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-12 w-full h-full relative">
                        <div className="col-span-1" />
                        <div className="col-span-4  flex flex-col justify-center  w-full">
                            <h1 className='text-[4.5vw] md:text-5xl text-start text-stone-100 font-semibold '>{cards[currentIndex].title}</h1>
                            <ul className="pl-[4vw] pt-8 space-y-2">
                                <li className='text-md text-start flex items-center'>
                                    <span className='w-3 h-3 rounded-full bg-blue-500 mr-2'></span>
                                    <p className="text-white/80">{cards[currentIndex].p1 && cards[currentIndex].p1}</p>
                                </li>
                                <li className='text-md text-start flex items-center'>
                                    <span className='w-3 h-3 rounded-full bg-red-500 mr-2'></span>
                                    <p className="text-white/80">{cards[currentIndex].p2 && cards[currentIndex].p2}</p>
                                </li>
                                <li className='text-md text-start flex items-center'>
                                    <span className='w-3 h-3 rounded-full bg-violet-500 mr-2'></span>
                                    <p className="text-white/80">{cards[currentIndex].p1 && cards[currentIndex].p1}</p>
                                </li>
                            </ul>

                        </div>
                        <div className="col-span-7 py-6">

                            <Image
                                src={`${cards[currentIndex].src}`}
                                alt="asd"
                                width={1200}
                                height={1200}
                                className=" h-full max-h-[600px] w-full object-center object-contain z-20"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="flex flex-row gap-2 lg:gap-6 w-full justify-center pt-14">
                    <button onClick={handlePrev}>
                        <GoArrowLeft className={`size-6 lg:size-20 p-6 border-2 text-white/80 rounded-full hover:bg-blue-950 duration-300`} />
                    </button>
                    <button onClick={handleNext}>
                        <GoArrowRight className={`size-6 lg:size-20 p-6 border-2 text-white/80 rounded-full hover:bg-blue-950 duration-300`} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainCarousel