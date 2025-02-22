import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-base font-normal mb-8">
            2024 januárjában kezdtem el fejleszteni az algoritmust, amely a kereskedéseket kezeli. A kezdeti nehézségeket leküzdve sikerült egy magas nyerési eséllyel rendelkező AI-t létrehozni, amely folyamatosan fejlődik.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/aboutUs.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 Nyara",
      content: (
        <div>
          <p className="text-neutral-200 text-ms md:text-xl font-bold mb-8">Az Első Komoly Áttörés</p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            2024 nyarán értük el az első jelentős áttörést, amikor a fejlesztett algoritmus hosszabb ideig sikeresen kereskedett pozitív PnL-lel valós piaci környezetben is.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Az addigi teszteléseken túl mostmár képes volt folyamatosan profitálni, így megerősítve a rendszer működőképességét és megbízhatóságát valós piaci környezetben is.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Ezt követően indult el a teljes automatizálás fejlesztése, melynek célja az volt, hogy a kereskedési botot összekapcsoljuk egy felhasználói felülettel, lehetővé téve a könnyed és kényelmes használatot.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/aboutus2.avif"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
    {
      title: "2025 Március",
      content: (
        <div>
           <p className="text-neutral-200 text-ms md:text-xl font-bold mb-8">Beta Verzió Kiadása és Új Fejlesztések</p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
          2025 márciusában elérhetővé vált az oldal Beta verziója, amely lehetőséget biztosít a felhasználók számára, hogy pénzt fektessenek be, valamint tranzakciókat indítsanak a Solana blockchain-en keresztül.
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ A felhasználók most már saját tokeneket is létrehozhatnak.
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Felhasználóknak lehetőségük van önállóan is kereskedni.
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
              ✅ Ezen kívül elkezdődött a meme coin rész intenzív fejlesztése is, hogy még több lehetőséget kínáljunk a felhasználóknak a dinamikusan változó kriptopiacon.
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/release.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-screen md:w-full pt-10 md:pt-20lg:pt-40 pb-10 bg-black-100 overflow-hidden md:pr-10">
      {/* <div className="absolute  left-[100%] transform -translate-x-1/2 -translate-y-2/3 right h-[600px] w-[1000px] bg-blue-950 blur-3xl opacity-40 rounded-full z-0"></div>
      <div className="absolute top-[100%]  transform -translate-x-1/2 -translate-y-1/2 right h-[600px] w-[1000px] bg-violet-500 blur-[300px] opacity-40 rounded-full z-0"></div> */}
      <Timeline data={data} />
    </div>
  );
}
