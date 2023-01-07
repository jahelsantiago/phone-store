import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import provitionalData from './provitionalData';

const initialState = {
  items: provitionalData.products,
  status: "idle",
};

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        reset: (state) => {
            state.items = []
        }
    }
})

//actions
export const { reset } = itemsSlice.actions;

//selectors
export const selectItems = (state) => state.items.items;

//reducers
export default itemsSlice.reducer;
