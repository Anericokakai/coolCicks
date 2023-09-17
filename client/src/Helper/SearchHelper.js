
import axios from "axios";


export const SearchItem=async(query,setLoadingItems)=>{

    setLoadingItems(true)
    const results= await axios.get(`http://localhost:7001/api/coolciks/v1/search?q=${query}`)
    return results.data
}