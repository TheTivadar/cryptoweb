"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const ParallaxText = () => {
    const container = useRef()

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })

    return (
        <main className='overflow-hidden z-10 bg-black-100'>
            <div className='h-auto '>
                <div ref={container}>
                    <div className='w-full h-[2px] bg-gray-300 mb-2'/>
                    <Slide src="/logowhitecircle.png" direction="left" left="-24%" progress={scrollYProgress} text={"ÚTTÖRŐ TECHNOLÓGIA"}/>
                    <Slide src="/logowhitecircle.png" direction="right" left="-40%" progress={scrollYProgress} text={"MINIMÁLIS KÖLTSÉGEK"}/>
                    {/*<Slide src="/terex1200.jpg" direction="left" left="-31%" progress={scrollYProgress} text={"Modern megjelenés"}/>*/}
                    <div className='w-full h-[2px] bg-gray-300 mt-2'/>
                </div>
            </div>
        </main>
    )
}

export default ParallaxText


const Slide = (props) => {
    const direction = props.direction === "left" ? 1 : -1
    const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])

    return (
        <motion.div
            style={{
                x: translateX,
                left: props.left,
                display: 'flex',
                whiteSpace: 'nowrap',
                position: 'relative'
            }}
        >
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
            <Phare src={props.src} text={props.text}/>
        </motion.div>
    )
}


const Phare = ({ text, src }) => {
    return (
        <div className="flex gap-[1.1vw] items-center ">
            <p className="text-3xl md:text-5xl lg:text-6xl font-semibold mr-[1.25vw] text-purple"> {text} </p>
            <span className="relative aspect-[4/2] w-20  h-14 rounded-full overflow-hidden">
                <Image
                    src={src}
                    className='object-cover object-center'
                    alt="image"
                    width={200}
                    height={50}
                />
            </span>
        </div>
    )
}

