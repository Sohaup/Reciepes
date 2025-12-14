'use client'
import React from 'react'
import RecipesLanding from '../_components/features/Recipes/RecipesLanding'
import RecipesSearch from '../_components/features/Recipes/RecipesSearch/RecipesSearch'

export default function page() {
  return (
    <main>
    <RecipesLanding/>
    <RecipesSearch/>
    </main>
  )
}
