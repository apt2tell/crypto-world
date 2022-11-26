/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = [];

// Base API url
const API = 'https://api.coinstats.app/public/v1/coins';

// Create Thunk
export const getCoinsAPI = createAsyncThunk(
  'coins/getCoins', async () => {
    const response = await axios.get(API);
    const coins = await response.data;
    return coins;
  }
);

// Create coins slice
const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    coinDisplay: (state, action) => {
      const newState = state.map((item) => {
        if (item.symbol !== action.payload) return item;
        return { ...coinDisplay, display: true };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoinsAPI.fulfilled, ((state, action) => action.payload));
  },
});

export default coinsSlice.reducer;
export const { coinDisplay } = coinsSlice.actions;
