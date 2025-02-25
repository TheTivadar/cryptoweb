"use client"
import CardsWithHero from '@/components/card/CardsWithHero'
import Commissions from '@/components/commissions'
import Footer from '@/components/Footer'
import MobileNavbar from '@/components/mobile/mobile'
import ParallaxText from '@/components/parralaxtext'
import ProfibilityHero from '@/components/ProfibilityHero'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { profibilityCardData } from '@/data/data'
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
            <div className="overflow-hidden">
              <div className="hidden md:block">
                <FloatingNav navItems={navItems} />
              </div>
              <div className="md:hidden">
                <MobileNavbar />
              </div>
            </div>
        <ProfibilityHero />
        <ParallaxText />
        <Commissions />
        <CardsWithHero data={profibilityCardData}/>
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