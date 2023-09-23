import React from 'react'
import "../../pages/card.css";
import cartAnime from "../../assets/images/cartanime.gif"
function PopUp({message}) {
  return (
    <div className='popUp'>
        <div className="popCard">
            <h2>{message}</h2>
  <div className="cartAnime">
  <img src={cartAnime} alt="" />
  </div>

        </div>
    </div>
  )
}

export default PopUp