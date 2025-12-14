export async function getRecipies(meal:string) {   
    const res = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}` , {
        cache:"no-cache" ,
        method:"GET"
    });
    const responseJson = await res.json();
    return responseJson.recipes
}