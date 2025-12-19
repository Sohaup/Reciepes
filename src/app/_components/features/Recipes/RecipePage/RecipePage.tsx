'use client'
import Loader from '@/app/_components/ui/Loader/Loader';
import { getRecipeDetails } from '@/store/slices/recipeSlice';
import { dispatchType, storeType } from '@/store/store';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Montserrat, Merriweather } from 'next/font/google';

const montserratFont = Montserrat();
const merriWeatherFont = Merriweather();

export default function RecipePage({id}:{id:string}) {
    const dispatch = useDispatch<dispatchType>();
      const recipeState = useSelector((store: storeType) => store.recipeSlice);
 
    useEffect(() => {
    dispatch(getRecipeDetails(id));
  }, []);

  if (recipeState.loading) {
    return <Loader />
  } else {
    return (        
      <section className='py-30 flex justify-evenly flex-col lg:flex-row items-center w-full xl:w-[90%] mx-auto'>
        <div className="img w-full  xl:w-1/2">
         <Image src={recipeState.recipe.image_url } alt={recipeState.recipe.title} width={200} height={200} className='w-full lg:rounded-xl max-h-[600px]'/>
        </div>
        <div className="details space-y-5  ">
            <h1 className={`${montserratFont.className} text-3xl font-bold text-center`}>{recipeState.recipe.title}</h1>
            <div className="texts space-y-4">
                <h2 className={`${merriWeatherFont.className} text-slate-500 font-semibold text-2xl text-center`}>Ingredients</h2>
                <ul className="details text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 ">
                     {recipeState.recipe.ingredients.map((ingerdient , index)=> <li key={index} className='text-snas'>{ingerdient}</li>)}
                </ul>
                <div className="inovator">
                    <p className='font-bold text-xl text-yellow-700 text-center my-5 '>{recipeState.recipe.publisher}</p>
                </div>
            </div>
        </div>
      </section>
       
    )
  }
}
 
