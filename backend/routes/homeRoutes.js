import { Router } from "express";
import { handle_HomeRoute_getRequset, handle_HomeRoute_postRequest } from "./logic/homeRouteLogic.js";
import { searchByInputHelper } from "./logic/Search.js";
import { ValidateToken } from "./middlewares/AuthenticationMiddlewares.js";
import { FilterbyTrending, filters_middleware, filterTrendingMidddleWare } from "./middlewares/Filtermiddleware.js";


// TODO API ONE 
// !/api/coolcicks/v1/categories

export const default_shopingRoutes= Router();
// GET API DATA
default_shopingRoutes.get('/api/coolcicks/v1/categories',(req,res)=>{

    // !handle the logic behind this route
    

    handle_HomeRoute_getRequset(req,res)
})

// !fetch the detailed slected category

export const fetchDetailed_category=Router()

fetchDetailed_category.get('/api/coolcicks/v1/categoryProduct',filters_middleware,(req,res)=>{
    
})


// !FILTER VIA THE TRENDING  CATEGORIES

export const fetchTrendingData_api=Router();
fetchTrendingData_api.get("/api/coolcicks/v1/trendsUnderCategory",FilterbyTrending,(req,res)=>{

})


// !api to fetch only trending data by default
export const fetch_by_trending_only=Router()

fetch_by_trending_only.get("/api/coolciks/v1/fetchByTrend",filterTrendingMidddleWare, (req,res)=>{


})

// ! search bar api to filter by recent searches of the user
export const SearchHistoryApi=Router()

SearchHistoryApi.get("/api/coolciks/v1/search_history",ValidateToken, async(req,res)=>{



})

// !search from the database by any one who is not a user

export const searchByInput=Router()
searchByInput.get('/api/coolciks/v1/search',async(req,res)=>{

    searchByInputHelper(req,res)

})

// !POST DATA 
default_shopingRoutes.post('/api/coolcicks/v1/categories',(req,res)=>{
    // !handle logic for post
    handle_HomeRoute_postRequest(req,res)
    
})


