import React from 'react';
import logo from "../assets/images/sport-shoe.png";
import like from "../assets/images/heart.png";
import search from "../assets/images/search.png";
import cart from "../assets/images/shopping-cart.png"
function ReusableNav() {
  return (
    <div className="navbar">
        <div className="navbar-top">
        
        <p>Just Landed. The shoe app. <a href="#">Learn More</a></p>

        

        <div className="login">
            <p>Sign In</p>
            <p>Join Us</p>
            <p>Help</p>
        </div>
        </div>

        <div className="navbar-bottom">
            <div className="logo">
                <img  src={logo} alt="logo" />
            </div>

            <div className="categories">
                <p>New releases</p>
                <p>Men</p>
                <p>Women</p>
                <p>Kids</p>
                <p>Sale</p>
                <p>Collections</p>
            </div>

            <div className="search">
                <img  src={search} alt="search" />
                <img  src={like} alt="liked" />
                <img src={cart} alt="" />
            </div>
        </div>

    </div>
    )
}

export default ReusableNav