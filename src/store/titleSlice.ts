import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TitleState {
    value: string
}

export const slice = createSlice({
    name: "title",
    initialState: {
        value: ""
    },
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setTitle } = slice.actions;

export const selectTitle = (state: TitleState) => state.value;

export default slice.reducer;