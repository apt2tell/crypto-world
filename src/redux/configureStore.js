import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/coinsSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;
