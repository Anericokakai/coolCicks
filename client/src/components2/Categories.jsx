import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setParams } from '../slices/fetchApiSlice';
import { fetchApiCategories, fetchDataUnderCategory } from '../Thunks/Thunks';
import './componentsCss/categories.css'

function Categories() {
    const dispatch=useDispatch()
    const { data, error, loading ,cartItems,amount,total,parameter} = useSelector((state) => state.categoryApi);
    const { data2, error2, loading2 } = useSelector((state) => state.filteredApi);

   
    console.log(data.data)
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
          

    }
    console.log(parameter)
  return (
    <div className='categoryContainer'>
        <p>Filter by categories</p>
 <div 
 className="categories">
{
  categories &&  categories.map(single=>{
    return <button className='singleCategory' onClick={()=>fetchData(single.category_Name)} key={single._id}> { single.category_Name}</button>

    })
//    data&& data.data.map(category=>
//     //  
//     )
}

 </div>
    </div>
  )
}

export default Categories