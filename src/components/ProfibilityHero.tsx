'use client';
import Image from 'next/image';
import { TextGenerateEffect } from './ui/TextGenerateEffect';


const ProfibilityHero = () => {
  return (
    <div className='bg-black-100'>
      <div className=' max-w-[1800px] w-full mx-auto  relative h-full pt-20 md:pt-44'>
        <div className=" absolute left-0 -bottom-72 min-h-96">
          <Image
            width={600}
            height={600}
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 "
          />
        </div>
        <div className="absolute overflow-visible inset-0  left-[0] top-[50vh] h-[1000px] w-[1000px] bg-violet-500 blur-3xl opacity-10 rounded-full z-1"></div>
        <div className=' flex flex-col lg:flex-row order z-10 relative order'>
          <div className='flex-1 flex justify-end items-end lg:order-1 order-2 '>
            <Image
              src={"/robotjobb.png"}
              alt='robot'
              width={1000}
              height={1000}
              priority
              className='h-full w-full object-bottom object-contain '
            />
          </div>
          <div className='flex-1 lg:order-2 order-1 px-2'>
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mx-auto lg:pr-14">
              <TextGenerateEffect
                words="HOZD KI A MAXIMUMOT A BEFEKTETÉSEDBŐL"
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
              />
              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white/80">
                Tőkédet bármikor kiveheted.Profitálj intelligens kereskedési megoldásainkkal! Minnél nagyobb a befektetett tőke, annál alacsonyabb díjak várnak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProfibilityHero

