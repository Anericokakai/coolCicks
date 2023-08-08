import mongoose, {Schema} from 'mongoose'

const categoryShema=new Schema({


age:String,


company:{
    email:String,
    phone:String,
    title:String,


},

eyeColor:String,

favoriteFruit:String,

gender:String,

index:Number,

isActive:Boolean,

name:String,

registered:String,

tags:{
    Array
}

},
{
    
    collection:'test'
})

export const testCollection=mongoose.model('test',categoryShema)