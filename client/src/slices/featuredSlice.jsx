import { createSlice } from "@reduxjs/toolkit";
import { fetchData_underFeatures } from "../Thunks/Thunks";
const initialState={
    featuredData:[],
    loading:false,
    error:null
}

const featuredApiSlice=createSlice({
    name:"featuredApi",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchData_underFeatures.pending,(state)=>{
            state.loading=true
        }).addCase(fetchData_underFeatures.fulfilled,(state,action)=>{
            state.loading=false
            state.featuredData=action.payload
            state.error=null
        }).addCase(fetchData_underFeatures.rejected,(state,action)=>{
            state.error=action.error.message
            state.loading=false
        })
    }
})
export default featuredApiSlice.reducer