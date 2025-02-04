"use client"
import CardsWithHero from '@/components/card/CardsWithHero'
import Footer from '@/components/Footer'
import TextWithImage from '@/components/TextWithImage'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { navItems } from "../../../data"

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