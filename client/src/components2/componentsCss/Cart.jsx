import React from 'react'
import './Nav.css'
import test from '../../assets/images/kicks/nike1/3.png'
function Cart() {
  return (
    <div className='cartShoppingList'>
        <div className='selectedItem'>
            <div className="itemImage">
                <img src={test} alt="" />
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
  )
}

export default Cart