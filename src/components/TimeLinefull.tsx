"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {


  const t = useTranslations("timeline");


  const data = [
    {
      title: t('0.title'),
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-base font-normal mb-8">
            {t('0.paragraphs1')}
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
      title: t('1.title'),
      content: (
        <div>
          <p className="text-neutral-200 text-ms md:text-xl font-bold mb-8">{t('1.heading')}</p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          {t('1.paragraphs1')}
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          {t('1.paragraphs2')}
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          {t('1.paragraphs3')}
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
      title: t('2.title'),
      content: (
        <div>
          <p className="text-neutral-200 text-ms md:text-xl font-bold mb-8">{t('2.heading')}</p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
         { t('2.paragraphs1')}
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
            {t('2.paragraphs2')}
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
            {t('2.paragraphs3')}
            </div>
            <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
            {t('2.paragraphs4')}
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
