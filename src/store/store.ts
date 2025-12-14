import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from './slices/recipeSlice';

const store = configureStore({
    reducer:{
        recipeSlice
    }
});

export default store;
export type storeType = ReturnType<typeof store.getState>;
export type dispatchType = typeof store.dispatch;
export type RootState = typeof store;