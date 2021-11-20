import { createAction, createSlice } from '@reduxjs/toolkit';
import ClimateState from './climateState';

const parseClimate = (payload: string) => {
    const parsed = JSON.parse(payload);

    return {
        value: parsed.value,
        location: parsed.location,
        timestamp: parsed.timestamp,
    }
}

const initialState: ClimateState = {
    temperature: {},
    humidity: {},
    pressure: {},
}

export const setTemperature = createAction<string>("SET_TEMPERATURE");
export const setHumidity = createAction<string>("SET_HUMIDITY");
export const setPressure = createAction<string>("SET_PRESSURE");

export const slice = createSlice({
    name: "climate",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setTemperature, (state, action) => {
            state.temperature = parseClimate(action.payload);
        }).addCase(setHumidity, (state, action) => {
            state.humidity = parseClimate(action.payload);
        }).addCase(setPressure, (state, action) => {
            state.pressure = parseClimate(action.payload);
        })
    }
});

export const selectTemperature = (state: ClimateState) => state.temperature;
export const selectHumidity = (state: ClimateState) => state.humidity;
export const selectPressure = (state: ClimateState) => state.pressure;

export default slice.reducer;