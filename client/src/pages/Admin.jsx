import React, { useEffect, useState } from "react";
import Tablecomponent from "../components/Tablecomponent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../components/table.css";
import { fetchApiCategories } from "../Thunks/Thunks";
import FakeCategory from "../components/Preloaders/FakeCategory";
import { fetchDataAdminCategory } from "../Helper/SubmitPost";
function Admin() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiCategories());
  }, []);
  const fakeArray = [1, 2, 3, 4, 5];
  const [cat, setCat] = useState("teens");
const [items, setItems] = useState(null)
  const { data, error, loading, cartItems, amount, total, parameter } =
    useSelector((state) => state.categoryApi);
  const blogs = [1, 2, 3, 4, 5, 6, 7, 8, 910];

  const categories = data.data;
  console.log(categories);
  useEffect(() => {
   
    if (!categories) {
      return;
    }
    fetchDataAdminCategory(cat)
      .then((res) => {
        console.log(res);
        setItems(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categories]);
  return (
    <div>
      <header className="defaultHeader">
        <div className="DefaultNav">
          <h1 className="sm:text-2xl font-semibold text-xl">
            Hello, Grace Jane
          </h1>
        </div>
        <div className="Defaultbtn">
          <Link to={`/post`}>
            {" "}
            <button>Add New Product</button>
          </Link>
        </div>
      </header>
      <div className="categoryContainer">
        <h1 className="headings">Filter by categories</h1>
        <div className="categories">
          {!loading &&
            categories &&
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

          {loading &&
            fakeArray?.map((eachFake) => {
              return <FakeCategory key={eachFake}></FakeCategory>;
            })}
        </div>
      </div>
      <Tablecomponent blogs={items} />
    </div>
  );
}

export default Admin;
