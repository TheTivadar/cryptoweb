"use client"
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { InfiniteSliderBasic } from '@/components/InfinitySlider/InfiniteDliderDemo'
import Szolgaltatas1 from '@/components/main/Szolgaltatas1'
import MainCarousel from '@/components/MainCarousel'
import ScrollRevealComp from '@/components/ScrollReveal/ScrollReveal'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import React, { useEffect } from 'react'
import { navItems } from "../../../data";
import Lenis from 'lenis'
import CardsWithHero from '@/components/card/CardsWithHero'
import TextWithImage from '@/components/TextWithImage'

const AiTrading = () => {
    useEffect(() => {
        const lenis = new Lenis()
    
        function raf(time: any) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      }, [])
  return (
    <div className="max-w-screen overflow-hidden">
        <FloatingNav navItems={navItems} />
        <TextWithImage />
        <CardsWithHero />
        <Footer />
    </div>
  )
}

export default AiTrading