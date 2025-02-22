import { motion } from 'framer-motion';
import Link from 'next/link';
import { perspective, slideIn } from "./anim";
import { footerLinks, links } from './data';
import styles from './style.module.css';

export default function index({toggleMenu}) {
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    links.map((link, i) => {
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
                                    <Link href={href} onClick={() =>{toggleMenu()}}>
                                        {title}
                                    </Link>
                                </motion.div>
                            </div>
                        )
                    })

                }
            </div>
            <motion.div className={styles.footer}>
                {
                    footerLinks.map((link, i) => {
                        const { title, href } = link;
                        return (
                            <motion.a
                                variants={slideIn}
                                custom={i}
                                initial="initial"
                                animate="enter"
                                exit="exit"
                                key={`f_${i}`}
                            >
                                {title}
                            </motion.a>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}