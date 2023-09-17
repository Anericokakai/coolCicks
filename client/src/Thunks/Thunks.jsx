import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchApiCategories=createAsyncThunk('myApi/fetchcategories',async()=>{
    
    const response= await axios.get(`http://localhost:7001/api/coolcicks/v1/categories`)
    return response.data
})



    export const fetchDataUnderCategory=createAsyncThunk('myApi/fetchProducts',async(parameter)=>{
        const response =await axios.get(`http://localhost:7001/api/coolcicks/v1/categoryProduct?category=${parameter}`)
        return response.data
    })

    export const fetch_data_underFilters=createAsyncThunk('myApi/fetchFilters',async(first_params,second_params,third_params,forth_params)=>{

        const response=await axios.get(`http://localhost:7001/api/coolcicks/v1/trendsUnderCategory?category=${first_params}&color=${second_params}&price${third_params}&company=${forth_params}`)
        return response.data

    })
    export const fetch_data_under_trending=createAsyncThunk("/api/coolciks/v1/fetchByTrend",async(category)=>{

        const res=await axios.get(`http://localhost:7001/api/coolciks/v1/fetchByTrend?category=${category}`)
        return res.data

    })


    // !new thunk for the trendoing


