import React from 'react'
import Categories from '../components2/Categories'
import Navigation from '../components2/Navigation'
import logo from '../assets/images/kicks/image4.jpg'
import logo2 from '../assets/images/kicks/i11.jpg'
import logo3 from '../assets/images/kicks/i2.jpg'
import logo4 from '../assets/images/kicks/i4.jpg'
import logo5 from '../assets/images/kicks/i5.jpg'
import logo6 from '../assets/images/kicks/i6.jpg'
import logo7 from '../assets/images/kicks/i7.jpg'
import logo8 from '../assets/images/kicks/i8.png'
import logo9 from '../assets/images/kicks/i10.jpg'
import './card.css'
function Home2() {
  return (
    <div>

      <Navigation/>
      <Categories/>
      <div className="cardsHolder">
      <div className="card">
      <div className="shoeImage">
        
        <img src={logo} alt="" />
      </div>
      <div className="shoeDesc">
        <h3>Nike Cosmic shoe</h3>
        <div className="aboutShoe">
          <span>Sustainable material</span>
          <span>Basketball</span>
          <span>3 colors</span>
        </div>
        <div className="shoeBottom">
          <span>
            <b>USD 400.00</b>
          </span>
          <span>
            <a href="#">Add to cart</a>
          </span>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="shoeImage">
        
        <img src={logo3} alt="" />
      </div>
      <div className="shoeDesc">
        <h3>Nike Cosmic shoe</h3>
        <div className="aboutShoe">
          <span>Sustainable material</span>
          <span>Basketball</span>
          <span>3 colors</span>
        </div>
        <div className="shoeBottom">
          <span>
            <b>USD 400.00</b>
          </span>
          <span>
            <a href="#">Add to cart</a>
          </span>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="shoeImage">
        
        <img src={logo2} alt="" />
      </div>
      <div className="shoeDesc">
        <h3>Nike Cosmic shoe</h3>
        <div className="aboutShoe">
          <span>Sustainable material</span>
          <span>Basketball</span>
          <span>3 colors</span>
        </div>
        <div className="shoeBottom">
          <span>
            <b>USD 400.00</b>
          </span>
          <span>
            <a href="#">Add to cart</a>
          </span>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="shoeImage">
        
        <img src={logo4} alt="" />
      </div>
      <div className="shoeDesc">
        <h3>Nike Cosmic shoe</h3>
        <div className="aboutShoe">
          <span>Sustainable material</span>
          <span>Basketball</span>
          <span>3 colors</span>
        </div>
        <div className="shoeBottom">
          <span>
            <b>USD 400.00</b>
          </span>
          <span>
            <a href="#">Add to cart</a>
          </span>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="shoeImage">
        
        <img src={logo5} alt="" />
      </div>
      <div className="shoeDesc">
        <h3>Nike Cosmic shoe</h3>
        <div className="aboutShoe">
          <span>Sustainable material</span>
          <span>Basketball</span>
          <span>3 colors</span>
        </div>
        <div className="shoeBottom">
          <span>
            <b>USD 400.00</b>
          </span>
          <span>
            <a href="#">Add to cart</a>
          </span>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="shoeImage">
        
        <img src={logo6} alt="" />
      </div>
      <div className="shoeDesc">
        <h3>Nike Cosmic shoe</h3>
        <div className="aboutShoe">
          <span>Sustainable material</span>
          <span>Basketball</span>
          <span>3 colors</span>
        </div>
        <div className="shoeBottom">
          <span>
            <b>USD 400.00</b>
          </span>
          <span>
            <a href="#">Add to cart</a>
          </span>
        </div>
      </div>
    </div>
      </div>
   
    </div>
  )
}

export default Home2