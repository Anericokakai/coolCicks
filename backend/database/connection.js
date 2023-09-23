import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const connectToDataBase=async()=>{
    const connect=await mongoose.connect(process.env.MONGO)
    return connect
}