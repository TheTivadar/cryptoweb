"use client"
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Spotlight } from "./ui/Spotlight";

interface Cardprops {
    title: string,
    src: string,
    name: string,
    work: string,
    workplace: string
}

const cards: Cardprops[] = [
    {
        title: "Nagyon elégedettek vagyunk az Gatium.",
        src: "/laptop.png",
        name: "Joseph Clarck",
        work: "Társalapító",
        workplace: "Tech Innovations Kft."
    },
    {
        title: "Az Gatium segített jelentősen növelni a vállalkozásunkat.",
        src: "/telefon.png",
        name: "Sarah Green",
        work: "Marketing igazgató",
        workplace: "Creative Solutions Kft."
    },
    {
        title: "Egy modern, felhasználóbarát weboldalt készített számunkra, amely tökéletesen tükrözi a márkánkat. A professzionalizmusuk páratlan.",
        src: "/telefon2.png",
        name: "Michael Dunlop",
        work: "Ügyvezető igazgató",
        workplace: "Innovative Designs Kft."
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
                            <div className="col-span-1"/>
                        <div className="col-span-4  flex flex-col justify-center  w-full">
                            <h1 className='text-[4.5vw] md:text-5xl text-start text-stone-100 font-semibold '>{cards[currentIndex].title}</h1>
                            <ul className="pl-[4vw] pt-8">
                                <li className='text-md text-start'>High consistent profit</li>
                                <li className='text-md text-start'>High consistent profit</li>
                                <li className='text-md text-start'>High consistent profit</li>
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
                        <GoArrowLeft className={`size-6 lg:size-20 p-6 border-2 rounded-full hover:bg-blue-950 duration-300`} />
                    </button>
                    <button onClick={handleNext}>
                        <GoArrowRight className={`size-6 lg:size-20 p-6 border-2 rounded-full hover:bg-blue-950 duration-300`} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MainCarousel