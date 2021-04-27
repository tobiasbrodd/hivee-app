import { createAction, createSlice } from '@reduxjs/toolkit';
import ClimateState from './climateState';

const parseClimate = (payload: string) => {
    const parsed = JSON.parse(payload);
    console.log(parsed);

    return {
        temperature: parsed.temperature,
        humidity: parsed.humidity,
        pressure: parsed.pressure,
        source: parsed.source,
        timestamp: parsed.timestamp,
    }
}

const initialState: ClimateState = {
    climate: {}
}

export const setClimate = createAction<string>("SET_CLIMATE");

export const slice = createSlice({
    name: "climate",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setClimate, (state, action) => {
            state.climate = parseClimate(action.payload);
        })
    }
});

export const selectClimate = (state: ClimateState) => state.climate;

export default slice.reducer;