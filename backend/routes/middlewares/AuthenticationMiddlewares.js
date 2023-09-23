import  jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
dotenv.config()
 export const ValidateToken=async(req,res,next)=>{

    const {authorization}=req.headers
    
    // !split

    const bearer=authorization.split(' ')
    const token =bearer[1]

    const hash_key=process.env.HASH_KEY

    

    // ! VALIDATE TOKEN OF THE USER 
    const valid_token=await jwt.verify(token,hash_key,(err,authdata)=>{
        if(err){
            return res.status(403).json({message:'unauthorized access ,service denied '})
  
        }else{
            next()
        }
    })





}

// !create token  and hash password middleware
 export const hashMiddleware=async(req,res,next)=>{
    const {password}=req.body

    try {
        
        const hashed_password = await  bcrypt.hash(password,12)

req.hashedPass=hashed_password
next()
    
    } catch (error) {
        res.status(500).json({message:"internal server error",error:error})
        
    }
}


