import { configureStore } from '@reduxjs/toolkit';
import rooms from '../features/roomsSlice';
import facilities from '../features/facilitiesSlice';

export const store = configureStore({
  reducer: {rooms, facilities},
  devTools: process.env.NODE_ENV !== 'production'
  
});