import mongoose,{Schema} from "mongoose";

const purchasesSchema= new Schema({
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'users'
    },
    shoe_id:{
        type:Schema.Types.ObjectId,
        ref:'shoes'
    },
    category_id:{
        type:Schema.Types.ObjectId,
        ref:'categories'
    },
    payment_code:String,

},
{
    collection:'purchases'
})
export const purchasesCollection=mongoose.model('purchases',purchasesSchema)

