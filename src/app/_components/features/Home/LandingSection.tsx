'use client'
import React, { useContext, useEffect, useRef, useState } from 'react'
import SauceImg from "@/../public/imgs/home/sauce.png"
import SpicyImg from "@/../public/imgs/home/spicy.png"
import ToastImg from "@/../public/imgs/home/toast.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import type {Swiper as SwiperType} from "swiper/types"
import LandingStructure from '../../ui/landingStructure/LandingStructure'
import { landingInfoType } from '@/types/UiInfoTypes'
import "swiper/css"
import { themeContext } from '@/providers/themeProvider'
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from 'lucide-react'

const landingInfoArr: landingInfoType[] = [
    {
        title: "Salsa",
        description: `Bring vibrant, authentic taste to your table with our handcrafted salsa, made from sun-ripened tomatoes, crisp onions, fresh-chopped cilantro, and a perfect balance of zesty lime and natural spices. Every jar is packed within hours of preparation to preserve the bright, just-made flavor you’d expect from a traditional taquería.
           Whether you’re dipping, topping, marinating, or mixing it into your favorite recipes, this salsa delivers a fresh, energetic kick that transforms ordinary meals into bold, memorable bites.` ,
        imgPath: SauceImg.src,
        id: 1,
        powerInfoes: [
            { name: "fat", value: 70, id: 10 },
            { name: "poroten", value: 30, id: 11 },
            { name: "energy", value: 40, id: 12 },
            { name: "carps", value: 55, id: 13 }
        ]
    },
    {
        title: "Spicy",
        description: `Ignite your taste buds with our fiery, flavor-packed spicy salsa, crafted for heat seekers who crave more than just a mild kick. We blend vine-ripened tomatoes with flame-roasted peppers, sharp onions, fresh cilantro, and a squeeze of bright lime—then crank up the heat with a bold mix of chilies that brings a slow-building burn and a mouthwatering depth of flavor.`,
        imgPath: SpicyImg.src,
        id: 2,
        powerInfoes: [
            { name: "fat", value: 70, id: 14 },
            { name: "poroten", value: 30, id: 15 },
            { name: "energy", value: 40, id: 16 },
            { name: "carps", value: 55, id: 17 }
        ]
    },
    {
        title: "Toast",
        description: `Start your day (or snack break) with our perfectly baked toast, crafted from wholesome, carefully selected ingredients and finished to a golden, satisfying crunch. Each slice is toasted to perfection—light, crisp, and sturdy enough to hold your favorite spreads without crumbling.`,
        imgPath: ToastImg.src,
        id: 3,
        powerInfoes: [
            { name: "fat", value: 70, id: 18 },
            { name: "poroten", value: 30, id: 19 },
            { name: "energy", value: 40, id: 20 },
            { name: "carps", value: 55, id: 21 }
        ]
    }
]
export default function LandingSection() {
    const swiperRef = useRef<SwiperType>(null); 
    const themeData = useContext(themeContext);
    const [currentSlideIndex , setCurrentSlideIndex] = useState<number>(0);
    useEffect(()=> {
       window.setInterval(()=> {
        startAutoSlide();
       } , 5000);
    } , []);    
    function startAutoSlide() {
        swiperRef.current?.slideNext();   
       
    }

    function slideNext() {
        swiperRef.current?.slideNext();   
    }
    
    function slidePrev() {
        swiperRef.current?.slidePrev();   
    }
    return (
        <div className="landing py-30 h-full  ">
            <Swiper onSwiper={(swiper)=> swiperRef.current = swiper} loop onSlideChange={(swiper)=> {                        
               const availableClasses = ["slide-one" , "slide-two" , "slide-three"];
               if (currentSlideIndex == (availableClasses.length - 1)) {
                 setCurrentSlideIndex(0)
                 console.log(currentSlideIndex)
               } else {
                setCurrentSlideIndex(currentSlideIndex + 1)
                console.log(currentSlideIndex)
               }               
               themeData ? themeData.setClassTheme(availableClasses[currentSlideIndex]) : "";               
            }} >
                {landingInfoArr.map((info) => (
                    <SwiperSlide key={info.id}  >                        
                            <LandingStructure landingInfo={info}  />                                         
                    </SwiperSlide>
                ))}
            </Swiper>
            <LowerSection slideNext={slideNext} slidePrev={slidePrev}/>
        </div>
    )
}

function LowerSection({slidePrev , slideNext}:{slidePrev:()=>void , slideNext:()=>void}) {
    return (
        <div className="lowerSection w-full flex justify-evenly">
            <Button onClick={slidePrev} className='bg-yellow-800 text-black hover:bg-black hover:text-white transition-colors duration-500'><ArrowLeft/></Button>
            <Button onClick={slideNext} className='bg-yellow-800 text-black hover:bg-black hover:text-white transition-colors duration-500'><ArrowRight/></Button>            
        </div>
    )
}
