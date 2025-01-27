"use client";

import { navItems } from "../../data";

import DocumentCard from "@/components/card/documentCard";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { InfiniteSliderBasic } from "@/components/InfinitySlider/InfiniteDliderDemo";
import Szolgaltatas1 from "@/components/main/Szolgaltatas1";
import MainCarousel from "@/components/MainCarousel";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Lenis from "lenis";
import { useEffect } from "react";
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
      title: "Erőteljes Feldolgozás",
      description: "Az ALEGEX az egész gazdaságot átfogó makrohírek mellett a vállalati, valutákkal és árucikkekkel kapcsolatos, specifikus mikrohíreket is feldolgozza, hagyományos és alternatív adatforrásokat egyaránt elérve világszerte.",
  },
  {
      id: 2,
      title: "Gépi Tanulás",
      description: "Az ALEGEX az egész gazdaságot átfogó makrohírek mellett a vállalati, valutákkal és árucikkekkel kapcsolatos, specifikus mikrohíreket is feldolgozza, hagyományos és alternatív adatforrásokat egyaránt elérve világszerte.",
  },
  {
      id: 3,
      title: "Előrejelző Elemzés",
      description: "Az ALEGEX az egész gazdaságot átfogó makrohírek mellett a vállalati, valutákkal és árucikkekkel kapcsolatos, specifikus mikrohíreket is feldolgozza, hagyományos és alternatív adatforrásokat egyaránt elérve világszerte.",
  },
  {
      id: 4,
      title: "Bizonyított Teljesítmény",
      description: "Az ALEGEX feldolgozza az egész gazdaságot érintő makrohíreket, valamint a vállalati, valutákhoz és árucikkekhez kapcsolódó mikrohíreket is. Hagyományos és alternatív adatforrásokból szerzi be a globális információkat, hogy pontos és megbízható eredményeket nyújtson.",
  },
]