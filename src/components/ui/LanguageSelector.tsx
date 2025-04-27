"use client"
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { locales } from "@/data/locales";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useState } from "react";
import { useLocale } from 'next-intl';
import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import ReactCountryFlag from "react-country-flag";

export function LanguageSelector() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (locale: string) => {
        router.replace(
            pathname,
            { locale }
        );
    };
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="size-8 md:size-14 rounded-full text-base">{locale.toLocaleUpperCase()}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-14 ">
                {locales.map((locale) => (
                    <DropdownMenuItem
                        key={locale.id}
                        onClick={() => handleLanguageChange(locale.language)}
                    >
                        {locale.language.toUpperCase()}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function LanguageSelectorNav() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (locale: string) => {
        router.replace(
            pathname,
            { locale }
        );
    };
    const countryCodes = {
        en: "GB",
        fr: "FR",
        de: "DE",
        es: "ES",
        hu: "HU",
        it: "IT",
    };
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <button className="h-full text-base flex py-[14px] rounded-[10px] group  text-white items-center gap-2 px-3  bg-white/10 border-2 border-white/[0.05] backdrop-blur-sm">
                    <ReactCountryFlag
                        countryCode={countryCodes[locale as keyof typeof countryCodes]}
                        svg
                        style={{
                            width: '1.2em',
                            height: '1.2em',
                        }}
                    />
                    {locale.toLocaleUpperCase()}<IoIosArrowDown className="group-hover:rotate-180 duration-300" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-14 bg-white/10 rounded-[10px] backdrop-blur-sm shadow-lg flex flex-col items-center justify-center">
                {locales.map((locale) => (
                    <DropdownMenuItem
                        key={locale.id}
                        onClick={() => handleLanguageChange(locale.language)}
                        className="flex gap-2 items-center w-full justify-center"
                    >
                        <ReactCountryFlag 
                            countryCode={countryCodes[locale.language as keyof typeof countryCodes]}
                            svg
                            style={{
                                width: '1.2em',
                                height: '1.2em',
                            }}
                        />
                        {locale.language.toUpperCase()}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

