import { createSlice } from "@reduxjs/toolkit";

const searchmovieSlice = createSlice({
  name: "searchmovieSlice",
  initialState: '',
  reducers: {
    setSearch: (state, action) => {
        console.log("sort>>>>>>",action.payload)
      return state = action.payload;
    },
  },
});

export const {setSearch} = searchmovieSlice.actions;
export default searchmovieSlice.reducer;
