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

// /inspect?image=${info?.images}&desc=${info?.shoe_Description}&name=${info?.shoe_name}&tags=${info?.tags}&color=${info?.color}&instock=${info?.inStock}&price=${info?.price}&purchase=${info?.purchases}
    const infoParams=new URLSearchParams(window.location.search)
    const singleData=infoParams.get("image")
    const desc=infoParams.get("desc")
    const name=infoParams.get('name')
    const tags=infoParams.get('tags')
    const color=infoParams.get('color')
    const instock=infoParams.get('instock')
    const price=infoParams.get('price')
    const purchase=infoParams.get('purchase')

    let tags_string = ''

    for(let x in tags){
      tags_string+=tags[x]
    }
const image_array= singleData?.split(',')
console.log(image_array)

   
    



  
    
            // ! handle click functionality to the small images
            const handleClick=(image,e)=>{
              
              const large_image=document.querySelector('.wideViewImage')
let newImage=document.createElement('img')
newImage.src=image
large_image.innerHTML=''
if(e.target.style.border!='none'){
  e.target.style.border='none'
}else{
  e.target.style.border='1px solid blue'
}


large_image.appendChild(newImage)


            }

  



 
  return (
    <div>
      <Navigation />

      <div className="inspectContainer">
        <div className="inspectImage">
          <div className="wideViewImage" >
            <img src={image_array[0]} alt="wide image inspect"  id="wideImage" />
          </div>
          <div className="small_images">
      {
        image_array.map(single_image=> <img key={single_image} onClick={(e)=>{handleClick(single_image,e)}}  className="imgs" src={single_image} alt="" />)
      }

           
          </div>

          <div className="moreInfo">
            <h4>purchases Made: <span>{purchase}</span></h4>
            <h4>In stock :<span>{instock}</span></h4>
            <h4>color : <span>{color}</span></h4>
            <h4>Tags: <span>{tags_string}</span></h4>


          </div>
        </div>
        <div className="inspectdetails">
            <h2 className="headings">
 {name}
            </h2>
            <p> price : <span>{ price}</span></p>
            <h3 className="headings">
                descriptions
            </h3>
            <p>{desc}</p>

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
