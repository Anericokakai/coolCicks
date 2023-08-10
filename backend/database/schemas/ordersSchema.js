import mongoose,{Schema} from "mongoose";

const ordersSchema=new Schema({
user_id:{
    type:Schema.Types.ObjectId,
    ref:'users'
},
Shoe_id:{
    type:Schema.Types.ObjectId,
    ref:'shoes'
},
user_adress:{
    type:Schema.Types.ObjectId,
    ref:'adresses'
}



},{
    collection:'order'
})

const orderCollection=mongoose.model('order',ordersSchema)