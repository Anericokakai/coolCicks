import React from "react";
import Categories from "../components2/Categories";
import Navigation from "../components2/Navigation";
import logo from "../assets/images/kicks/image4.jpg";
import logo2 from "../assets/images/kicks/i11.jpg";
import logo3 from "../assets/images/kicks/i2.jpg";
import logo4 from "../assets/images/kicks/i4.jpg";
import logo5 from "../assets/images/kicks/i5.jpg";
import logo6 from "../assets/images/kicks/i6.jpg";
import logo7 from "../assets/images/kicks/i7.jpg";
import logo8 from "../assets/images/kicks/i8.png";
import logo9 from "../assets/images/kicks/i10.jpg";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { AddItem, calculateTotals } from "../slices/fetchApiSlice";
import LandingPAge from "../components2/LandingPAge";
import Trending from "../components2/componentsCss/Trending";
function Home2() {

  // !add items to cart function
const dispatch=useDispatch()
  const addToCart=(item)=>{
  
dispatch(AddItem(item))
dispatch(calculateTotals())

  }


  const { data2 } = useSelector((state) => state.filteredApi);
 
  

  // ! function to tream the long arrays
  function treamSentence(string,n){

    return string?.length>n ?`${string.substring(0, n - 1)}....`:string



  }
  return (
    <div>
      <Navigation />
    
      <Categories />
      <div className="cardsHolder">
        {
          data2 && data2?.data?.map(singleData=>(

            <div className="card" key={singleData?._id}>
          <div className="shoeImage">
            <img src={singleData?.images[0]} alt="" />
          </div>
          <div className="shoeDesc">
            <h3>{singleData?.shoe_name }</h3>
            <div className="aboutShoe">
              <p className="desc">{treamSentence(singleData?.shoe_Description ,50)}</p>
            </div>
            <div className="shoeBottom">
              <span>
                <b>Ksh { singleData?.price }</b>
              </span>
              <span>
                <button className="addIcon" onClick={()=>{
                  addToCart(singleData)
                }}>
                  <small>add to cart</small>{" "}
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
          ))
        }
      </div>

      <Trending></Trending>
    </div>
  );
}

export default Home2;
