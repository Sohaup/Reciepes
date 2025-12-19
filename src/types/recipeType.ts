export type recipeType = {
    publisher:string ,
    title:string ,
    source_url:string,
    image_url:string ,
    recipe_id:string ,
    social_rank:number ,
    publisher_url:string
}

export type recipeDetailsType = {
    publisher:string ,
    title:string ,
    source_url:string,
    image_url:string ,
    recipe_id:string ,
    social_rank:number ,
    publisher_url:string ,
    ingredients:string[]
}


export type recipeStoreStateType = {
    loading:boolean ,
    error:boolean ,
    recipes:recipeType[] | [] ,
    recipe:recipeDetailsType 
}