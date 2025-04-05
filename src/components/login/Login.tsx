"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"
import { FaGoogle } from "react-icons/fa";

export default function Login() {
    return (
        <div className="relative h-full w-full">
            <Image
                alt=""
                src="/ai.jpg"
                width={1000}
                height={1000}
                className="absolute inset-0 z-0 h-full w-full blur-sm translate-y-[-1] object-center object-cover"
            />

            <div className="relative flex justify-center items-center min-h-screen z-10 ">
                <div className='grid grid-cols-12 w-full md:max-w-[90%] xl:max-w-[60%] px-4 md:px-0'>
                    <div className="col-span-12 md:col-span-6 bg-black-100 w-full rounded-xl md:rounded-none md:rounded-l-2xl pt-10 pb-20 sm:py-20 pl-4">
                        <div className=" text-3xl text-center font-[900] text-white py-6">
                            Üdvözlünk 👋!
                        </div>
                            <div className='flex justify-start pt-10'>
                                <button className="bg-white mx-auto py-2 px-4 rounded-lg text-black-100 w-[70%] md:w-[50%] items-center flex justify-center" onClick={() => signIn("google", { redirectTo: "/usercreate" })}>
                                   <FaGoogle className="mr-4 "/>  Bejelentkezés
                                </button>
                            </div>
                    </div>
                    <div className='hidden md:block md:col-span-6'>
                        <Image
                            src={"/aistock.webp"}
                            alt='iamge'
                            height={1000}
                            width={1000}
                            className='object-cover object-center h-full w-full rounded-r-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}