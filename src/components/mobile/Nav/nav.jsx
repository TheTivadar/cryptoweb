import { motion } from "framer-motion";
import Link from "next/link";
import { perspective, slideIn } from "./anim";
import { footerLinks, links } from "./data";
import styles from "./style.module.css";
import { LanguageSelectorNavMobile } from "@/components/ui/LanguageSelector";
import { useTranslations } from "next-intl";

export default function index({ toggleMenu }) {
  const t = useTranslations('MobilNavLinks')

  const links = [
    {
        title: t('Alegex'),
        href: "/"
    },
    {
        title: t('aitrading'),
        href: "/aitrading"
    },
    {
        title: t('technology'),
        href: "/technology"
    },
    {
        title: t('tiers'),
        href: "/tiers"
    },
    {
        title:t('profitability'),
        href: "/profitability"
    },
    {
        title: t('aboutus'),
        href: "/aboutus"
    },
    {
        title: t('login'),
        href: "/login"
    }
]
  return (
    <div className={styles.nav}>
      <div className={styles.languageSelector}>
        <LanguageSelectorNavMobile />
      </div>
      <div className={styles.navContent}>
        <div className={styles.body}>
          {links.map((link, i) => {
            const { title, href } = link;
            return (
              <div key={`b_${i}`} className={styles.linkContainer}>
                <motion.div
                  href={href}
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Link
                    href={href}
                    onClick={() => {
                      toggleMenu();
                    }}
                  >
                    {title}
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>
        
        <motion.div className={styles.footer}>
          {footerLinks.map((link, i) => {
            const { title, href } = link;
            return (
              <motion.a
                variants={slideIn}
                custom={i}
                href={href}
                initial="initial"
                animate="enter"
                exit="exit"
                key={`f_${i}`}
              >
                {title}
              </motion.a>
            );
          })}
        </motion.div>
      </div>

    </div>
  );
}