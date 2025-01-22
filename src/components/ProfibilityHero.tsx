'use client';
import Image from 'next/image';
import { TextGenerateEffect } from './ui/TextGenerateEffect';


const ProfibilityHero = () => {
  return (
    <div className='bg-black-100  relative h-full pt-44'>
      
      <div className="w-full  absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="absolute overflow-visible inset-0  left-[0] top-[50vh] h-[1000px] w-[1000px] bg-violet-500 blur-3xl opacity-10 rounded-full z-1"></div>
      <div className=' flex flex-col lg:flex-row order z-10 relative order'>
        <div className='flex-1 flex justify-end items-end lg:order-1 order-2'>
          <Image
            src={"/robotjobb.png"}
            alt='robot'
            width={1000}
            height={1000}
            priority
            className='h-full w-full object-center object-contain'
          />

        </div>
        <div className='flex-1 lg:order-2 order-1'>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mx-auto lg:pr-14">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Kriptovaluta Befektetés és Kereskedelem AI-al
          </p>
          <TextGenerateEffect
            words="AI-alapú kereskedés, amely új dimenziót ad a befektetéseknek"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Üdvözlünk az Alegex világában! Mi az AI-alapú kriptovaluta kereskedés úttörői vagyunk, és célunk, hogy a legmodernebb technológiával segítsük befektetéseidet.
          </p>

        </div>
        </div>
      </div>

    </div>
  )
}
export default ProfibilityHero

