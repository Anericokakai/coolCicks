import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchApiCategories } from "../Thunks/Thunks"


function Home() {
  console.log('anerico kakai')
  const dispatch=useDispatch()
  const {data,error,loading}=useSelector(state=>state.categoryApi)
  useEffect(()=>{
    dispatch(fetchApiCategories())

  },[dispatch])
  console.log(data);
 
if(error){
  return <div>
    <h1>Network error</h1>
  </div>
}
  
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home