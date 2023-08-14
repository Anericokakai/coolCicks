import React from 'react'
import { useState } from 'react'
import logo from '../assets/images/kicks/logo2.png'
import './componentsCss/Nav.css'
function Navigation() {
  //  !select the navigation 
const nav= document.querySelector(".Navigations")

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
               <li className='cartIcon'> <i class="fa-solid fa-cart-shopping"></i>
               
               <span className='count'>3</span>
               </li>
       <li>    { shownav?<i class="fa-solid fa-xmark" onClick={displayNav} ></i> :     <i class="fa-solid fa-bars" onClick={displayNav} ></i> }</li>


            </div>



            
        </ul>
       </nav>

    
  )
}

export default Navigation