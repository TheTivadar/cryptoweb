
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton, { MagicButton2 } from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" md:pt-32 max-h-screen pb-4">
      <div >
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-full overflow-hidden"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-1/2 overflow-hidden "
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw] hidden md:block overflow-hidden" fill="blue" />
      </div>
      <div
        className="h-full w-full bg-black-100 bg-grid-white/[0.01]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex flex-row justify-center relative mt-20 z-10 h-full">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Kriptovaluta Befektetés és Kereskedelem AI-al
          </p>
          <TextGenerateEffect
            words="AI-alapú kereskedés, amely új dimenziót ad a befektetéseknek"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white/80">
            Üdvözlünk az Alegex világában! Mi az AI-alapú kriptovaluta kereskedés úttörői vagyunk, és célunk, hogy a legmodernebb technológiával segítsük befektetéseidet.
          </p>
          <div className="flex flex-row justify-center space-x-6 w-full my-2 md:my-8">
            <Link href="#about" className="hover:scale-105 duration-300">
              <MagicButton
                title="További információ!"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
            <Link href="#about" className="hover:scale-105 duration-300">
              <MagicButton2
                title="Kezdjük el"
                icon={<FaLocationArrow />}
                position="right"
                
              />
            </Link>
          </div>
        </div>
        {/* <div className="w-full h-full  ">
          <Image
            src="/robotnagy.png"
            alt="robot"
            width={1000}
            height={1000}
            className="w-full h-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
