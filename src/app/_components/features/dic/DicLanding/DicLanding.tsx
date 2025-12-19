import Image from 'next/image'
import React from 'react'
import soupDishImg from "@/../public/imgs/dic/soupDish.png";

export default function DicLanding() {
    return (
        <section className='flex justify-evenly items-center flex-col lg:flex-row recipesLandingGradient py-20 min-h-screen'>
            <div className="texts">
                <h1 className='text-white font-bold text-5xl'>Avalaible Recipes</h1>
            </div>
            <div className="img w-3/4 md:w-1/2 lg:w-1/4">
                <Image src={soupDishImg} alt='soup dish image ' width={200} height={200} className='w-full ' />
            </div>

        </section>
    )
}
