"use client"
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { MdNotifications } from "react-icons/md"
import { BreadcrumbDemo } from './shadcn/Breadcrumb'
import { DropdownMenuDemo } from './shadcn/DropDown'
import { ModeToggle } from './sideBar/mode-toogle'
import { SidebarTrigger } from './ui/sidebar'

const TopBar = () => {
    return (
        <div className='w-full pr-2 lg:px-10 lg:pr-10'>
            <div className="flex flex-row items-center justify-between w-full  gap-10 pt-4">
                <div className="flex flex-row items-center gap-4 ">
                    <SidebarTrigger />
                    <div className='hidden md:block'>
                    <BreadcrumbDemo />
                    </div>
                </div>
                <div className='flex flex-row items-center gap-2 lg:gap-4'>
                    <ToogleIncognito />
                    <MdNotifications className='size-8 p-1 md:size-10 md:p-2 border rounded-md hover:bg-black-300' />
                    <DropdownMenuDemo />
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}

export default TopBar

const ToogleIncognito = () => {
    const [active, setActive] = useState(true)
    return (
        <div>
            {
                active ? <FaEye className='size-8 p-1 md:size-10 md:p-2 border rounded-md hover:bg-black-300' /> : <FaEyeSlash className='size-6 p-1 lg:size-10 lg:p-2 border rounded-md hover:bg-black-300' />
            }
        </div>
    )
}