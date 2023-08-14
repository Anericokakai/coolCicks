import React from "react";
import "./Nav.css";
import test from "../../assets/images/kicks/nike1/3.png";
import img2 from "../../assets/images/kicks/image4.jpg";
import img3 from "../../assets/images/kicks/i1.jpg";
function Cart() {
  return (
    <div className="cartShoppingList">
      <div className="selectedItem">
        <div className="itemImage">
        <div className="cartImage">
           <img src={test} alt="" />
           </div>
          <div className="desc">
            <p>Nike SB Danks</p>
            <p>$20</p>
          </div>
        </div>
        <div className="AddItem">
          <i class="fa-solid fa-minus"></i>
          <p>1</p>
          <i class="fa-solid fa-plus"></i>
        </div>
      </div>
      <div className='selectedItem'>
            <div className="itemImage">
           <div className="cartImage">
           <img src={img2} alt="" />
           </div>
                <div className="desc">
                <p>Nike SB Danks</p>
                <p>$20</p>
                </div>
            </div>
            <div className="AddItem">
            <i class="fa-solid fa-minus"></i>
            <p>1</p>  
            <i class="fa-solid fa-plus"></i>


            </div>


        </div>
        <div className='selectedItem'>
            <div className="itemImage">
           <div className="cartImage">
           <img src={img3} alt="" />
           </div>
                <div className="desc">
                <p>Nike SB Danks</p>
                <p>$20</p>
                </div>
            </div>
            <div className="AddItem">
            <i class="fa-solid fa-minus"></i>
            <p>1</p>  
            <i class="fa-solid fa-plus"></i>


            </div>


        </div>
       
        
    </div>
  );
}

export default Cart;
