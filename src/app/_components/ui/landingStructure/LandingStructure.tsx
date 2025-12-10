import { landingInfoType, powerInfoCardType } from '@/types/UiInfoTypes'
import { Leaf, SunSnow, Wheat, WheatOff } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Montserrat , Merriweather} from 'next/font/google';
import SauceImg from "@/../public/imgs/home/sauce.png"

const montserratFont = Montserrat();
const merriWeatherFont = Merriweather();


export default function LandingStructure({ landingInfo }: { landingInfo: landingInfoType }) {   

    return (
        <div className="upperSection  text-black flex  flex-col lg:flex-row justify-evenly  ">
            <div className="sub w-full lg:w-1/3">
                <div className="texts my-5 flex flex-col gap-5 text-center lg:text-start">
                    <h1 className={`${montserratFont.className} text-6xl font-bold`}>{landingInfo.title}</h1>
                    <p className={`${merriWeatherFont.className} leading-8 font-semibold`}>{landingInfo.description}</p>
                </div>
                <div className="icons space-y-1 flex gap-1 flex-row lg:flex-col items-center justify-center lg:items-start lg:justify-start">
                    <div className="group flex gap-3">
                        <span className='flex flex-col items-center justify-center'>
                            <span className='icon-center text-white'><SunSnow/></span>
                            spicy
                        </span>
                        <span className='flex flex-col items-center justify-center'>
                            <span className='icon-center text-white' ><WheatOff/></span>
                             No gluten
                        </span>
                    </div>
                    <span>
                        <span className='icon-center text-white '><Leaf/></span> 
                        Vegan
                    </span>
                </div>
            </div>
            <div className="img w-full lg:w-1/2 my-10 lg:my-0 ">
               <Image src={landingInfo.imgPath} alt={landingInfo.title} width={200} height={200} className={`drop-shadow-md drop-shadow-slate-200 mx-auto lg:mx-0 ${landingInfo.imgPath == SauceImg.src ? "w-1/2" : "w-3/4" }`}/>
            </div>
            <div className="cards space-y-5 flex flex-row lg:flex-col justify-center gap-3  ">
                {landingInfo.powerInfoes.map((powerInfo , index)=> <Card cardInfo={powerInfo} key={powerInfo.id} isTransparent={index%2 != 0 ? true : false }/>)}
            </div>
        </div>
    )
}

function Card({isTransparent ,  cardInfo}:{isTransparent:boolean , cardInfo:powerInfoCardType}) {
    return (
        <div className={`card w-30 h-30 ${isTransparent ? "bg-transparent border" : "bg-yellow-900 text-white"} rounded-lg p-5`}>
            <h2>{cardInfo.name}</h2>
            <p>{cardInfo.value} g</p>
        </div>
    )
}
