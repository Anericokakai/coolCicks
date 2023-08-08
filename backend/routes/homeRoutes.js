import { Router } from "express";
import { handle_HomeRoute_getRequset } from "./logic/homeRouteLogic.js";

export const default_shopingRoutes= Router();
default_shopingRoutes.get('/api/coolcicks/v1/categories',(req,res)=>{

    // !handle the logic behind this route
    

    handle_HomeRoute_getRequset(req,res)
})