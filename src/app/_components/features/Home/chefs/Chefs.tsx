'use client'
import { ChefPreviewInfo } from '@/types/UiInfoTypes'
import React, { useRef } from 'react'
import chef1 from "@/../public/imgs/home/chef1.png"
import chef2 from "@/../public/imgs/home/chef2.png"
import chef3 from "@/../public/imgs/home/chef3.png"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Montserrat, Merriweather } from 'next/font/google';
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const chefsInfoes: ChefPreviewInfo[] = [
    {
        path: chef1.src,
        title: "best chef in the field",
        description: `Chef [Name] brings passion, precision, and creativity to every plate. Known for transforming fresh, seasonal ingredients into bold, modern flavors, they blend classic techniques with innovative twists that surprise and delight. Whether crafting intimate dining experiences or leading bustling kitchens, Chef [Name] delivers food that reflects their dedication to quality, artistry, and unforgettable taste.`
    },
    {
        path: chef2.src,
        title: "best chef in the field",
        description: `Chef [Name] brings passion, precision, and creativity to every plate. Known for transforming fresh, seasonal ingredients into bold, modern flavors, they blend classic techniques with innovative twists that surprise and delight. Whether crafting intimate dining experiences or leading bustling kitchens, Chef [Name] delivers food that reflects their dedication to quality, artistry, and unforgettable taste.`
    },
    {
        path: chef3.src,
        title: "best chef in the field",
        description: `Chef [Name] brings passion, precision, and creativity to every plate. Known for transforming fresh, seasonal ingredients into bold, modern flavors, they blend classic techniques with innovative twists that surprise and delight. Whether crafting intimate dining experiences or leading bustling kitchens, Chef [Name] delivers food that reflects their dedication to quality, artistry, and unforgettable taste.`
    }
]


const montserratFont = Montserrat();
const merriWeatherFont = Merriweather();



export default function ChefsSection() {
    return (
        <section className='py-15 flex flex-col gap-10 items-center justify-evenly w-full lg:w-3/4 mx-auto'>
            {chefsInfoes.map((info, index) => <ChefPreview key={info.path} chefPreviewInfo={info} direction={index % 2 == 0 ? "reverse" : "normal"} />)}
        </section>
    )
}


function ChefPreview({ chefPreviewInfo, direction }: { chefPreviewInfo: ChefPreviewInfo, direction: string }) {
    const chefPreviewRef = useRef<HTMLDivElement>(null);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=> {
        gsap.from(chefPreviewRef.current , {
            x:direction == "normal" ? 400 : -400 ,
            duration:2 ,
            scrollTrigger:{
                trigger:chefPreviewRef.current ,
                start:"1000px"
            }
        });
    } , [])
    return (
        <div ref={chefPreviewRef} className={` flex items-center lg:justify-evenly flex-col  ${direction == " normal" ? "lg:flex-row " : "lg:flex-row-reverse"}`}>

            <div className={`img w-full md:w-3/4 lg:w-1/2  flex justify-center lg:justify-end ${direction == "normal" ? "flex" : "flex lg:hidden "}`}>
                <Image src={chefPreviewInfo.path} alt={chefPreviewInfo.title} width={200} height={200} className='w-80 h-80 rounded-full border-3 border-yellow-800  ' />
            </div>
            <div className={`details w-full md:w-3/4 lg:w-1/2 flex  flex-col gap-8 `}>
                <h2 className={`text-2xl font-bold ${montserratFont.className} text-center lg:text-start`}>{chefPreviewInfo.title}</h2>
                <p className={`${merriWeatherFont.className}`}>{chefPreviewInfo.description}</p>
                <Button className='bg-yellow-900 self-center lg:self-start hover:bg-yellow-700 shadow-2xl'>Search Recipes</Button>
            </div>
            {
                direction != "normal" ?
                    <div className={`img w-1/2 hidden  lg:flex justify-start `}>
                        <Image src={chefPreviewInfo.path} alt={chefPreviewInfo.title} width={200} height={200} className='w-80 h-80 rounded-full border-3 border-yellow-800  ' />
                    </div> : ""
            }

        </div>
    )
}