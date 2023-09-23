import React from "react";
import "../pages/card.css";
function ReusableCard({ singleData }) {
  // ! function to tream the long arrays
  function treamSentence(string, n) {
    return string?.length > n ? `${string.substring(0, n - 1)}....` : string;
  }


  // ! redirect on click to inspect the product

  const redirectToInspect = (info) =>
    (window.location.href = `/inspect?image=${info?.images}&desc=${info?.shoe_Description}&name=${info?.shoe_name}&tags=${info?.tags}&color=${info?.color}&instock=${info?.inStock}&price=${info?.price}&purchase=${info?.purchases}&id=${info._id}&catId=${info.categoryId}`);
  // !  Cart functionalities for totals calculations
  return (
    <div key={singleData?._id}>
      <div
        className="card"
        key={singleData?._id}
        onClick={() => redirectToInspect(singleData)}
      >
        <div className="shoeImage">
          <img src={singleData?.images[0]} alt="" />
        </div>
        <div className="shoeDesc">
          <h3>{treamSentence(singleData?.shoe_name,18)}</h3>
          <div className="aboutShoe">
            <p className="desc">
              {treamSentence(singleData?.shoe_Description, 30)}
            </p>
          </div>
          <div className="shoeBottom">
            <span>
              <b>Ksh {singleData?.price}</b>
            </span>

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReusableCard;
