import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_data_under_trending } from "../Thunks/Thunks";
import ReusableCard from "./ReusableCard";

import Preloader from "./Preloaders/Preloader";
import { setTrendingData } from "../slices/FetchTrendingsSlice";

function ReusableTrends({ singlecategory }) {
  const [paginateArray, setPaginateArray] = useState([]);
  const [loadingTrends, setloadingtrends] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetcDatas() {
      try {
        setloadingtrends(true);
        await axios
          .get(
            `https://coolcicks.onrender.com/api/coolciks/v1/fetchByTrend?category=${singlecategory.category_Name}`
          )
          .then((res) => {
            const result1 = res.data.data;
            dispatch(setTrendingData(res.data.data));

            setPaginateArray(result1);

            setloadingtrends(false);
          });

        // dispatch(fetch_data_under_trending(singlecategory.category_Name))
      } catch (error) {
        console.log(error);
      }
    }
    fetcDatas();
  }, [singlecategory.category_Name]);

  // !PRELOADER IMPLIMENTATION
  const preloaderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="reusable_trends_container">
      <h1 className="headings">Featured in {singlecategory?.category_Name} </h1>
      <div className="cardsHolder">
        {loadingTrends &&
          preloaderArray?.map((singleLoader) => {
            return <Preloader key={singleLoader}></Preloader>;
          })}
        {!loadingTrends &&
          paginateArray.map((singleData) => {
            return (
              <ReusableCard singleData={singleData} key={singleData._id} />
            );
          })}
      </div>
    </div>
  );
}

export default ReusableTrends;
