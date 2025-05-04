"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { FaGoogle } from "react-icons/fa";
import { BackgroundGradient } from "../ui/background-gradient";
import LetterGlitch from "../ui/letter-glitch";
import { Separator } from "../ui/separator";
import { useTranslations } from "next-intl";

export default function Login() {
    const t = useTranslations('loginPage')
    return (
        <div className="relative h-full  bg-black-100 flex justify-center items-center min-h-[85vh]">
            <div className="absolute inset-0 -top-32">
                <LetterGlitch
                    glitchSpeed={100}
                    centerVignette={true}
                    outerVignette={false}
                    smooth={true}
                    glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
                />
            </div>
            <div className="max-w-sm px-4 md:px-0">
                <BackgroundGradient className="rounded-[22px] min-w-fit md:min-w-[350px] p-4 sm:p-10 bg-zinc-900 flex  flex-col">
                    <Image
                        src={`/logowhite.png`}
                        alt="jordans"
                        height="100"
                        width="100"
                        className="object-contain mx-auto"
                    />
                    <p className="text-base sm:text-2xl font-semibold mt-4 mb-2 text-neutral-200 text-center">
                        {t('title')}
                    </p>
                    <Separator className="h-[2px] bg-white/30 mt-5 rounded-full" />
                    <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200 ">
                        {t('loginTitle')}
                    </p>
                    <button className="bg-purple hover:bg-purple/80 duration-300  mr-auto py-2 px-4  my-2 rounded-[10px] text-black-100 items-center flex justify-start " onClick={() => signIn("google", { redirectTo: "/usercreate" })}>
                        <FaGoogle className="mr-4 " />   {t('loginDescription')}
                    </button>
                    <Separator className="h-[2px] bg-white/30 mt-5 rounded-full" />
                    <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200 ">
                        {t('registerTitle')}
                    </p>
                    <button className="bg-indigo-300 hover:bg-indigo-300/80 duration-300 mr-auto py-2 px-4 rounded-[10px] my-2 text-black-100  items-center flex justify-center" onClick={() => signIn("google", { redirectTo: "/usercreate" })}>
                        <FaGoogle className="mr-4 " />  {t('registerDescription')}
                    </button>
                    <p className="text-xs underline pt-4 cursor-pointer">  {t('condition')}</p>

                </BackgroundGradient>
            </div>
        </div>

    )
}