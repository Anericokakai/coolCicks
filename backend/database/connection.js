import mongoose from "mongoose";

export const connectToDataBase=async()=>{
    const connect=await mongoose.connect('mongodb://127.0.0.1:27017/cickscool')
    return connect
}