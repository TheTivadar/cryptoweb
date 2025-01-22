"use client"
import Footer from '@/components/Footer'
import { TimelineDemo } from '@/components/TimeLinefull'
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
      <TimelineDemo />
      <Footer />
    </div>
  )
}

export default AiTrading