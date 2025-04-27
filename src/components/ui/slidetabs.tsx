"use client"
import { usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import Link from "next/link";
import { Dispatch, SetStateAction, useRef, useState } from "react";


export const SlideTabs = () => {

    const pathName = usePathname();
    const t = useTranslations('navbar');
    const navItems = [
        { href: '/', key: 'home' },
        { href: '/aitrading', key: 'aiTrading' },
        { href: '/technology', key: 'technology' },
        { href: '/tiers', key: 'tiers' },
        { href: '/profitability', key: 'profitability' },
        { href: '/aboutus', key: 'aboutUs' }
    ];
    const [position, setPosition] = useState<Position>({
        left: 0,
        width: 0,
        opacity: 0,
    });
    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit rounded-[10px] border-2 border-white/[0.05] bg-white/10 p-2 backdrop-blur-sm shadow-lg"
        >
            {navItems.map((item) => (
                <Link
                    key={item.key}
                    href={item.href}
                >
                    <Tab setPosition={setPosition} active={item.href === pathName}>{t(item.key)}</Tab>
                </Link>
            ))}

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({
    children,
    setPosition,
    active,
}: {
    children: string;
    setPosition: Dispatch<SetStateAction<Position>>;
    active:boolean
}) => {
    const ref = useRef<null | HTMLLIElement>(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className={`relative z-10 block cursor-pointer px-4 py-1.5  uppercase  whitespace-nowrap  md:px-2 xl:px-5 md:py-3 text-xs xl:text-sm ${active ? "underline underline-offset-4 decoration-2 decoration-purple text-purple": "text-white"}` }
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }: { position: Position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-7 rounded-[10px] bg-white/[0.15] md:h-[45px]"
        />
    );
};

type Position = {
    left: number;
    width: number;
    opacity: number;
};