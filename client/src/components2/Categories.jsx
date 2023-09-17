import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setParams } from '../slices/fetchApiSlice';
import { fetchApiCategories, fetchDataUnderCategory } from '../Thunks/Thunks';
import './componentsCss/categories.css'

function Categories() {
    const dispatch=useDispatch()
    const { data, error, loading ,cartItems,amount,total,parameter} = useSelector((state) => state.categoryApi);
    const { data2, error2, loading2 } = useSelector((state) => state.filteredApi);

const btn= document.querySelector(".singleCategory")
   const categories=data.data


    useEffect(() => {
        dispatch(fetchApiCategories());
      }, [dispatch]);

    
    
            //   !fetch data of that category clicked
   
             //  ! redirect after click to the category page 
            // !  add more filters  on the ctegory page
    const handleRedirects=(category)=>{

      window.location.href=`/selectedCategory?category=${category}`

    }
    // if (loading2){
    //   return <div><h1>Loading ...</h1></div>
    // } else if (error){
    //   return <div> error </div>
    // }
    
  return (
    <div className='categoryContainer'>
        <h1 className='headings'>Filter by categories</h1>
 <div 
 className="categories">
{
  categories &&  categories.map(single=>{
    return <button className='singleCategory' onClick={()=>{
      handleRedirects(single.category_Name)
 
    }} key={single._id}> { single.category_Name}</button>

    })

}

 </div>


    </div>
  )
}

export default Categories