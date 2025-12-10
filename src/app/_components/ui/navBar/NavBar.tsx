'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import mainLogo from "@/../public/imgs/favicon.ico"
import Link from 'next/link'
import { Menu, MenuIcon, Search, X } from 'lucide-react'
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
import { Alfa_Slab_One } from 'next/font/google'
import { usePathname } from 'next/navigation'


const alfaFont = Alfa_Slab_One({
    weight: "400",
    subsets: ['latin']
})


export default function NavBar() {

    return (
        <nav className='fixed top-0 z-50 w-full flex justify-between  items-center  '>
            <MainLogoDisplay />
            <Links className={`hidden ${alfaFont.className} `} />
            <Icons className='' />
            <div className="cont lg:hidden flex justify-end mx-5 ">
                <MobileDrawer />
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
    const path = usePathname();
    return (
        <div className={`links  lg:block ${className} transition-all duration-700 `}>
            <ul className={`flex flex-col lg:flex-row   gap-5 h-full text-black `}>
                <li><Link href={"/recipes"} className={`${path == "/" ? 'text-yellow-800' : ""}`} >Home</Link></li>
                <li><Link href={"/recipes"} className={`${path == "/recipes" ? 'text-yellow-800' : ""}`} >Recipes</Link></li>
                <li><Link href={"/dic"} className={`${path == "/dic" ? 'text-yellow-800' : ""}`}>Available Reciepes</Link></li>
            </ul>
        </div>
    )
}

function Icons({ className }: { className: string }) {
    return (
        <div className={`icons  hidden lg:block  transition-all duration-700 ${className} `}>
            <Search className='' />
        </div>
    )
}

function MobileDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Drawer direction='left' onClose={() => setIsOpen(false)} >
            <DrawerTrigger onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X className=' stroke-2' /> : <Menu className=' stroke-2' />}</DrawerTrigger>
            <DrawerContent className='flex flex-col gap-5 '>
                <DrawerHeader>
                    <DrawerTitle >Menu</DrawerTitle>
                </DrawerHeader>
                <Links className='ps-5' />
                <Search className='ps-5' size={40} />
            </DrawerContent>
        </Drawer>
    )
}