import { configureStore } from '@reduxjs/toolkit';
import rooms from '../features/roomsSlice';
import facilities from '../features/facilitiesSlice';
import offers from '../features/offersSlice';

export const store = configureStore({
  reducer: {rooms, facilities, offers},
  devTools: process.env.NODE_ENV !== 'production'
  
});