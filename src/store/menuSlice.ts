import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
    isOpen: boolean
}

export const slice = createSlice({
    name: "menu",
    initialState: {
        isOpen: false
    },
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleMenu } = slice.actions;

export const selectMenu = (state: MenuState) => state.isOpen;

export default slice.reducer;