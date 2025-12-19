'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import shrimpDishImg from "@/../public/imgs/home/shrimpDish.png"
import { Montserrat, Merriweather } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchType, storeType } from '@/store/store';
import { getRecipesAfterSearch } from '@/store/slices/recipeSlice';
import Loader from '@/app/_components/ui/Loader/Loader';
import RecipeCard from '../../Recipes/RecipeCard/RecipeCard';


const montserratFont = Montserrat();
const merriWeatherFont = Merriweather();


export default function IntroSection() {
    const dispatch = useDispatch<dispatchType>();
    const recipeState = useSelector((store: storeType) => store.recipeSlice);
    useEffect(() => {
        dispatch(getRecipesAfterSearch("lemon"));
    }, []);
    if (recipeState.loading) {
        return <Loader />
    } else {
        return (
            <section className='py-15  w-full flex flex-col gap-5 items-center justify-center '>
                <div className="title">
                    <h2 className={`${montserratFont.className} text-3xl font-bold text-center`}>Our Most Populer Drinks Recipes</h2>
                </div>
                <div className="main lg:w-3/4 mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center ">
                    {recipeState.recipes.map((recipe)=> <RecipeCard key={recipe.recipe_id} recipe={recipe}/>)}
                </div>
                
            </section>
        )
    }
}
