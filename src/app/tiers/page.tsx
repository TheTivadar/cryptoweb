"use client"
import BigCards from '@/components/card/BigCards'
import Footer from '@/components/Footer'
import TextWithImageOne from '@/components/TextWithImageOne'
import TiersHero from '@/components/TiersHero'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { navItems } from "../../../data"
import MobileNavbar from '@/components/mobile/mobile'
import TextWithImageOneTiers from '@/components/TextWithImageOnetiers'

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
      <TiersHero />
      <BigCards />
      <TextWithImageOneTiers />
      <Footer />
    </div>
  )
}

export default Technology