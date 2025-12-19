import React from 'react';
import mealImg from "@/../public/imgs/recipes/meal.png"; 
import Image from 'next/image';

export default function RecipesLanding() {
  return (
   <section className='flex flex-col min-h-screen xl:gap-0 xl:flex-row justify-evenly items-center recipesLandingGradient mt-25  overflow-visible  py-5'>
    <div className="texts w-full xl:w-1/10  flex items-center ">
        <h1 className='text-3xl md:text-5xl lg:text-6xl text-white font-bold font-sans mx-auto'>Search All Recipes You Want</h1>
    </div>
    <div className="img w-3/4 xl:w-1/2  overflow-visible flex items-center    ">
        <Image src={mealImg} alt='meal image' width={200} height={200} className='w-full md:w-3/4 mx-auto h-full object-contain block '/>
    </div>
   </section>
  )
}
