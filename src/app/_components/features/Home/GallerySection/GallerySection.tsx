'use client'
import React, { useRef } from 'react'
import breadImg from "@/../public/imgs/home/bread.png"
import bread2Img from "@/../public/imgs/home/bread2.png"
import bread3Img from "@/../public/imgs/home/bekaryBasket3.png"
import Image from 'next/image'
import {gsap} from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function GallerySection() {
  const gallerySectionRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=> {
    gsap.to(gallerySectionRef.current , {
      rotation:360 ,
      duration:2 ,
      opacity:1 ,
      scrollTrigger:{
        trigger:gallerySectionRef.current ,
        start:"top center"
      }
    })
  } , []);
  return (
    <section className='cont py-20 flex  flex-col gap-3 items-center justify-center' ref={gallerySectionRef}>
        <Image src={breadImg.src} alt='bread image' width={200} height={200} className='w-120 h-120 p-3 border-2 rounded-full'/>
        <div className="group flex flex-col lg:flex-row gap-3 ">
            <Image src={bread2Img.src} alt='' width={200} height={200} className='w-120 h-120 border-2  p-3 rounded-full'/>
            <Image src={bread3Img.src} alt='' width={200} height={200} className='w-120 h-120 border-2 p-3 rounded-full'/>
        </div>
    </section>
  )
}
