import React from 'react'
import { useState } from 'react'
import logo from '../assets/images/kicks/logo2.png'
import Cart from './componentsCss/Cart'
import './componentsCss/Nav.css'
function Navigation() {
  //  !select the navigation 
const nav= document.querySelector(".Navigations")
const [showCart,setShowCart]=useState(false)
  const [shownav,setshowNav]=useState(false)
  const displayNav=()=>{
    if(!shownav){
      setshowNav(true)
  

    }else{
      setshowNav(false)
      nav.classList.toggle("showNav")
 
    }

  }
  if(shownav){
    nav.classList.toggle("showNav")

  }

  // ! HANDLE SHOW  AND HIDE NAV

  const displayCart=()=>{
  if(!showCart)
{
  setShowCart(true)
}else{
  setShowCart(false)
  cartBox.classList.toggle("showCart")
}

  }
const cartBox= document.querySelector('.cartbox')
  if(showCart){
    cartBox.classList.toggle("showCart")
    
    
  }
   
 


  return (
   
       <nav className='nav'>
        <div className="logoImage">
            <img src={logo} alt="" />
        </div>
        <ul className='uls'>
            <div className='Navigations'>
            <i class="fa-solid fa-left-long" onClick={displayNav}></i>
            <li> Man</li>
            <li>Woman</li>
            <li>Kids</li>
            <li>Collection</li>
            <li>contacts</li>
            </div>
            <div className='carts'>
               <li className='searchIcon'> <i class="fa-solid fa-magnifying-glass"></i></li> 
               <li className='cartIcon' onClick={displayCart}> <i class="fa-solid fa-cart-shopping"></i>
               
               <span className='count'><small >30</small></span>
               </li>
       <li>    { shownav?<i class="fa-solid fa-xmark" onClick={displayNav} ></i> :     <i class="fa-solid fa-bars" onClick={displayNav} ></i> }</li>


            </div>
            <div className="cartbox">
              <div className="cartActions">
              <i class="fa-solid fa-arrow-right" onClick={displayCart }></i>
                <strong>Cart</strong>
                <button className='clearBtn'> clear <i class="fa-solid fa-ban"></i></button>
              </div>
              <Cart></Cart>
            </div>




            
        </ul>
       </nav>

    
  )
}

export default Navigation