import { configureStore } from '@reduxjs/toolkit';
import rooms from '../features/roomsSlice';

export const store = configureStore({
  reducer: {rooms},
  devTools: process.env.NODE_ENV !== 'production'
  
});