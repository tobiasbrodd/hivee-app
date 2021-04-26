import { createSlice } from '@reduxjs/toolkit';
import MenuState from './menuState';

export const slice = createSlice({
    name: "menu",
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeMenu: (state) => {
            state.isOpen = false;
        },
        openMenu: (state) => {
            state.isOpen = true;
        },
    },
});

export const { toggleMenu, closeMenu, openMenu } = slice.actions;

export const selectMenu = (state: MenuState) => state.isOpen;

export default slice.reducer;