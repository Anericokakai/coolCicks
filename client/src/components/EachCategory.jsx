import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../components2/Navigation'
import { fetchDataUnderCategory } from '../Thunks/Thunks'
import ReusableCard from './ReusableCard'
import "../components2/componentsCss/categories.css"
function EachCategory() {


    const [selectedCategory,setSelectedCategory]=useState('')
    const paramsContainer=new URLSearchParams(window.location.search)
   
const category=paramsContainer.get("category")


const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchDataUnderCategory(category));
        setSelectedCategory(category)
    },[category])


    // !select the data from the redux store 

    const { data2 } = useSelector((state) => state.filteredApi);
    const data=data2?.data

   
    // !redirect to previous page
    const redirectBack=()=>window.history.back()
 
 
  return (
    <div>
        <Navigation/>
        <p className='prevoiusHeading' onClick={redirectBack} > <i className='fa-solid fa-angles-left'></i>  previous page</p>
        <h1 className='headings'> { selectedCategory}</h1>
        <div className='cardsHolder'>
            {
             data &&   data?.map(singleData=>{
return <ReusableCard singleData={singleData}/>
                })
            }

        </div>
        
    </div>
  )
}

export default EachCategory