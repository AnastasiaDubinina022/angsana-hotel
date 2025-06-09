import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  facilities: [],
  facilitiesLoadingStatus: 'idle',
};

export const fetchFacilities = createAsyncThunk('facilities/fetchFacilities', async () => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/facilities`);
  return response.data;
});

export const facilitiesSlice = createSlice({
  name: 'facilities',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFacilities.pending, state => {
        state.facilitiesLoadingStatus = 'loading';
      })
      .addCase(fetchFacilities.fulfilled, (state, action) => {
        state.facilities = action.payload;
        state.facilitiesLoadingStatus = 'idle';
      })
      .addCase(fetchFacilities.rejected, state => {
        state.facilitiesLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});

const {actions, reducer} = facilitiesSlice;

export default reducer;

export const {setFacilities} = actions;
