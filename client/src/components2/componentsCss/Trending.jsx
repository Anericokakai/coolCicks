import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FeaturedPreloader from "../../components/Preloaders/FeaturedPreloader";
import { fetchData_underFeatures } from "../../Thunks/Thunks";
import "../componentsCss/categories.css";

function Trending() {
  const dispatch = useDispatch();
  const { featuredData, loading, error } = useSelector(
    (store) => store.featuredApi
  );

  useEffect(() => {
    dispatch(fetchData_underFeatures());
  }, []);
  console.log(featuredData);
  const features=featuredData.data
  const fakeArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16.17,18,19,20,21]

  // !handle click event
  const redirectToInspect = (info) =>
    (window.location.href = `/inspect?image=${info?.images}&desc=${info?.shoe_Description}&name=${info?.shoe_name}&tags=${info?.tags}&color=${info?.color}&instock=${info?.inStock}&price=${info?.price}&purchase=${info?.purchases}&id=${info._id}&catId=${info.categoryId}`);
  return (
    <div className="TrendingHome">
      <h1 className="headings">Trending in cool cicks</h1>
      <div class="scrolling-container">
{
 loading&& fakeArray?.map((eachFake,index)=>
    <FeaturedPreloader key={index}></FeaturedPreloader>)
}
     
     
     {
      !loading && features?.map(eachFeature=>{
 return <div class="scrolling-content" key={eachFeature?._id}  onClick={()=>redirectToInspect(eachFeature)}>
          <img
            src={eachFeature?.images[0] }
            alt=""
          />
          <div className="trendDesc">

          </div>
        </div>
      })
     }   
        
        
      </div>
    </div>
  );
}

export default Trending;
