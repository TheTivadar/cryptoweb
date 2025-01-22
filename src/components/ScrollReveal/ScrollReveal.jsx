'use client';
import styles from './style.module.css'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Image from 'next/image';


const ScrollRevealComp = () => {
  return (
    <div className='bg-black-100  relative py-20'>
      
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>
      <div className="absolute overflow-visible inset-0  left-[0] top-[50vh] h-[1000px] w-[1000px] bg-violet-500 blur-3xl opacity-10 rounded-full z-1"></div>
      <div className='max-w-7xl mx-auto flex flex-row order z-10 relative'>
        <div className='flex-1'>
          <Image
            src={"/robotoldalt.png"}
            alt='robot'
            width={1000}
            height={1000}
            priority
            className='h-full w-full object-center object-contain'
          />

        </div>
        <div className='flex-1'>
          <h1>Technológia</h1>
          <p>Itt lesz egy hosszabb szöveg, hogyan müködik a bot</p>
        </div>
      </div>

    </div>
  )
}
export default ScrollRevealComp

