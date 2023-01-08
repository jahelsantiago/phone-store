import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import itemsReducer from '../features/shoppingItems/itemsSlice';
import cartReducer from '../features/shoppingCart/cartSlice';
import { saveState } from './middlewares';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveState),
  preloadedState: JSON.parse(localStorage.getItem("state")) ? JSON.parse(localStorage.getItem("state")) : undefined,
});
