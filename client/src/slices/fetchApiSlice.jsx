import { createSlice } from "@reduxjs/toolkit";
import { fetchApiCategories } from "../Thunks/Thunks";
const initialState = {
  data: [],
  loading: false,
  error: null,
  cartItems: [],
  amount: 0,
  total: 0,
  parameter: "",
};

const fetchcategories = createSlice({
  name: "fetchApi",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const id = action.payload._id;
      state.cartItems = state.cartItems.filter((item) => item._id !== id);
    },
    increaseItems: (state, { payload }) => {
      const items = state.cartItems.find((item) => item._id === payload._id);
      items.amount += 1;
    },
    decreaseItem: (state, { payload }) => {
      const Items = state.cartItems.find((item) => item._id === payload._id);
      if (Items) {
        Items.amount -= 1;
      }
      if (Items.amount === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== Items._id
        );
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },

    AddItem:  (state, action) => {
      // ! check if the item exist
      const alreadyExist =  state.cartItems.find(item => item._id == action.payload._id );
      if (alreadyExist) {
return
      }else{
        state.cartItems.push(action.payload);
      }
    },

    setParams: (state, action) => {
      state.parameter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchApiCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchApiCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const {
  clearCart,
  increaseItems,
  decreaseItem,
  calculateTotals,
  removeItem,
  setParams,
  AddItem,
} = fetchcategories.actions;
export default fetchcategories.reducer;
