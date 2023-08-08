import { testCollection } from "../../database/schemas/categorySchema.js"

export const handle_HomeRoute_getRequset=async(req,res)=>{
    
    // !destructure the category from the header
    const category =req.query.category||"sneakers"

    const data=await testCollection.find().limit(50)
    res.status(200).json({
        data
    })
    }
