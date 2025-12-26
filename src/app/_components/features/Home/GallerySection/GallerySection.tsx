'use client'
import React, { useRef } from 'react'
import breadImg from "@/../public/imgs/home/bread.png"
import bread2Img from "@/../public/imgs/home/bread2.png"
import bread3Img from "@/../public/imgs/home/bekaryBasket3.png"
import Image from 'next/image'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bgImg from "@/../public/imgs/home/foodBg.jpg"

export default function GallerySection() {
  const gallerySectionRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  // useGSAP(() => {
  //   const mm = gsap.matchMedia();
  //   mm.add("(min-width:1024px)", () => {
  //    const galleryRotateTween = gsap.to(gallerySectionRef.current, {
  //       rotation: 360,
  //       duration: 2,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: gallerySectionRef.current,
  //         start: "top center"
  //       }
  //     });

  //     return ()=>{
  //       galleryRotateTween.kill();
  //     }
  //   });
  //   return ()=>{
  //     mm.revert();
  //   }

  // }, []);
  return (
    <section className={` py-20 flex  flex-col gap-3 items-center justify-center gallery  `} ref={gallerySectionRef}>
      <div className="title">
        <h1 className='text-white text-4xl font-bold font-serif'>Our Populer Bread</h1>
      </div>
      <span className='p-3 border-2 rounded-full bg-slate-200'>
        <Image src={breadImg.src} alt='bread image' width={200} height={200} className='w-120 h-120 ' />
      </span>

      <div className="group flex flex-col lg:flex-row gap-3 ">
        <span className='p-3 border-2 rounded-full bg-slate-200'>
          <Image src={bread2Img.src} alt='' width={200} height={200} className='w-120 h-120 ' />
        </span>
        <span className='p-3 border-2 rounded-full bg-slate-200'>
          <Image src={bread3Img.src} alt='' width={200} height={200} className='w-120 h-120 ' />
        </span>

      </div>
    </section>
  )
}
