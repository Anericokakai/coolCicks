import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "../components2/Navigation";
import { fetchDataUnderCategory } from "../Thunks/Thunks";
import ReusableCard from "./ReusableCard";
import "../components2/componentsCss/categories.css";
import axios from "axios";
import notsvg from "../assets/images/not.png";

import {
  setNewData,
  setselectedColorFilter,
  setselectedPriceFilter,
} from "../slices/fetchFiltered";
import Preloader from "./Preloaders/Preloader";
function EachCategory() {
  const [selectedPrice, setSelectedPrice] = useState();
  const [SelectedColor, setSelectedColor] = useState();
  const [data_confirm, setDatacornfirm] = useState(false);
  const currentUrl = window.location.href;

  const paramsContainer = new URLSearchParams(window.location.search);
  const [loading3, setloading3] = useState(false);
  const category = paramsContainer.get("category");

  const catId = paramsContainer.get("catId");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataUnderCategory(category));
  }, [category]);

  // !select the data from the redux store

  const { data2, loading2, selectedColorFilter, selectedPriceFilter } =
    useSelector((state) => state.filteredApi);
  const data_card = data2?.data;

  // !redirect to previous page
  const redirectBack = () => window.history.back();
  const { data } = useSelector((state) => state.categoryApi);

  const colors = data?.colors;

  const handleColorChange = async (color_Filter, e) => {
    setSelectedColor(e.target);
    dispatch(setselectedColorFilter(color_Filter));
    console.log(e.target);
    if (SelectedColor?.style) {
      SelectedColor.style.border = "";
      SelectedColor.className = "";
    }

    e.target.style.border = "3px solid green";
    e.target.className = "selected_color";
    setloading3(true);
    await axios
      .get(
        `http://localhost:7001/api/coolcicks/v1/filter_deep?id=${catId}&price=${selectedPriceFilter}&color=${color_Filter}`
      )
      .then((result) => {
        dispatch(setNewData(result.data));
        console.log(result.data.data.length == 0);
        setloading3(false);
        if (result.data.data.length == 0) {
          setDatacornfirm(true);
        } else {
          setDatacornfirm(false);
        }
      });
  };

  const handlePrice = async (e, price) => {
    e.target.id = `${price}`;
    setDatacornfirm(false);
    setSelectedPrice(e.target);
    await dispatch(setselectedPriceFilter(price));
    console.log(e.target);
    if (selectedPrice?.style) {
      selectedPrice.style.border = "";
      selectedPrice.className = "";
    }
    e.target.style.border = "3px solid green";
    e.target.style.color = "white";
    e.target.style.boxShadow =
      "0px 20px 25px -5px rgba(0,0,0,0.1) , 0px 10px 10px -5px rgba(0,0,0,0.04)";
    e.target.className = `price`;
    setloading3(true);
    await axios
      .get(
        `http://localhost:7001/api/coolcicks/v1/filter_deep?id=${catId}&price=${price}`
      )
      .then((result) => {
        dispatch(setNewData(result.data));
        setloading3(false);
      });
  };

  // preloader
  let prelodArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      <Navigation />
      <p className="prevoiusHeading" onClick={redirectBack}>
        {" "}
        <i className="fa-solid fa-angles-left"></i> previous page
      </p>
      <h1 className="headings"> {category}</h1>
      <div className="filters">
        <h4 className="filter_heading">filters </h4>
        <div className="colorsCont">
          {colors?.map((single_color, index) => (
            <button
              className="colorbtn"
              key={index}
              style={{ backgroundColor: single_color }}
              onClick={(e) => handleColorChange(single_color, e)}
            ></button>
          ))}
        </div>
        <div className="priceFilter">
          <button onClick={(e) => handlePrice(e, -1)}>highest price</button>
          <button onClick={(e) => handlePrice(e, 1)}>Lowest price</button>
        </div>
      </div>
      <div className="cardsHolder">
        {loading2 &&
          prelodArray.map((singleLoader) => {
            return <Preloader key={singleLoader}></Preloader>;
          })}
        {loading3 &&
          prelodArray.map((singleLoader) => {
            return <Preloader key={singleLoader}></Preloader>;
          })}
        {!loading2 &&
          data_card != [] &&
          data_card?.map((singleData) => {
            return <ReusableCard singleData={singleData} key={singleData} />;
          })}
      </div>
      {!loading2 && data_confirm && (
        <div className="itemNotFound">
          <img src={notsvg} alt="" />
          <h1>item not found</h1>
        </div>
      )}
    </div>
  );
}

export default EachCategory;
