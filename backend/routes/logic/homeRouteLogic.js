import { categoryCollection, testCollection } from "../../database/schemas/categorySchema.js"

// !MIDDLE WARE TO HANDLE THE  FILTERING API
const filters_middleware=(req,res,next)=>{

    const header =req.query.category
    if(!header){
        next()
    }else{


        // !filter the data  fill the pages of the same categories

        // const filteredData= await 
        
    }


}

export const handle_HomeRoute_getRequset=async(req,res)=>{
    
    // !destructure the category from the header
    const category =req.query.category||"sneakers"
// ! GET DATA
   try {
    
    const data=await categoryCollection.find().limit(50)
    res.status(200).json({
        data
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