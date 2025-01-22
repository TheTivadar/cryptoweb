"use client"
import CardsWithHero from '@/components/card/CardsWithHero'
import Footer from '@/components/Footer'
import Technologies from '@/components/Technologies'
import TextWithImageOne from '@/components/TextWithImageOne'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { navItems } from "../../../data"
import { CardHoverEffectDemo } from '@/components/card/CardHover'

const Technology = () => {
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
        <Technologies />
        <TextWithImageOne />
        <CardHoverEffectDemo />
        <Footer />
    </div>
  )
}

export default Technology