
import mongoose,{Schema, Types} from "mongoose";
const search_Schema= new Schema({
    user_Id:{
        type:Types.ObjectId
    },
    search:String,
    timeStamp:Date

},{
    collection:"searchHistory"
})

   export const searchCollection=mongoose .model("searchHistory",search_Schema)