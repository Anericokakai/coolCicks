import { createSlice } from "@reduxjs/toolkit";

import { fetch_data_under_trending } from "../Thunks/Thunks";
const initialState = {
  trendingData: [],
  loadingTrends: false,
  trendError: null,
};

const fetchTrendingDataSlice = createSlice({
  name: "trendingApi",
  initialState,
  reducers:{
    setTrendingData:(state,action)=>{
      state.trendingData=action.payload

    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetch_data_under_trending.pending,(state)=>{
        state.loadingTrends=true
    })
    .addCase(fetch_data_under_trending.fulfilled,(state,action)=>{
        state.loadingTrends=false
        state.trendingData=action.payload
    })
    .addCase(fetch_data_under_trending.rejected,(state,action)=>{
        state.trendError=action.error.message
    })
    

  }
});
export const { setTrendingData}=fetchTrendingDataSlice.actions
export default fetchTrendingDataSlice.reducer