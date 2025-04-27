"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import { useState } from "react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "./LanguageSelector";


export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const t = useTranslations('navbar');
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState<string | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {

    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const navItems = [
    { href: '/', key: 'home' },
    { href: '/aitrading', key: 'aiTrading' },
    { href: '/technology', key: 'technology' },
    { href: '/tiers', key: 'tiers' },
    { href: '/profitability', key: 'profitability' },
    { href: '/aboutus', key: 'aboutUs' }
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(

          "flex  max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-6",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              "relative items-center hidden md:flex space-x-1 text-neutral-50 hover:text-neutral-500 duration-200 font-semibold"
            )}
          >
            <span className="text-sm !cursor-pointer">{t(item.key)}</span>
          </Link>
        ))}
        <div className="hidden md:block">
          {/* <Menu setActive={setActive} >
          <MenuItem setActive={setActive} active={active} item="Rólunk">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="/dashboard.jpg"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="/dashboard.jpg"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="/dashboard.jpg"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="/dashboard.jpg"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="/dashboard.jpg"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="/dashboard.jpg"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="/dashboard.jpg"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="/dashboard.jpg"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
        </Menu> */}
        </div>
        <Link
          href={"/dashboard"}
          className={cn(
            "relative  items-center  flex space-x-1 text-neutral-50  hover:text-neutral-500 duration-200 font-semibold"
          )}
        >
          <span className=" text-sm !cursor-pointer">{t('login')}</span>
        </Link>
        <LanguageSelector />
      </motion.div>
    </AnimatePresence>
  );
};
