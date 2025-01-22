"use client"
import React, { useState } from 'react'
import { SidebarTrigger } from './ui/sidebar'
import { BreadcrumbDemo } from './shadcn/Breadcrumb'
import { ModeToggle } from './sideBar/mode-toogle'
import { MdNotifications } from "react-icons/md";
import { DropdownMenuDemo } from './shadcn/DropDown';
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

const TopBar = () => {
    return (
        <div className='w-full lg:px-10 lg:pr-10'>
            <div className="flex flex-row items-center justify-between w-full  gap-10 pt-4">
                <div className="flex flex-row items-center gap-4 ">
                    <SidebarTrigger />
                    <BreadcrumbDemo />
                </div>
                <div className='flex flex-row items-center gap-2 lg:gap-4'>
                    <ToogleIncognito />
                    <MdNotifications  className='size-6 p-1 md:size-10 md:p-2 border rounded-md hover:bg-black-300'/>
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
    return(
        <div>
            {
                active ? <FaEye className='size-6 p-1 md:size-10 md:p-2 border rounded-md hover:bg-black-300'/> : <FaEyeSlash className='size-6 p-1 lg:size-10 lg:p-2 border rounded-md hover:bg-black-300'/>
            }
        </div>
    )
}