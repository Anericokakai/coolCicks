import { createSlice } from "@reduxjs/toolkit";
import { fetchApiCategories } from "../Thunks/Thunks";
const initialState = {
  data: [],
  loading: false,
  error: null,
  cartItems:[],
  amount:0,
  total:0,
  parameter:""

};

const fetchcategories = createSlice({
  name: "fetchApi",
  initialState,
  reducers: {
    clearCart:(state)=>{
      state.cartItems=[]
    },
    removeItem:(state,action)=>{
      const id=action.payload
      state.cartItems=state.cartItems.filter(item=>item.id!== id)

    },
    icreaseItems:(state,{payload})=>{
      const item=state.cartItems.find(item=>{
        item.id===payload.id
      })
      item.amount=item.amount+1;



    },
    decreaseItem:(state,{payload})=>{

      const item=state.cartItems.find(item=>{
        item.id===payload.id
      })
      item.amount=item.amount-1;
    },
    calculateTotals:(state)=>{
      let amount=0;
      let total=0
      state.cartItems.forEach((item)=>{

        amount+=item.amount;
        total+=item.amount*item.price

      })
      state.amount=amount;
      state.total=total
    },
    setParams:(state,action)=>{
      state.parameter=action.payload
    }
    

    
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchApiCategories.pending,(state)=>{
        state.loading=true
    }).addCase(fetchApiCategories.fulfilled,(state,action)=>{
        state.loading=false
        state.data=action.payload
        state.error=null
    }).addCase(fetchApiCategories.rejected,(state,action)=>{
        state.loading=false
        state.error=action.error.message
    })
}
});
export const {clearCart,icreaseItems,decreaseItem,calculateTotals,setParams}=fetchcategories.actions
export default fetchcategories.reducer;
