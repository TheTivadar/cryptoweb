"use client";

import { navItems } from "../../data";

import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { InfiniteSlider2, InfiniteSliderBasic } from "@/components/InfinitySlider/InfiniteDliderDemo";
import Szolgaltatas1 from "@/components/main/Szolgaltatas1";
import MainCarousel from "@/components/MainCarousel";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { useEffect } from "react";
import Lenis from "lenis"
import DocumentCard from "@/components/card/documentCard";
const Home = () => {
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
        <div className="max-w-7xl w-full mx-auto">
        <Hero />
        </div>
        <InfiniteSliderBasic />
        <Szolgaltatas1 data={data1}/>
        <MainCarousel />
        <Experience />
        <ScrollReveal />
        <DocumentCard />
        {/*<Contact />*/}
        <Footer />
    </div>
  );
};

export default Home;

const data1 = [
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