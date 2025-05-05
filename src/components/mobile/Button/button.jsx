"use client"
import { motion } from 'framer-motion';
import styles from './style.module.css';
import { useTranslations } from 'next-intl';

export default function Button({isActive, toggleMenu}) {

    const t = useTranslations('MobilNavMenuClose')
  return (
    <div className={styles.button}>
        <motion.div 
            className={styles.slider}
            animate={{top: isActive ? "-100%" : "0%"}}
            transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1]}}
        >
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label={t('open')}/>
            </div>
            <div 
                className={styles.el}
                onClick={() => {toggleMenu()}}
            >
                <PerspectiveText label={t('close')} />
            </div>
        </motion.div>
    </div>
  )
}

function PerspectiveText({label}) {
    return (    
        <div className={styles.perspectiveText} >
            <p className={styles.text}>{label}</p>
            <p className={styles.text}>{label}</p>
        </div>
    )
}