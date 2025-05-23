import React from "react";

import { workExperience } from "../../data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Experience = () => {
  const t = useTranslations("workexperience");
  const t2 = useTranslations("security_title");
  const workExperience = [
    {
      id: 1,
      title: t("0.title"),
      desc: t("0.desc"),
      thumbnail: "/exp1.svg",
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: t("1.title"),
      desc: t("1.desc"),
      thumbnail: "/exp2.svg",
      className: "md:col-span-2",
    },
    {
      id: 3,
      title: t("2.title"),
      desc: t("2.desc"),
      thumbnail: "/exp3.svg",
      className: "md:col-span-2",
    },
    {
      id: 4,
      title: t("3.title"),
      desc: t("3.desc"),
      thumbnail: "/exp4.svg",
      className: "md:col-span-2",
    },
  ];
  return (
    <div className="bg-black-100 pb-10 lg:pb-20">
      <div className=" w-full max-w-7xl mx-auto ">
        <h1 className="heading text-white">
          {t2('line1')} <span className="text-purple">{t2('line2')} </span> {t2('line3')}
        </h1>
        <div className="w-full mt-12 grid md:grid-cols-4 grid-cols-1 gap-10 px-2">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <Image
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  width={400}
                  height={400}
                  className="lg:w-32 md:w-20 w-16 hidden lg:block"
                />
                <div className="lg:ms-5">
                  <div className="flex flex-row w-full justify-between">
                    <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                      {card.title}
                    </h1>
                    <Image
                      src={card.thumbnail}
                      alt={card.thumbnail}
                      width={400}
                      height={400}
                      className="lg:w-32 md:w-20 w-16 lg:hidden"
                    />
                  </div>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
