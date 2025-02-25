"use client"
import { CardHoverEffectDemo } from '@/components/card/CardHover'
import Footer from '@/components/Footer'
import MobileNavbar from '@/components/mobile/mobile'
import Technologies from '@/components/Technologies'
import TextWithImageOne from '@/components/TextWithImageOne'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { navItems } from "../../../data"

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
      <div className="overflow-hidden">
        <div className="hidden md:block">
          <FloatingNav navItems={navItems} />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
      <Technologies />
      <TextWithImageOne />
      <CardHoverEffectDemo />
      <Footer />
    </div>
  )
}

export default Technology