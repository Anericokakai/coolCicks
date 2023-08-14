import { useDispatch, useSelector } from "react-redux";
import { fetchApiCategories } from "../Thunks/Thunks";

import "./home.scss";
import ShoeCard from "../components/ShoeCard";





import { useEffect } from "react"
import './paginate.css'
import styled from 'react-paginate'
import ReactPaginate from 'react-paginate'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Navigation from "../components2/Navigation";

function Home() {
  
  const dispatch = useDispatch();
  const { data, error, loading ,cartItems,amount,total} = useSelector((state) => state.categoryApi);
  useEffect(() => {
    dispatch(fetchApiCategories());
  }, [dispatch]);
  console.log(data,cartItems);


  // if (error) {
  //   return (
  //     <div>
  //       <h1>Network error</h1>
  //     </div>
  //   );
  // }
  // !handle page change
  function handlePageChange(e) {
    console.log(e);
  }

  return (
    <div className="home-container">

      <Navigation/>


      <div className="all-shoes">
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />
        <ShoeCard />

        
      </div>
      <div className="pagination">
          <ReactPaginate
            activeClassName={"item active "}
            breakClassName={"item break-me "}
            breakLabel={"..."}
            containerClassName={"pagination"}
            disabledClassName={"disabled-page"}
            marginPagesDisplayed={2}
            nextClassName={"item next "}
            nextLabel={
              <ArrowForwardIosIcon style={{ fontSize: 18, width: 150 }} />
            }
            onPageChange={handlePageChange}
            pageCount={20}
            pageClassName={"item pagination-page "}
            pageRangeDisplayed={2}
            previousClassName={"item previous"}
            previousLabel={
              <ArrowBackIosIcon style={{ fontSize: 18, width: 150 }} />
            }
          />
        </div>
    </div>
  );
}

export default Home;
