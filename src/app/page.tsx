"use client";
import Contact from "@/components/Contact";
import DocumentCard from "@/components/card/documentCard";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { InfiniteSliderBasic } from "@/components/InfinitySlider/InfiniteDliderDemo";
import Szolgaltatas1 from "@/components/main/Szolgaltatas1";
import MainCarousel from "@/components/MainCarousel";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Lenis from "lenis";
import { useEffect } from "react";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import MobileNavbar from "@/components/mobile/mobile";
import { navItems } from "../../data";

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
      <div className="overflow-hidden">
        <div className="hidden md:block">
          <FloatingNav navItems={navItems} />
        </div>
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
      <div className="max-w-7xl w-full mx-auto">
        <Hero />
      </div>
      <Szolgaltatas1 data={data1} />
      <InfiniteSliderBasic />
      <MainCarousel />
      <Experience />
      <ScrollReveal />
      <DocumentCard />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

const data1 = [
  {
    id: 1,
    title: "Erőteljes Feldolgozás",
    description: "Az ALEGEX nagy teljesítményű algoritmusai villámgyorsan elemzik a pénzügyi piacokat, hogy releváns és időben pontos információkat nyújtsanak a kereskedők számára.",
  },
  {
    id: 2,
    title: "Gépi Tanulás",
    description: "Fejlett mesterséges intelligencia modellek tanulnak a piaci trendekből, folyamatosan fejlődve és alkalmazkodva a változó körülményekhez a pontosabb előrejelzések érdekében.",
  },
  {
    id: 3,
    title: "Előrejelző Elemzés",
    description: "Az ALEGEX prediktív analitikája valós idejű adatokat és történelmi mintázatokat kombinál, hogy megbízható piaci előrejelzéseket biztosítson a felhasználóknak.",
  },
  {
    id: 4,
    title: "Bizonyított Teljesítmény",
    description: "Az ALEGEX kereskedési algoritmusai éles környezetben tesztelve és bizonyítottan hatékonyan működnek, segítve a felhasználókat a profit maximalizálásában.",
  },
]