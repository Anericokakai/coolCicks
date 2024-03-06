import { userCollection } from "../../database/schemas/userSchema.js"
import dotenv from 'dotenv'
import Jwt from "jsonwebtoken"
import bcryptjs from 'bcryptjs'
// ! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ! REGISTER ROUTE LOGIC FUNCTION FPR A NEW USER
export const HandleUserRegistration=async(req,res)=>{
    const {name,email,phone}=req.body

const hashedPass= req.hashedPass
    try {
        // !check if the user exist already 
        const userExists= await userCollection.findOne({userEmail:email})
        if(userExists) return res.status(403).json({message:"user already exist"})

        const  newUser=await userCollection.create({
            userName:name,
            user_Phone:phone,
            userEmail:email,
           
            password:hashedPass
        })
res.status(200).json({message:'user created successfully',user:newUser})
        
    } catch (error) {
        res.status(500).json({message:"internal server error",error:error})
        
    }

}

// ! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ! LOGIN LOGIC 

export const handleUserLogin=async(req,res)=>{

    const hash_key=process.env.HASH_KEY
    const refresh_key=process.env.REFRESH_HASH
    const{email,password}= req.body
    // !find the user with that email
    console.log(email,password)
  
    try {
        
        const user_exist=await userCollection.findOne({userEmail:email})

        if(!user_exist) return res.status(400).json({message:"invalid user credentials"})
      
        const dbPass=user_exist.password

        // ! validate the passord
        const valid_password=  await  bcryptjs.compare(password,dbPass)

        if(!valid_password)return res.status(403).json({message:"invalid user credentials"})
      

        // !create a token and a refresh token
        const token=await Jwt.sign({email:email},hash_key)
        const refreshToken=await Jwt.sign({email:email},refresh_key)
        
        // !send the details to the client

        res.status(200).json({
            token:token,
            refreshToken:refreshToken,
            user_id:user_exist._id
        })


    } catch (error) {
        
    }
    
}