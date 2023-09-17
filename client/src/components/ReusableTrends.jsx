



import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetch_data_under_trending } from '../Thunks/Thunks'
import ReusableCard from './ReusableCard'

function ReusableTrends({singlecategory}) {

  const[trendings,settrendings]=useState([])
  const{trendingData}=useSelector((store)=>store.trendsApi)
const dispatch=useDispatch()


useEffect( async()=>{
const res=  await axios.get(`http://localhost:7001/api/coolciks/v1/fetchByTrend?category=${singlecategory.category_Name}`)
  // dispatch(fetch_data_under_trending(singlecategory.category_Name))
  
   settrendings(res.data.data)
},[])







  return (
    <div className='reusable_trends_container'>

<h1 className='headings'>Trending in {singlecategory?.category_Name} </h1>
<div className="cardsHolder">
  {
    trendings.map(singleData=>{ 
   
      return <ReusableCard singleData={singleData} key={singleData._id}/>
}

    )
  }

</div>

    </div>
  )
}

export default ReusableTrends