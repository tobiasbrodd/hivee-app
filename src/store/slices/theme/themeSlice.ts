import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ThemeState from './themeState';

export const slice = createSlice({
    name: "theme",
    initialState: {
        value: "light"
    },
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        toggleTheme: (state) => {
            state.value = state.value === "dark" ? "light" : "dark";
        },
    },
});

export const { setTheme, toggleTheme } = slice.actions;

export const selectTheme = (state: ThemeState) => state.value;

export default slice.reducer;
