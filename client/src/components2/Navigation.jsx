import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo2.png";
import { SearchItem } from "../Helper/SearchHelper";
import { calculateTotals, clearCart } from "../slices/fetchApiSlice";
import Cart from "./componentsCss/Cart";
import "./componentsCss/Nav.css";
import loadImage from "../assets/images/load.gif";
import { Link } from "react-router-dom";
function Navigation() {
  // ! fetch suggestion on click event

  //  !select the navigation
  const nav = document.querySelector(".Navigations");
  const [showCart, setShowCart] = useState(false);
  const [shownav, setshowNav] = useState(false);
  const [showSearchResuts, setShowSearchResults] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [loadingItems, setLoadingItems] = useState(false);
  const displayNav = () => {
    if (!shownav) {
      setshowNav(true);
    } else {
      setshowNav(false);
      nav.classList.toggle("showNav");
    }
  };
  if (shownav) {
    nav.classList.toggle("showNav");
  }

  // ! HANDLE SHOW  AND HIDE NAV
  const cartBox = document.querySelector(".cartbox");
  const displayCart = () => {
    if (!showCart) {
      setShowCart(true);
    } else {
      setShowCart(false);
      cartBox.classList.toggle("showCart");
    }
  };

  if (showCart) {
    cartBox.classList.toggle("showCart");
  }

  // !clear cart
  const dispatch = useDispatch();

  const { data, error, loading, cartItems, amount } = useSelector(
    (state) => state.categoryApi
  );
  

  let categories = data.data;
  const clear = () => {
    dispatch(clearCart());
    dispatch(calculateTotals());
  };

  // !DROP DOWN NAV

  const arrow = document.querySelectorAll(".fa-chevron-right");

  arrow.forEach((single_arrow) => {
    single_arrow.addEventListener("click", () => {
      const parent = single_arrow.parentNode;
      // !check if the class has the drop

      const nextDiv = parent.nextElementSibling;
      if (!nextDiv.classList.contains("drop")) {
        nextDiv.classList.add("drop");
      } else {
        nextDiv.classList.remove("drop");
      }
    });
  });

  // ! search filteer directly from the database

  const handleSearchChange = (e) => {
    let inputVal = e.target.value;

    if (!inputVal) {
      setShowSearchResults(false);
    } else if (inputVal) {
      SearchItem(inputVal, setLoadingItems)
        .then((data) => {
          setLoadingItems(false);

          setSearchItems(data.results);
        })
        .catch((error) => {
          console.log(error);
        });

      setShowSearchResults(true);
    }
  };
  const handleFocusChage = () => {
    // setShowSearchResults(false);
  };

  const HandleClickSearch = (query) => {
    setShowSearchResults(false);
    SearchItem(query, setLoadingItems).then((data) => {
      const data_search = data.results[0];
      
      window.location.href = `/inspect?image=${data_search?.images}&desc=${data_search?.shoe_Description}&name=${data_search?.shoe_name}&tags=${data_search?.tags}&color=${data_search?.color}&instock=${data_search?.inStock}&price=${data_search?.price}&purchase=${data_search?.purchases}`;
    });
  };

  return (
    <div >
      <nav className="nav ">
        <div className="logoImage">
          <img src={logo} alt="" onClick={() => (window.location.href = "/")} />
        </div>
        <div></div>
        <ul className="uls">
          <div className="navHome">
            <div className="Navigations">
              <div className="categories_for_nav_container">
                <i
                  className="fa-solid fa-xmark"
                  id="xmark_for_nav_container"
                  onClick={displayNav}
                ></i>
                <div className="user_logedInInfo">
                  Hello Anerico , welcome Back
                </div>
                <div className="shop_by_categories">
                  <h3>Shop by categories</h3>

                  {categories &&
                    categories.map((single_category) => {
                      return (
                        <div key={single_category._id}>
                          <div className="shopBy_category_child">
                            <p>{single_category.category_Name}</p>
                            <i className="fa-solid fa-chevron-right"></i>{" "}
                          </div>
                          <ul className="drop_down">
                            <li>casual</li>
                            <li>official</li>
                            <li>tin</li>
                            <li>trending</li>
                          </ul>
                        </div>
                      );
                    })}

                  <div className="shopBy_category_child">
                    <p>Men</p>
                    <i className="fa-solid fa-chevron-right"></i>{" "}
                  </div>
                  <ul className="drop_down">
                    <li>casual</li>
                    <li>official</li>
                    <li>tin</li>
                    <li>trending</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="carts">
            <Link className="underline text-purple-500 cursor-pointer" to={'/admin'}>  admin</Link>
            <li className="cartIcon" onClick={displayCart}>
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="count">
                <small>{amount}</small>
              </span>
            </li>
            <li>
              {shownav ? (
                <i className="fa-solid fa-xmark" onClick={displayNav}></i>
              ) : (
                <i className="fa-solid fa-bars" onClick={displayNav}></i>
              )}
            </li>
          </div>
          <div className="cartbox">
            <div className="cartActions">
              <i className="fa-solid fa-arrow-right" onClick={displayCart}></i>
              <strong>Cart</strong>
              <button className="clearBtn" onClick={clear}>
                clear <i className="fa-solid fa-ban"></i>
              </button>
            </div>
            <Cart></Cart>
          </div>
        </ul>
      </nav>
      <div className="inputsSearch border">
        <div className="searchBar  w-full" id="search">
          <div className="searchContainer ">
            <input
              type="text"
              name="search"
              autoComplete="off"
              className="search"
              onBlur={handleFocusChage}
              id=""
              placeholder="Search under coolcicks"
              onChange={handleSearchChange}
            />

            <button className="seachbtn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            {showSearchResuts && (
              <div className="searchResults">
                {!loadingItems && searchItems.length > 0 ? (
                  searchItems?.map((single_item) => {
                    return (
                      <div key={single_item._id}>
                        <p
                          onClick={() =>
                            HandleClickSearch(single_item.shoe_name)
                          }
                        >
                          {single_item?.shoe_name}
                        </p>
                      </div>
                    );
                  })
                ) : loadingItems ? (
                  <div className="loader">
                    <img src={loadImage} alt="loading" />
                    <p className="loadingInfo"> loading items... </p>
                  </div>
                ) : searchItems.length < 1 ? (
                  <div className="noItem">
                    <p> item not found </p>
                    <i className="fa-solid fa-face-sad-tear"></i>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
