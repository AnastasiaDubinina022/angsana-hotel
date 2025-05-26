import { configureStore } from '@reduxjs/toolkit';
import rooms from '../features/roomsSlice';
import facilities from '../features/facilitiesSlice';
import offers from '../features/offersSlice';
import modal from '../features/modalSlice';

export const store = configureStore({
  reducer: {rooms, facilities, offers, modal},
  devTools: process.env.NODE_ENV !== 'production'
  
});