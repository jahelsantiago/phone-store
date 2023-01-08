import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import provitionalData from "./provitionalData";

const initialState = {
  items: [],
  status: "idle",
};

//thunks
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await (await fetch("https://dummyjson.com/products?limit=10")).json();
  return response.products;
});

//slice
export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    reset: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      });
  },
});

//actions
export const { reset } = itemsSlice.actions;

//selectors
export const selectItems = (state) => state.items.items;

//reducers
export default itemsSlice.reducer;
