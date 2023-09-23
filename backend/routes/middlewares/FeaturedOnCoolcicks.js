import { shoeCollection } from "../../database/schemas/ShoeSchema.js"

export const featuredByCoolcicks=async(req,res)=>{


    try {
      const data=  await shoeCollection.aggregate([
            {
                $match:{
                    tags:"featured"
                }

            }
        ])

        res.status(200).json({data})
        
    } catch (error) {
        res.status(500).json({message:"internal server error",error:error})
    }


}