import { createSlice } from '@reduxjs/toolkit';

const initialState = 
{ isOpen: false };

const burgerMenuSlice = createSlice({
  name: 'burgerMenu',
  initialState,
  reducers: {
    toggleMenu: (state) => { state.isOpen = !state.isOpen; },
    openMenu: (state) => { state.isOpen = true; },
    closeMenu: (state) => { state.isOpen = false; }
  },
});

export const { toggleMenu, openMenu, closeMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
