// !Middleware to validate the token before an admin is allowed to add a shoe

import { shoeCollection } from '../../../database/schemas/ShoeSchema.js'
import { categoryCollection } from '../../../database/schemas/categorySchema.js'
export const deleteItem=async(req,res)=>{
    try {
        const {id}=req.body
        const results= await shoeCollection.findByIdAndDelete(id)
        return res.status(200).json({message:"item was deleted successfully"})
    } catch (error) {
      return res.status(500).json({message:"internal server error"})  
    }


}

// !FUNCTION TO CREATE A NEW SHOE AND ADD TO THE DATABASE
export const Add_Shoe_Function=async(req,res)=>{

const  {name,description,price,images,tags,color,inStock,category,brand}=req.body
const imageArray= JSON.parse(images)
console.log(req.body)
const urls= imageArray?.map(img=>img.image.url)

try {
    // ! FIND THE CATEGORY AND GET ITS ID 
const category_id=await categoryCollection.findOne({category_Name:category})
if(!category_id)return res.status(400).json({message:"category not found"})
const id=category_id._id
// !create a new shoe in the data base 
const Add_new_shoe=await shoeCollection.create({
    shoe_name:name,
    shoe_Description:description,
    images:urls,
    tags,
    color,
    price,
    inStock,
    categoryId:id,
    ShoeBrand:brand
})
res.status(200).json({message:'product added succssesfully'})
    
} catch (error) {
    console.log(error)
    res.status(500).json({message:"internal server error", error:error})
    

}




}