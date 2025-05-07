import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rooms: [],
  roomsLoadingStatus: 'idle'
};

export const fetchRooms = createAsyncThunk(
  'rooms/fetchRooms',
  async () => {
    const response = await axios.get('http://localhost:3001/rooms');
    return response.data;
  }
)

export const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {state.roomsLoadingStatus = 'loading'})
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.rooms = action.payload;
        state.roomsLoadingStatus = 'idle';
      })
      .addCase(fetchRooms.rejected, (state) => {
        state.roomsLoadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  }
});

const {actions, reducer} = roomsSlice;

export default reducer; 

export const {setRooms} = actions;



