import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchmovieSlice"

export const store =  configureStore({
    reducer:{
        searchReducer,
    }
})