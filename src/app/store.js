import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import itemsReducer from '../features/shoppingItems/itemsSlice';
import cartReducer from '../features/shoppingCart/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer,
    cart: cartReducer,
  },
});
