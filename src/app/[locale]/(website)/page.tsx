"use client";
import DocumentCard from "@/components/card/documentCard";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import { InfiniteSliderBasic } from "@/components/InfinitySlider/InfiniteDliderDemo";
import Szolgaltatas1 from "@/components/main/Szolgaltatas1";
import MainCarousel from "@/components/MainCarousel";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

const Home = () => {

  return (
    <>
      <div className="max-w-7xl w-full mx-auto">
        <Hero />
      </div>
      <Szolgaltatas1 />
      <InfiniteSliderBasic />
      <MainCarousel />
      <Experience />
      <ScrollReveal />
      <DocumentCard />
      <Contact />
    </>
  );
};

export default Home;
