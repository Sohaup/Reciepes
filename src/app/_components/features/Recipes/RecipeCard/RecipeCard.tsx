import { recipeType } from '@/types/recipeType'
import Image from 'next/image'
import React from 'react'

export default function RecipeCard({recipe}:{recipe:recipeType}) {
  return (
    <div>
        <div className="card-img  ">
            <Image src={recipe.image_url} alt={recipe.title} width={200} height={200} className='w-100 h-80 rounded-lg '/>
        </div>
        <div className="texts max-w-100 text-center">
            <h2 className='font-bold text-xl'>{recipe.title}</h2>
            <p className='text-gray-400 text-sm'>{recipe.publisher}</p>
        </div>
    </div>
  )
}
