import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchApiCategories=createAsyncThunk('myApi/fetchcategories',async()=>{
    const response= await axios.get("http://localhost:7001/api/coolcicks/v1/categories")
    return response.data
})

