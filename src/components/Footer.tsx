import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='w-full h-full bg-[#1a1c25] relative py-6 lg:py-24'>
            <div className='grid grid-cols-12 lg:flex flex-row justify-evenly order '>
                <div className='col-span-12 lg:flex flex-col order-4 lg:order-1'>
                    <div className='flex flex-row justify-center lg:justify-evenly gap-6 pt-4'>
                        <Image
                            src={"/laptop.png"}
                            alt="logo"
                            width={100}
                            height={100}
                            className='size-16 rounded-full'
                        />
                        <h1 className='text-3xl font-semibold text-gray-300'>Alegex</h1>
                    </div>
                    <div className='flex flex-row justify-center space-x-6 lg:justify-evenly pt-4 lg:pt-10'>
                        {socials.map((social, index) => (
                            <Link
                                key={index}
                                href={social.url}
                                className='text-sm lg:text-base text-gray-500 hover:text-blue-400 duration-300 scale-110 '
                            >
                                {social.icon}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='col-span-4 lg:flex flex-col order-1 lg:order-4'>
                    <h1 className='text-xl lg:text-3xl font-semibold text-gray-300 pb-4 text-center'>Ismerj meg</h1>
                    <div className='flex flex-col'>
                        {navigation.map((social, index) => (
                            <Link
                                key={index}
                                href={social.url}
                                className='text-sm lg:text-base text-gray-white my-2 hover:text-blue-400 text-center duration-150 text-gray-300'
                            >
                                {social.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='col-span-4 lg:flex flex-col order-2'>
                    <h1 className='text-xl lg:text-3xl font-semibold text-gray-300 pb-4 text-center'>További információ</h1>
                    <div className='flex flex-col'>
                        {details.map((social, index) => (
                            <Link
                                key={index}
                                href={social.url}
                                className='text-sm lg:text-base text-gray-white my-2 hover:text-blue-400 text-center duration-150 text-gray-300'
                            >
                                {social.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='col-span-4 lg:flex flex-col order-3'>
                    <h1 className='text-xl lg:text-3xl font-semibold text-gray-300 pb-4 text-center'>Szabályzat</h1>
                    <div className='flex flex-col'>
                        {policies.map((social, index) => (
                            <Link
                                key={index}
                                href={social.url}
                                className='text-sm lg:text-base text-gray-white my-2 hover:text-blue-400 text-center duration-150 text-gray-300'
                            >
                                {social.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer


const socials = [
    {
        id: 1,
        name: "Facebook",
        icon: <FaFacebook />,
        url: "https://facebook.com"
    },
    {
        id: 2,
        name: "Twitter",
        icon: <FaTwitter />,
        url: "https://twitter.com"
    },
    {
        id: 3,
        name: "Instagram",
        icon: <FaInstagram />,
        url: "https://instagram.com"
    },
    {
        id: 4,
        name: "Tiktok",
        icon: <FaTiktok />,
        url: "https://tiktok.com"
    }
];

const navigation = [
    {
        id: 1,
        title: "AI kereskedés",
        url: "https://facebook.com"
    },
    {
        id: 2,
        title: "Technológia",
        url: "https://facebook.com"
    },
    {
        id: 3,
        title: "Befektetési szintek",
        url: "https://facebook.com"
    },
    {
        id: 4,
        title: "Profitibilitás",
        url: "https://facebook.com"
    },
    {
        id: 5,
        title: "Rólunk",
        url: "https://facebook.com"
    },
]

const details = [
    {
        id: 1,
        title: "Rólunk",
        url: "https://facebook.com"
    },
    {
        id: 2,
        title: "Hírek",
        url: "https://facebook.com"
    },
    {
        id: 3,
        title: "Blog",
        url: "https://facebook.com"
    },
    {
        id: 4,
        title: "Piacok",
        url: "https://facebook.com"
    },
    {
        id: 5,
        title: "GYIK",
        url: "https://facebook.com"
    },
    {
        id: 6,
        title: "Help Center",
        url: "https://facebook.com"
    },
]
const policies = [
    {
        id: 1,
        title: "Terms & Conditions",
        url: "https://facebook.com"
    },
    {
        id: 2,
        title: "AML Policy",
        url: "https://facebook.com"
    },
    {
        id: 3,
        title: "Privacy Policy",
        url: "https://facebook.com"
    },
    {
        id: 4,
        title: "Risk Disclaimer",
        url: "https://facebook.com"
    },
    {
        id: 5,
        title: "Cookie Policy",
        url: "https://facebook.com"
    }
]