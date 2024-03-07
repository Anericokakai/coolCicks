import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FakeCategory from "../components/Preloaders/FakeCategory";
import { setParams } from "../slices/fetchApiSlice";
import { fetchApiCategories, fetchDataUnderCategory } from "../Thunks/Thunks";
import "./componentsCss/categories.css";

function Categories() {
  const dispatch = useDispatch();
  const { data, error, loading, cartItems, amount, total, parameter } =
    useSelector((state) => state.categoryApi);
  const { data2, error2, loading2 } = useSelector((state) => state.filteredApi);

  const btn = document.querySelector(".singleCategory");
  const categories = data.data;
  

  useEffect(() => {
    dispatch(fetchApiCategories());
  }, []);

  //   !fetch data of that category clicked

  //  ! redirect after click to the category page
  // !  add more filters  on the ctegory page
  const handleRedirects = (category, id) => {
    window.location.href = `/selectedCategory?category=${category}&catId=${id}`;
  };
  const fakeArray=[1,2,3,4,5,6,7,8]
  

  return (
    <div className="categoryContainer">
      <h1 className="headings">Filter by categories</h1>
      <div className="categories">
        {! loading &&categories &&
          categories.map((single) => {
            return (
              <button
                className="singleCategory"
                onClick={() => {
                  handleRedirects(single.category_Name, single?._id);
                }}
                key={single._id}
              >
                {" "}
                {single.category_Name}
              </button>
            );
          })}

          {
          loading&&  fakeArray?.map(eachFake=>{
            return <FakeCategory key={eachFake}></FakeCategory>
          })
          }
      </div>
    </div>
  );
}

export default Categories;
