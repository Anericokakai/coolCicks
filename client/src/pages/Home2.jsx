import React, { useEffect } from "react";
import Categories from "../components2/Categories";
import Navigation from "../components2/Navigation";
import ReusableCard from "../components/ReusableCard";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, calculateTotals } from "../slices/fetchApiSlice";
import LandingPAge from "../components2/LandingPAge";
import Trending from "../components2/componentsCss/Trending";
import ReusableTrends from "../components/ReusableTrends";
import { fetchDataUnderCategory ,fetch_data_underFilters} from "../Thunks/Thunks";
function Home2() {
  

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
  categories.forEach(single_one=>{
    categoryArray.push(single_one?.category_Name)

  })



  useEffect(()=>{
    let randomIndex=Math.floor(Math.random()*categoryArray.length)
    console.log(randomIndex)
const category=categoryArray[randomIndex]
  

     dispatch(fetchDataUnderCategory(category));
  },[])

  return (
    <div>
      <Navigation />

      
    
      <Categories />
      <div className="cardsHolder">
        {
          data2 && data2?.data?.map(singleData=>{

           return <ReusableCard singleData={singleData} key={singleData._id}></ReusableCard>
           })
        }
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
