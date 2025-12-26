// 'use client'
import React from 'react'
import RecipesLanding from '../_components/features/Recipes/RecipesLanding'
import RecipesSearch from '../_components/features/Recipes/RecipesSearch/RecipesSearch'
import type { Metadata } from 'next'

export const metadata:Metadata = {
  title:"Search Recipes" ,
  description:"Search Recipe Page"
}

export default function page() {
  return (
    <main>   
    <RecipesLanding/>
    <RecipesSearch/>
    </main>
  )
}
