import React, { useEffect, useState } from "react";
import Navigation from "../components2/Navigation";

import "../pages/card.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiCategories } from "../Thunks/Thunks";
import { AddItem, calculateTotals, removeItem } from "../slices/fetchApiSlice";
import axios from "axios";
import PopUp from "./Preloaders/PopUp";
function InspectPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiCategories());
  }, []);
  const [addCart, setAddCart] = useState(true);
  const [currentSelectedImg, setCurrentSelectedImg] = useState();
  const [selectedPrice, setSelectedPrice] = useState();
  const [SelectedColor, setSelectedColor] = useState();
  const[showPopUp,setShowPopUp]=useState(false)
  const[cartMessage,setCartMessage]=useState("")
  //! handle click events to set images

  // /inspect?image=${info?.images}&desc=${info?.shoe_Description}&name=${info?.shoe_name}&tags=${info?.tags}&color=${info?.color}&instock=${info?.inStock}&price=${info?.price}&purchase=${info?.purchases}
  const infoParams = new URLSearchParams(window.location.search);
  const singleData = infoParams.get("image");
  const desc = infoParams.get("desc");
  const name = infoParams.get("name");
  const tags = infoParams.get("tags");
  const color = infoParams.get("color");
  const instock = infoParams.get("instock");
  const price = infoParams.get("price");
  const purchase = infoParams.get("purchase");
  const id = infoParams.get("id");
  const catId = infoParams.get("catId");
  let tags_string = "";
  

  for (let x in tags) {
    tags_string += tags[x];
  }
  const image_array = singleData?.split(",");

  // ! handle click functionality to the small images
  const handleClick = (image, e) => {
    setCurrentSelectedImg(e.target);

    const large_image = document.querySelector(".wideViewImage");
    let newImage = document.createElement("img");
    newImage.src = image;
    large_image.innerHTML = "";

    large_image.appendChild(newImage);

    if (currentSelectedImg?.style) {
      currentSelectedImg.style.border = "";
    }
    e.target.style.border = "1px solid blue";
  };

  const { data, error, loading, cartItems, amount, total, parameter } =
    useSelector((state) => state.categoryApi);

  const colors = data?.colors;

  const handleColorChange = async (color_Filter, e) => {
    setSelectedColor(e.target);
    console.log(e.target);
    if (SelectedColor?.style) {
      SelectedColor.style.border = "";
      SelectedColor.className = "";
    }

    e.target.style.border = "3px solid green";

    e.target.className = "add";
  };

  const handlePrice = async (e) => {
    setSelectedPrice(e.target);
    console.log(e.target);
    if (selectedPrice?.style) {
      selectedPrice.style.border = "";
      selectedPrice.className = "";
    }
    e.target.style.border = "3px solid green";

    e.target.className = "price";
    const result = await axios.get(
      `http://localhost:7001/api/coolcicks/v1/filter_deep?id=${catId}`
    );
  };

  const addToCart = () => {
    let data = {
      price: price,
      amount: 1,
      image: image_array[0],
      _id: id,
    };
setCartMessage("item added to cart")
    setShowPopUp(true)
    setTimeout(() => {
      setShowPopUp(false)

    }, 2000);
    dispatch(AddItem(data));
    dispatch(calculateTotals());

    setAddCart(false);
  };

  useEffect(() => {
    cartItems?.forEach((item) => {
      if (item._id == id) {
        setAddCart(false);
      }
    });
  }, [dispatch]);
  console.log(addCart);

  const removeItemFromCart = () => {
    setCartMessage("item removed from cart")
    setShowPopUp(true)

    setTimeout(() => {
      setShowPopUp(false)
      
    }, 2000);
    dispatch(removeItem({ _id: id }));
    dispatch(calculateTotals());
    setAddCart(true);
  };

  const goBack=()=>window.history.back()
  return (
    <div className="InspectPage">
      <Navigation />
      <div className="back" onClick={ goBack}>
        <i className="fa-solid fa-left-long" id="back"></i>
      </div>
      {
        showPopUp &&<PopUp message={cartMessage}></PopUp>
      }

      <div className="inspectContainer">
        <div className="inspectImage">
          <div className="wideViewImage">
            <img src={image_array[0]} alt="wide image inspect" id="wideImage" />
          </div>
          <div className="small_images">
            {image_array.map((single_image) => (
              <img
                key={single_image}
                onClick={(e) => {
                  handleClick(single_image, e);
                }}
                className="imgs"
                src={single_image}
                alt=""
              />
            ))}
          </div>

          <div className="filters">
            {/* <h3 className="centerH">fillters</h3>
            <h4 className="center">filter by price</h4>
            <div className="priceFilter">
              <button className="pricebtn" onClick={(e) => handlePrice(e)}>
                {" "}
                lowest price
              </button>
              <button className="pricebtn" onClick={(e) => handlePrice(e)}>
                highest price
              </button>
            </div> */}
            {/* <div className="color_cont">
              <h4 className="center">filter by color</h4>
              <div className="colors">
                {colors?.map((single_color) => (
                  <button
                    key={single_color}
                    style={{ backgroundColor: single_color }}
                    onClick={(e) => handleColorChange(single_color, e)}
                  ></button>
                ))}
              </div>
            </div> */}
          </div>
          <div className="moreInfo">
            <h4>
              purchases Made: <span className="lightSpan">{purchase}</span>
            </h4>
            <h4>
              In stock :<span className="lightSpan">{instock}</span>
            </h4>
            <h4>
              color : <span className="lightSpan">{color}</span>
            </h4>
            <h4>
              Tags: <span className="lightSpan">{tags_string}</span>
            </h4>
          </div>
        </div>
        <div className="inspectdetails">
          <h2 className="headings">{name}</h2>
          <h3>
            price : <span className="priceSpan">{price}</span>
          </h3>
          <h3 className="headings">descriptions</h3>
          <p>{desc}</p>

          <div className="Add_tocart">
            <p>select size to add to cart</p>
            {addCart ? (
              <button className="cashOut secondCash" onClick={addToCart}>
                add to cart
              </button>
            ) : (
              <button
                className="cashOut secondCash"
                onClick={removeItemFromCart}
              >
                remove item from cart
              </button>
            )}
            <button className="cashOut secondCash"> order right now !</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InspectPage;
