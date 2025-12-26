import React from 'react';
import mealImg from "@/../public/imgs/recipes/meal.png"; 
import Image from 'next/image';

export default function RecipesLanding() {
  return (
   <section className='flex flex-col min-h-screen  xl:gap-0 xl:flex-row justify-evenly items-center recipesLandingGradient  overflow-visible  py-5'>
    <div className="texts w-full xl:w-1/2  flex items-center justify-center ">
        <h1 className='text-4xl md:text-5xl text-white font-bold font-sans mx-auto'>Search Recipes </h1>
    </div>
    <div className="img w-3/4 md:w-1/2 lg:w-1/4 mx-auto     ">
        <Image src={mealImg} alt='meal image' width={200} height={200} className='w-full'/>
    </div>
   </section>
  )
}
