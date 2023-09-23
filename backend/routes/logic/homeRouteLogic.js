import { categoryCollection, testCollection } from "../../database/schemas/categorySchema.js"
import { shoeCollection } from "../../database/schemas/ShoeSchema.js";



export const handle_HomeRoute_getRequset=async(req,res)=>{

     // ! categories randomly selected
     const randomcategoriesFromDb = await categoryCollection.distinct(
        "category_Name"
      );
  
      // !loop through the categories
      let randomCategory = [];
      randomcategoriesFromDb.forEach((single_category) => {
        randomCategory.push(single_category);
      });
  
      const randomCategoryNumber = Math.floor(
        Math.random() * randomCategory.length
      );
    
    // !destructure the category from the header
    const category =req.query.category||randomCategory[randomCategoryNumber]
// ! GET DATA
   try {
    const colors = await shoeCollection.distinct("color");
    const data=await categoryCollection.find()
    res.status(200).json({
        data,colors
    })
   } catch (error) {
    res.status(500).json({message:'internal server error',error:error})
    
   }

    }

    



    //! POST DATA
export const handle_HomeRoute_postRequest=async(req,res)=>{
    
    const category=req.body.category
    try {
        const add_category= await categoryCollection.create({
            category_Name:category
        })
        res.status(200).json({"message":"category Created successfully"})
    } catch (error) {
        res.status(500).json({message:"failed to create a new category !"})
        
    }
   
    

}