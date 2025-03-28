
"use client";


import { getLocalStorage, setLocalStorage } from "@/lib/storage-helper";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

// CookieBanner component that displays a banner for cookie consent.
export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(
        null as boolean | null
    );
    const [isLoading, setIsLoading] = useState(true);

    // Retrieve cookie consent status from local storage on component mount
    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);
        setCookieConsent(storedCookieConsent);
        setIsLoading(false);
    }, []);

    // Update local storage and Google Analytics consent status when cookieConsent changes
    useEffect(() => {
        if (cookieConsent !== null) {
            setLocalStorage("cookie_consent", cookieConsent);
        }

        const newValue = cookieConsent ? "granted" : "denied";

        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: newValue,
            });
        }
    }, [cookieConsent]);

    // Do not render the banner if loading or consent is already given
    if (isLoading || cookieConsent !== null) {
        return null;
    }

    return (
        <div className={`fixed inset-0 bg-white   m-auto max-w-[350px] h-min   z-50 rounded-[30px] shadow-black/40 shadow-2xl ${cookieConsent == null ? '' : 'hidden'}`}>
            <div className="flex flex-col justify-center items-center">
                        <Image 
                        src={"/cookie.jpg"}
                        alt="Cookie"
                        width={400}
                        height={400}
                        className="max-h-32 w-min m-6"
                        />
                        <h1 className="text-lg md:text-2xl font-bold text-black/90 ">Sütik!</h1>
                        <p className="text-xs md:text-base text-black/80 text-center pb-2 px-4 mt-2">Weboldalunk cookie-kat használ, hogy rögzítsék az Ön által </p>
                        <p className="text-xs md:text-base text-black/80 underline flex flex-row items-center pb-2 px-4 mt-2">További információk!<span className="underline-offset-0 pl-2"><FaArrowRight /></span></p>
                        <div className="bg-gray-300 w-full h-[1px] mt-4"/>
                    <div className="flex flex-row w-full justify-between rounded-b-[30px] overflow-hidden">
                        <button className="  w-full bg-white text-black p-5 text-sm md:text-base " onClick={() => setCookieConsent(false)}>
                            Elutasítás
                        </button>
                        <button className="w-full bg-black text-white text-sm md:text-base" onClick={() => setCookieConsent(true)}>
                            Elfogadás
                        </button>
                    </div>
            </div>
        </div>
    );
}
