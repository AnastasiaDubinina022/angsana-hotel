import { configureStore } from '@reduxjs/toolkit';
import rooms from '../features/roomsSlice';
import facilities from '../features/facilitiesSlice';
import offers from '../features/offersSlice';
import modal from '../features/modalSlice';
import burgerMenu from '../features/burgerMenuSlice';

export const store = configureStore({
  reducer: {rooms, facilities, offers, modal, burgerMenu},
  devTools: process.env.NODE_ENV !== 'production'
  
});