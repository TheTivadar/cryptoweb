"use client"
import { MagicButton2 } from '@/components/MagicButton'
import FallingText from '@/components/ui/falling-text'
import { useRouter } from 'next/navigation'


import { FaLocationArrow } from 'react-icons/fa'

export default function NotFound() {
    const router = useRouter()
    function handleClick (){
        router.push('/')
    }
    return (
        <div className='h-screen w-screen'>
            <FallingText
                text={`A keresett oldal nem található a gomb navigáljon vissza a főoldalra`}
                highlightWords={["A", "keresett", "oldal", "nem", "található"]}
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.26}
                fontSize="4rem"
                mouseConstraintStiffness={1}
            />
            <div className='absolute top-[50vh] left-[50vw] z-20'>
            <MagicButton2
                title={"Vissza a főoldalra"}
                icon={<FaLocationArrow />}
                position="right"
                handleClick={handleClick}
                />
                </div>
        </div>
    )
}