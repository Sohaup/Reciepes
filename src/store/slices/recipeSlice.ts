import { getRecipies } from "@/services/recipeApi";
import { recipeStoreStateType } from "@/types/recipeType";
import { createSlice  , createAsyncThunk} from "@reduxjs/toolkit";

export const getRecipesAfterSearch = createAsyncThunk("recipes/search" , getRecipies);

const initialState:recipeStoreStateType = {
    loading:false ,
    error:false ,
    recipes:[]
}

const recipeSlice = createSlice({
    name:"recipe slice" ,
    initialState,
    reducers:{

    } ,
    extraReducers:async function (builder) {
        builder.addCase(getRecipesAfterSearch.pending , (prevState)=> {
            prevState.loading = true;
            prevState.error = false;
        });
        builder.addCase(getRecipesAfterSearch.rejected , (prevState)=> {
            prevState.loading = false;
            prevState.error = true;
        });
        builder.addCase(getRecipesAfterSearch.fulfilled , (prevState , action)=> {
            prevState.loading=false;
            prevState.error=false;
            prevState.recipes = action.payload;
            console.log(prevState.recipes)
        });

    }
});

export default recipeSlice.reducer;

