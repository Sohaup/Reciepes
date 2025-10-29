'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import mainLogo from "@/../public/imgs/favicon.ico"
import Link from 'next/link'
import { Menu, MenuIcon, Search } from 'lucide-react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


export default function NavBar() {
   
    return (
        <nav className='fixed top-0 w-full flex justify-between  items-center '>
            <MainLogoDisplay />
            <Links className='hidden' />
            <Icons className='' />
            <div className="cont lg:hidden">
                <MobileDrawer/>
            </div>
            
        </nav>
    )
}

function MainLogoDisplay() {
    return (
        <div className="logo ">
            <Image src={mainLogo} alt='app main logo' className='w-20 h-20 rounded-full' />
        </div>
    )
}

function Links({ className }: { className: string }) {
    return (
        <div className={`links  lg:block ${className} transition-all duration-700`}>
            <ul className='flex flex-col lg:flex-row   gap-5 h-full '>
                <li><Link href={"/recipes"}>Recipes</Link></li>
                <li><Link href={"/list"}>All</Link></li>
            </ul>
        </div>
    )
}

function Icons({ className }: { className: string }) {
    return (
        <div className={`icons  hidden lg:block  transition-all duration-700 ${className} `}>
           <Search/>
        </div>
    )
}

function MobileDrawer() {
    return (
        <Drawer direction='left' >
            <DrawerTrigger><Menu/></DrawerTrigger>
            <DrawerContent className='flex flex-col gap-5 '>
                <DrawerHeader>
                    <DrawerTitle >Menu</DrawerTitle>                    
                </DrawerHeader>
                <Links className='ps-5'/>
                <Search className='ps-5' size={40}/>
            </DrawerContent>
        </Drawer>
    )
}