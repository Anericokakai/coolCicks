import { searchCollection } from "../../database/schemas/SearchSchema.js"

export const SearchHelperFunction=async(req,res)=>{

    
  try {
    const id=req.query.id 

    const recentSeach= await searchCollection.find({user_Id:id})
    .sort({timeStamp:-1})
    .limit(5)
    .toArray()


    res.status.json({recentSeach})
  } catch (error) {
    res.status(500).json({message:'internal server error',error:error})
  }
    

}