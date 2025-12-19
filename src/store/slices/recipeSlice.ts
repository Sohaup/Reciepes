import { getRecipies, getSpecificRecipeDetails } from "@/services/recipeApi";
import { recipeStoreStateType } from "@/types/recipeType";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRecipesAfterSearch = createAsyncThunk("recipes/search", getRecipies);
export const getRecipeDetails = createAsyncThunk("recipes/details", getSpecificRecipeDetails)

const initialState: recipeStoreStateType = {
    loading: false,
    error: false,
    recipes: [] , 
    recipe:{
        image_url:"" ,
        ingredients:[""] ,
        publisher:"" ,
        publisher_url:"" ,
        recipe_id:"" ,
        social_rank:0 ,
        title:"" ,
        source_url:"image"
    }
}

const recipeSlice = createSlice({
    name: "recipe slice",
    initialState,
    reducers: {

    },
    extraReducers: async function (builder) {
        builder.addCase(getRecipesAfterSearch.pending, (prevState) => {
            prevState.loading = true;
            prevState.error = false;
        });
        builder.addCase(getRecipesAfterSearch.rejected, (prevState) => {
            prevState.loading = false;
            prevState.error = true;
        });
        builder.addCase(getRecipesAfterSearch.fulfilled, (prevState, action) => {
            prevState.loading = false;
            prevState.error = false;
            prevState.recipes = action.payload;
            console.log(prevState.recipes)
        });
        builder.addCase(getRecipeDetails.pending, (prevState) => {
            prevState.loading = true;
            prevState.error = false;
        });
        builder.addCase(getRecipeDetails.rejected, (prevState) => {
            prevState.loading = false;
            prevState.error = true;
        });
        builder.addCase(getRecipeDetails.fulfilled, (prevState, action) => {
            prevState.loading = false;
            prevState.error = false;
            prevState.recipe = action.payload;
            console.log(prevState.recipe)
        });

    }
});

export default recipeSlice.reducer;

