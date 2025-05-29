import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  offers: [],
  offersLoadingStatus: 'idle',
};

export const fetchOffers = createAsyncThunk('offers/fetchOffers', async () => {
  const response = await axios.get('http://localhost:3001/offers');
  return response.data;
});

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchOffers.pending, state => {
        state.offersLoadingStatus = 'loading';
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersLoadingStatus = 'idle';
      })
      .addCase(fetchOffers.rejected, state => {
        state.offersLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const {actions, reducer} = offersSlice;

export default reducer;

export const {setOffers} = actions;
