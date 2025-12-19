'use client'
import { Input } from '@/components/ui/input'
import { getRecipesAfterSearch } from '@/store/slices/recipeSlice';
import { storeType } from '@/store/store';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RecipeCard from '../RecipeCard/RecipeCard';
import { Button } from '@/components/ui/button';
import Loader from '@/app/_components/ui/Loader/Loader';

export default function RecipesSearch() {
    const dispatch = useDispatch<any>();
    const recipes = useSelector((store: storeType) => store.recipeSlice);
    const [seachValue, setSearchValue] = useState(localStorage.getItem("meal") ?? "pizza");
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        dispatch(getRecipesAfterSearch(seachValue));
        console.log(recipes.loading)
    }, [seachValue]);

    function perFormSearch(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        console.log(inputRef.current?.value)
        setSearchValue(inputRef.current?.value!);
    }

    if (recipes.loading) {
        return <Loader />
    } else {
        return (
            <section className=' py-15 '>
                <div className="search flex w-full lg:w-1/2 mx-auto bg-yellow-950 text-white ring-black ring-3 rounded-xl ">
                    <Input ref={inputRef} placeholder='...search' className=' outline-0 ring-0 border-0 focus-visible:outline-0 focus-visible:ring-0  focus-visible:border-0 ' />
                    <Button type='button' className='bg-yellow-800 rounded-xl' onClick={perFormSearch}>Search</Button>
                </div>
                <div className="result  grid gap-3  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 place-items-center ">
                    {
                        typeof recipes.recipes == "object" ?
                            recipes.recipes.map((recipe) => <RecipeCard key={recipe.recipe_id} recipe={recipe} />)
                            : ""
                    }
                </div>
            </section>
        )
    }




}
