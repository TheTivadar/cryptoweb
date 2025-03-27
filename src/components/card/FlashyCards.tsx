"use client"
import Image from "next/image";
import { botCardsDashboard } from "../../../data";
import { Button } from "../ui/MovingBorders";

const FlashyCards = () => {
  return (
    <div className="pb-10 lg:pb-20">
      <div className=" w-full mx-auto ">
        <div className="w-full grid md:grid-cols-6 grid-cols-1 gap-2 2xl:gap-10 ">
          {botCardsDashboard.map((card) => (
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
              className="flex-1 text-white border-slate-800  "
            >
              <div className="flex lg:flex-row flex-col  p-3 lg: py-6  lg:p-4 gap-2 md:gap-1 lg:gap-2 h-full ">
                <div className="lg:ms-5 flex flex-col justify-between h-full">
                  <div className="flex flex-row w-full justify-between gap-2">
                    <div className="flex flex-col justify-between w-full items-start">
                      <h1 className="text-start text-3xl font-bold text-white pb-10">
                        {card.title}
                      </h1>
                      <ul>
                        {card.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start py-5 border-t border-n-6"
                          >
                            <Image src={"/technologies/check.svg"} width={24} height={24} alt="Check" />
                            <p className="body-2 ml-4 text-white/80 text-start">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <p className="text-start text-white-100 mt-3 font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashyCards;
