import mongoose,{Schema} from "mongoose";

const ShoeShema=new Schema({
    shoe_name:String,
    shoe_Description:String,
    price:String,
    images:[
        {
            type:String
        }
    ],
    purchases:Number,
    tags:[
        {
            type:String
        }
    ],
    color:String,

    inStock:Number,
    ShoeBrand:String,
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'categories'
    }
},{
    collection:'shoes'

})
export const shoeCollection=mongoose.model('shoes',ShoeShema)