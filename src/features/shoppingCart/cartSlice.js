import { createSlice } from "@reduxjs/toolkit";
import provitionalData from "./provitionalData";

const initialState = {
  items: [],
  open: false,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //check if already in cart
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.units += 1;
        state.totalPrice += item.price;
        return state;
      }
      state.items = [...state.items, action.payload];
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice -= action.payload.price;
    },
    toggleCart: (state) => {
      state.open = !state.open;
    },
    resetCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    addUnit: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.units += 1;
          state.totalPrice += item.price;
        }
        return item;
      });
    },
    removeUnit: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.units -= 1;
          state.totalPrice -= item.price;
        }
        return item;
      });
      //check if units is 0
      state.items = state.items.filter((item) => item.units !== 0);
    },
  },
});

//actions
export const {
  addToCart,
  removeFromCart,
  toggleCart,
  resetCart,
  addUnit,
  removeUnit,
} = cartSlice.actions;

//selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartOpen = (state) => state.cart.open;
export const selectCartTotalPrice = (state) => state.cart.totalPrice;

//reducers
export default cartSlice.reducer;


