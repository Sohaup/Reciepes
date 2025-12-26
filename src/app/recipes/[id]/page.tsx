import RecipePage from '@/app/_components/features/Recipes/RecipePage/RecipePage';
import type { Metadata } from 'next';

export const metadata : Metadata = {
   title:"Specific Recipe Details" ,
   description:"Specific Recipe Details Page"
}

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <RecipePage id={id}/>
  )

}
