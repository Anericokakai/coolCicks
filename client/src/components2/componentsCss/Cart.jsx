import React from "react";
import "./Nav.css";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, decreaseItem, increaseItems } from "../../slices/fetchApiSlice";
function Cart() {
  const { cartItems,amount,total } = useSelector((state) => state.categoryApi);
  

  // !increase and decrease the amounts

  const minusItem=(item)=>{
 dispatch(decreaseItem(item))
 dispatch(calculateTotals())
  }
  const dispatch=useDispatch()

  const addItem=(item)=>{
    dispatch(increaseItems(item))
    dispatch(calculateTotals())

  }
  
  return (
    <div className="cartShoppingList">
      {
        cartItems?.length>=1? cartItems?.map(single=>{

          return <div className="selectedItem" key={single._id}>
          <div className="itemImage">
            <div className="cartImage">
              <img src={single.image} alt="" />
            </div>
            <div className="desc">
              <p>{ single.shoe_name}</p>
              <p>Ksh {single.price}</p>
            </div>
          </div>
          <div className="AddItem">
            <i className="fa-solid fa-minus" onClick={()=>minusItem(single)}></i>
            <p>{single.amount}</p>
            <i className="fa-solid fa-plus" onClick={()=>addItem(single)}></i>
          </div>
        </div>
        })
      :<div className="NoItems"><div>
         <h4>no items available in the cart</h4>
         <p>please select items to add to your cart</p>
      </div>
      
      <div>
      <i className="fa-solid fa-face-sad-tear"></i></div></div>}

      <div className="total"> <p>total items : {amount}</p>
      <p>total cash : {total}</p>
      <button className="cashOut"> check out</button></div>
    </div>
  );
}

export default Cart;
