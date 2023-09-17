import React from "react";
import Navigation from "../components2/Navigation";
import nike1 from "../assets/images/kicks/i1.jpg";
import nike2 from "../assets/images/kicks/nike1/2.png";
import nike3 from "../assets/images/kicks/nike1/3.png";
import nike4 from "../assets/images/kicks/nike1/4.png";
import nike5 from "../assets/images/kicks/nike1/5.png";
import '../pages/card.css'
function InspectPage() {

    //! handle click events to set images 


  document.addEventListener('DOMContentLoaded',()=>{
    alert("loaded")
    const small_images=document.querySelectorAll('.small_images img')
  const large_image=document.querySelector('.wideViewImage')
  let previousSelectedImg=small_images[0]
  console.log(large_image);
  console.log(small_images);
       // !add click functionality for small images
       small_images?.forEach((one)=>{
  

        one.addEventListener('click',function () {

          


            one.style.borderRadius='10px'
            const newImg=document.createElement("img")
            newImg.src=one.src
            large_image.innerHTML=''
             large_image.append(newImg)
             if(previousSelectedImg){
              previousSelectedImg.style.border='none'
             }
             one.style.border="1px solid red"
             previousSelectedImg=small_images
          })
            })

  })



 
  return (
    <div>
      <Navigation />

      <div className="inspectContainer">
        <div className="inspectImage">
          <div className="wideViewImage" >
            <img src={nike1} alt="wide image inspect"  id="wideImage" />
          </div>
          <div className="small_images">
            <img src={nike1} alt="" />

            <img src={nike2} alt="" />

            <img src={nike3} alt="" />

            <img src={nike4} alt="" />

            <img src={nike5} alt="" />
          </div>
        </div>
        <div className="inspectdetails">
            <h2 className="headings">
            PUMA mens Redon Bungee Lace Up Sneakers
            </h2>
            <p> price :KES5,177.81 - KES8,064.99</p>
            <h3 className="headings">
                descriptions
            </h3>
            <p>Lightweight and slim, these are driving shoes just like the ones Formula 1 drivers wear. While comfortable, I wouldn't advise you walk around a mall or any really long distance. Great for driving as you connect better to the 3 pedals (manual transmission, of course). Fit well</p>

<div className="Add_tocart">
    <p>select size to add to cart</p>
    <button className="cashOut secondCash"> add to cart</button>
    <button className="cashOut secondCash"> order right now !</button>
</div>
        </div>
      </div>
    </div>
  );
}

export default InspectPage;
