import React from 'react'
import "../pages/card.css"
function ReusableCard({singleData}) {
     // ! function to tream the long arrays
  function treamSentence(string,n){

    return string?.length>n ?`${string.substring(0, n - 1)}....`:string



  }

  // ! redirect on click to inspect the product

const redirectToInspect=(info)=>window.location.href=`/inspect?image=${info?.images}&desc=${info?.shoe_Description}&name=${info?.shoe_name}&tags=${info?.tags}&color=${info?.color}&instock=${info?.inStock}&price=${info?.price}&purchase=${info?.purchases}`
// !  Cart functionalities for totals calculations 
  return (
    <div>
           <div className="card" key={singleData?._id} onClick={()=>redirectToInspect(singleData)}>
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

              {/* todo  add to cart will be added on another page */}
              {/* <span>
                <button className="addIcon" onClick={()=>{
                  addToCart(singleData)
                }}>
                  <small>add to cart</small>{" "}
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </span> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ReusableCard