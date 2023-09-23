import React, { useEffect } from "react";
import Categories from "../components2/Categories";
import Navigation from "../components2/Navigation";
import ReusableCard from "../components/ReusableCard";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, calculateTotals } from "../slices/fetchApiSlice";

import Trending from "../components2/componentsCss/Trending";
import ReusableTrends from "../components/ReusableTrends";
import { fetchDataUnderCategory ,fetch_data_underFilters} from "../Thunks/Thunks";
import Preloader from "../components/Preloaders/Preloader";
import ReactPaginate from "react-paginate";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import './paginate.css'
import { useState } from "react";

function Home2() {
  
const[limitedArray,setlimitedArray]=useState([])
  // !add items to cart function
const dispatch=useDispatch()

  const addToCart=(item)=>{
  
dispatch(AddItem(item))
dispatch(calculateTotals())

  }

  // !random  home page



  const { data2 } = useSelector((state) => state.filteredApi);
  const { data, error, loading ,cartItems,amount,total,parameter} = useSelector((state) => state.categoryApi);
  
  const categories=data?.data
  let categoryArray=[]
  categories?.forEach(single_one=>{
    categoryArray.push(single_one?.category_Name)

  })
  let prelodArray=[1,2,3,4,5,6,7,8,9,10,11,12]



const limit=12
  useEffect(()=>{
    let randomIndex=Math.floor(Math.random()*categoryArray.length)
    
const category=categoryArray[randomIndex]
  

     dispatch(fetchDataUnderCategory(category));

     setlimitedArray(data2?.data?.slice(0,limit))
  },[])

  


  function handlePageChange(e) {
    const startIndex=e.selected*limit
    console.log(startIndex)
    const endIndex=startIndex+limit
  setlimitedArray(  data2?.data?.slice(startIndex,endIndex))
    console.log(limitedArray)
  }

  const noOfPages=Math.ceil(data2?.data?.length/limit)
  return (
    <div>
      <Navigation />

      
    
      <Categories />


      <div className="cardsHolder">
        
        {
          loading && prelodArray.map(singleLoader=>{
    return <Preloader key={singleLoader} ></Preloader>
          }) 
          
        }
        {
           !loading &&limitedArray.map(singleData=>{

           return <ReusableCard singleData={singleData} key={singleData._id}></ReusableCard>
           })
        }
      </div>
      
      
   <div className="paginate">
   <ReactPaginate
            activeClassName={"item active "}
            breakClassName={"item break-me "}
            breakLabel={"..."}
            containerClassName={"pagination"}
            disabledClassName={"disabled-page"}
            marginPagesDisplayed={5}
            nextClassName={"item next "}
            nextLabel={
              <ArrowForwardIosIcon style={{ fontSize: 18, width: 150 }} />
            }
            onPageChange={handlePageChange}
            pageCount={noOfPages}
            pageClassName={"item pagination-page "}
            pageRangeDisplayed={2}
            previousClassName={"item previous"}
            previousLabel={
              <ArrowBackIosIcon style={{ fontSize: 18, width: 150 }} />
            }
          />
   </div>

      <Trending></Trending>

      {/* TRENDING CATEGORIES */}

      {
        data && data?.data?.map(singleData=>{

          return  <ReusableTrends singlecategory={singleData} key={singleData._id}/>

        })
      }

      
    </div>
  );
}

export default Home2;
