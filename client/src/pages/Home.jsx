import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiCategories } from "../Thunks/Thunks";
import ReusableNav from "../components/ReusableNav";
import "./home.scss";
import ShoeCard from "../components/ShoeCard";

function Home() {
  console.log("anerico kakai");
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.categoryApi);
  useEffect(() => {
    dispatch(fetchApiCategories());
  }, [dispatch]);
  console.log(data);

  if (error) {
    return (
      <div>
        <h1>Network error</h1>
      </div>
    );
  }

  return (
    <div className="home-container">
      <ReusableNav />

      <div className="all-shoes">
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
      </div>
    </div>
  );
}

export default Home;
