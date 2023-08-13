import mongoose,{Schema} from "mongoose";
const  userSchema=new Schema({
    userName:String,
    userEmail:{
        type:String,
        unique:true
    },
    user_adress:[
            {type:String}
        ],

    
    user_Phone:String,
    password:String,
},{
    collection:'users'
})
export const userCollection=mongoose.model('users',userSchema)