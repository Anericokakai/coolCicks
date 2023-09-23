import { Router } from "express"
import { handle_HomeRoute_postRequest } from "../logic/homeRouteLogic.js"
import { ValidateToken } from "../middlewares/AuthenticationMiddlewares.js"

export const add_category=Router()
add_category.post('/api/coolcicks/v1/categories',ValidateToken,(req,res)=>{
    // !handle logic for post
    handle_HomeRoute_postRequest(req,res)
    
})