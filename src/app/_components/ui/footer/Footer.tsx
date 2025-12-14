'use client'
import React from 'react'
import appLogo from "@/../public/imgs/favicon.ico"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export default function Footer() {
    const path = usePathname();
    return (
        <footer className=' bg-yellow-950 w-full lg:w-[80%] mx-auto rounded-tl-2xl rounded-tr-2xl text-white flex flex-col items-center' >
            <div className="logo">
                <Image src={appLogo} alt='the logo of the app' width={200} height={200} />
            </div>
            <div className="links">
                <ul className='flex gap-5'>
                    <li>
                        <Link href={"/"} className={`${path == "/" ? 'text-yellow-400' : ""}`}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/recipes"} className={`${path == "/recipes" ? 'text-yellow-800' : ""}`}>Recipes</Link>
                    </li>
                    <li>
                        <Link href={"/dic"} className={`${path == "/dic" ? 'text-yellow-800' : ""}`}>All Recipes</Link>
                    </li>
                </ul>
            </div>
            <div className="btn my-2">
                <Button className='bg-amber-800 py-3 rounded-md'>go to find your prefered Recipe</Button>
            </div>
        </footer>
    )
}
