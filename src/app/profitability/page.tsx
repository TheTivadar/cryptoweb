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
import ProfibilityHero from '@/components/ProfibilityHero'
import SimpleText from '@/components/SimpleText'

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
        <ProfibilityHero />
        <Szolgaltatas1 data={data} />
        <CardsWithHero />
        <SimpleText />
        <Footer />
    </div>
  )
}

export default AiTrading


const data = [
  {
      id: 1,
      title: "Powerful Processing",
      description: "ALGOSONE crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
  },
  {
      id: 2,
      title: "Machine Learning",
      description: "ALGOSONE crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
  },
  {
      id: 3,
      title: "Predictive Analysis",
      description: "ALGOSONE crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
  },
  {
      id: 4,
      title: "Proven Performance ",
      description: "ALGOSONE crunches economy-wide, macro news plus company, currency, and commodity-specific, micro news, accessing global information from both traditional and alternative data sources.",
  },
]