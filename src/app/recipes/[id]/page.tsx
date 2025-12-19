import RecipePage from '@/app/_components/features/Recipes/RecipePage/RecipePage';


export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <RecipePage id={id}/>
  )

}
