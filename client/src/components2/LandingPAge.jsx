import React from "react";
import one from "../assets/images/2b.png";

function LandingPAge() {
  return (
    <div className="landingPage">
      <div className="text">
        <h1 className="landingText">
   
          Dior x Air Jordan 1 High 
        </h1>
        <p>
          One of the most anticipated launches of the year, the Dior x Jordan 1
          High OG Grey is the first collaboration from the luxury-fashion
          powerhouse and sportswear giant.</p>
      </div>
      <div className="image">
        <img src={one} alt="" />
      </div>
    </div>
  );
}

export default LandingPAge;
