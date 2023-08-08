import { createSlice } from "@reduxjs/toolkit";
import { fetchApiCategories } from "../Thunks/Thunks";
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const fetchcategories = createSlice({
  name: "fetchApi",
  initialState,
  reducers: {
    
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchApiCategories.pending,(state)=>{
        state.loading=true
    }).addCase(fetchApiCategories.fulfilled,(state,action)=>{
        state.loading=false
        state.data=action.payload
        state.error=null
    }).addCase(fetchApiCategories.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
    })
}
});

export default fetchcategories.reducer;
