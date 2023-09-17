
import { shoeCollection } from "../../database/schemas/ShoeSchema.js";

export const searchByInputHelper = async (req, res) => {
try {
    
    const query = req.query.q.toLowerCase()


    const results = await shoeCollection
      .find({ shoe_name: { $regex: query, $options: "i" } })
      .limit(8)
     
     
      res.status(200).json({results})
  
} catch (error) {
    res.status(500).json({message:'internal server error',error:error})
    
}

};
