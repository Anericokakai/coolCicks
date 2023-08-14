import { createSlice } from "@reduxjs/toolkit";
import { fetchDataUnderCategory } from "../Thunks/Thunks";


const initialState={
    data: [],
    loading2: false,
    error2: null,
}

const fetchFilteredData= createSlice({
    name:"filteredData",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchDataUnderCategory.pending,(state)=>{
            state.loading2=true
        }).addCase(fetchDataUnderCategory.fulfilled,(state,action)=>{
            state.loading2=false
            state.data=action.payload
            state.error2=null
        }).addCase(fetchDataUnderCategory.rejected,(state,action)=>{
            state.loading2=false
            state.error2=action.error.message
        })
    }
})
export default fetchFilteredData.reducer
