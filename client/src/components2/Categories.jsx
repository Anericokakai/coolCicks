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
const [selectedCategory,setSelectedCategory]=useState('')
const btn= document.querySelector(".singleCategory")
   const categories=data.data


    useEffect(() => {
        dispatch(fetchApiCategories());
      }, [dispatch]);

    //   !fetch data of that category clicked
    const fetchData=(category)=>{
        const newUrl=new URL(window.location.href)

        newUrl.searchParams.set("category",category)
        window.history.pushState({},"",newUrl)

        // fetch the data of the selected category
        
             dispatch(fetchDataUnderCategory(category));
if(btn.classList.contains("clicked")){
  btn.classList.remove("clicked")
}else{
  btn.classList.add("clicked")
}
          

    }
    // if (loading2){
    //   return <div><h1>Loading ...</h1></div>
    // } else if (error){
    //   return <div> error </div>
    // }
    
  return (
    <div className='categoryContainer'>
        <h1>Filter by categories</h1>
 <div 
 className="categories">
{
  categories &&  categories.map(single=>{
    return <button className='singleCategory' onClick={()=>{fetchData(single.category_Name)
    setSelectedCategory(single.category_Name)
    }} key={single._id}> { single.category_Name}</button>

    })

}

 </div>

 <p> { selectedCategory && selectedCategory}</p>
    </div>
  )
}

export default Categories