'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LanguageSelectorNavMobile } from '../ui/LanguageSelector';
import Button from './Button/button';
import Nav from './Nav/nav';
import styles from './style.module.css';

const menu = {
    open: {
        width: "480px",
        height: "800px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
}

export default function MobileNavbar() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = ""; 
        }
        return () => {
            document.body.style.overflow = ""; 
        };
    }, [isActive]);
    return (
        <div className={styles.header}>
            <motion.div
                className={styles.menu}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav toggleMenu={() => { setIsActive(!isActive) }} />}
                </AnimatePresence>
            </motion.div>
           
            <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
        </div>
    )
}