


import { Router } from "express";
import { handleUserLogin, HandleUserRegistration } from "./logic/RegistrationLogics.js";
import { hashMiddleware } from "./middlewares/AuthenticationMiddlewares.js";

export const RegisterRoute=Router()

RegisterRoute.post("/api/coolcicks/v1/add_user",hashMiddleware,(req,res)=>{



HandleUserRegistration(req,res)

})


export const LoginRoute=Router()
LoginRoute.post('/api/coolcicks/v1/user_login',(req,res)=>{

    // ! FUNCTION TO HANDLE THE LOGIN LOGIC
    handleUserLogin(req,res)
})


