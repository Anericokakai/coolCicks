import mongoose,{Schema} from "mongoose";

const adressesSchema=new Schema({
    county:String,
    street:String,
    shipmentFee:Number,
},{
    collection:'adresses'
})
export const adressesCollection=mongoose.model('adresses',adressesSchema)