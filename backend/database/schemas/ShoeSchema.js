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
    purchases:{
        type:Number,
        default:0
    },
    tags:[
        {
            type:String
        }
    ],
    color:String,

    amount:{
        type:Number,
        default:1
    },
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