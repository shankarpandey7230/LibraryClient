import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  recentBurrow: [],
};

const cartSlice = createSlice({
  name: "cart", //for admin purpose
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
    },
    removeBookFromCart: (state, { payload }) => {
      state.cart.filter((book) => book._id != payload);
      state.cart = state.cart.filter((book) => book._id != payload);
    },
    setEmptycart: (state) => {
      state.cart = [];
    },
    setRecentBurrow: (state, { payload }) => {
      state.recentBurrow = payload;
    },
    setEmptyRecentBurrow: (state) => {
      state.recentBurrow = [];
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  setCart,
  removeBookFromCart,
  setEmptycart,
  setRecentBurrow,
  setEmptyRecentBurrow,
} = actions;
export default reducer;
