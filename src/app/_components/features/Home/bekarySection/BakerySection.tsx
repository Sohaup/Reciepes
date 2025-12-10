'use client'
import React, { useRef } from 'react'
import basketImg from "@/../public/imgs/home/bekaryBasket2.png"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger'


export default function BakerySection() {
    const bekaryTitleRef = useRef<HTMLHeadingElement>(null);
    const bekaryParagrapthRef = useRef<HTMLParagraphElement>(null);
    const bekaryButtonRef = useRef<HTMLButtonElement>(null);
    const bekaryImageRef = useRef<HTMLImageElement>(null);
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.defaults({ opacity: 0 })
        gsap.from(bekaryTitleRef.current, {
            y: -100,
            duration: 2,
            scrollTrigger: { trigger: bekaryTitleRef.current }
        });
        gsap.from(bekaryImageRef.current , {
            duration:2 ,
            delay:2 ,
            clipPath:"inset(0 0 100% 0)"
        })
        gsap.from(bekaryParagrapthRef.current, {
            y: -100,
            duration: 2,
            delay: 2,
            scrollTrigger: { trigger: bekaryParagrapthRef.current }

        });
        gsap.from(bekaryButtonRef.current, {
            x: 100,
            duration: 2,
            delay: 4,
            scrollTrigger: { trigger: bekaryButtonRef.current }

        });
    }, []);
    return (
        <section className='bekary py-20 flex  flex-col xl:flex-row cont' >
            <div className="title  flex  xl:rotate-270  justify-center xl:ps-90 ">
                <h2 ref={bekaryTitleRef} className='text-8xl font-bold  xl:-translate-x-1/2 text-yellow-950 '>Bekary</h2>
            </div>
            <div className="group flex flex-col xl:flex-row justify-end  gap-5  ">
                <div className="img lg:w-1/2 xl:w-full mx-auto  ">
                    <Image ref={bekaryImageRef} src={basketImg.src} alt={"some baked breads"} width={500} height={500} className='w-full ' />
                </div>
                <div className="texts  w-1/2  text-center  text-slate-800 self-center mx-auto lg:me-auto  ">
                    <p ref={bekaryParagrapthRef} >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem eaque voluptates,
                        accusamus numquam magnam dolor facilis magni. Neque, ad?Lorem, ipsum dolor sit amet consectetur
                    </p>
                </div>
            </div>
            <div className="btn flex items-center justify-center xl:justify-start my-4">
                <Button ref={bekaryButtonRef} className='bg-yellow-950 hover:text-white text-lg '>Search Recipes</Button>
                <ArrowRight />
            </div>

        </section>
    )
}
