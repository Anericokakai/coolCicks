import { Router } from "express";
import { handle_HomeRoute_getRequset, handle_HomeRoute_postRequest } from "./logic/homeRouteLogic.js";
import { filters_middleware } from "./middlewares/Filtermiddleware.js";


// TODO API ONE 
// !/api/coolcicks/v1/categories

export const default_shopingRoutes= Router();
// GET API DATA
default_shopingRoutes.get('/api/coolcicks/v1/categories',filters_middleware,(req,res)=>{

    // !handle the logic behind this route
    

    handle_HomeRoute_getRequset(req,res)
})



// !POST DATA 
default_shopingRoutes.post('/api/coolcicks/v1/categories',(req,res)=>{
    // !handle logic for post
    handle_HomeRoute_postRequest(req,res)
    
})


