import Image from 'next/image'
import React from 'react'
import shrimpDishImg from "@/../public/imgs/home/shrimpDish.png"
import { Montserrat , Merriweather} from 'next/font/google';


const montserratFont = Montserrat();
const merriWeatherFont = Merriweather();


export default function IntroSection() {
  return (
    <section className='py-15 flex flex-col w-full lg:w-3/4 mx-auto items-center '>
        <div className="texts flex flex-col gap-5 items-center ">
            <h2 className={`${montserratFont.className} text-yellow-900 text-4xl font-bold w-3/4`}>
                That`s more than food it`s an Exprerience 
            </h2>
            <p className={`${merriWeatherFont.className} text-slate-800 text-lg w-3/4 lg:w-1/2 `}>
                welcome in the most easyest site to search for food recipes
                here you can search between aton of food recipes among the world   
            </p>
        </div>
        <div className="img w-1/2 lg:w-1/4">
            <Image src={shrimpDishImg} alt='shrimp dish ' width={200}  height={200} className='w-full '/>
        </div>
    </section>
  )
}
