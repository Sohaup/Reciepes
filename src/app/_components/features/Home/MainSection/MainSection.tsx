'use client'
import React, { useRef } from 'react'
import mainDishImage from "@/../public/imgs/home/meatDish.png";
import Image from 'next/image';
import { Montserrat, Merriweather } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

const montserratFont = Montserrat();
const merriWeatherFont = Merriweather();

export default function MainSection() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const paragrapthRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    gsap.registerPlugin(SplitText);
    useGSAP(() => {
        const split = SplitText.create(headingRef.current, { type: "words,letters,chars"  , autoSplit:true});
        const tl = gsap.timeline();
        tl.from(split.chars, {
            opacity: 0,
            scale: 2,
            duration: 1,
            stagger: {
                each: .2
            }
        });

        tl.from(paragrapthRef.current, {
            opacity: 0,
            y: 100,
            duration: 1
        });

        tl.from(buttonRef.current, {
            opacity: 0,
            x: -100,
            duration: 1
        });

        return ()=>{
            tl.kill();
        }

    }, []);
    return (
        <section className='recipesLandingGradient py-25 flex flex-col lg:flex-row justify-evenly items-center'>
            <div className="texts w-full lg:w-1/2 xl:w-1/4 space-y-5 text-center ">
                <h1 ref={headingRef} className={`text-white text-6xl font-bold ${montserratFont.className}`}>It`s more than just a food its an Experience</h1>
                <p ref={paragrapthRef} className={`${merriWeatherFont.className} text-slate-200 text-lg font-semibold w-1/2 leading-5 mx-auto`}>
                    our site is the easiest way to search recipes and find it
                </p>
                <Button ref={buttonRef} className=' bg-amber-200 text-black rounded-md px-10 hover:bg-rose-900 hover:text-white transition-colors duration-500 '>
                    Search
                </Button>
            </div>
            <div className="img w-3/4 lg:w-1/2 xl:w-1/4">
                <Image src={mainDishImage} alt='delecious meet dish' width={200} height={200} className='w-full drop-shadow-2xl' />
            </div>
        </section>
    )
}
