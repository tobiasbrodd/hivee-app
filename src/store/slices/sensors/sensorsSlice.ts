import { createAction, createSlice } from '@reduxjs/toolkit';
import SensorsState, { ContactState, MeasureState } from './sensorsState';

function parseMeasure(payload: string): MeasureState {
    const parsed = JSON.parse(payload);

    return {
        value: parsed.value,
        location: parsed.location,
        timestamp: parsed.timestamp,
    }
}

function parseContact(payload: string): ContactState {
    const parsed = JSON.parse(payload);

    return {
        value: parsed.value,
        location: parsed.location,
        timestamp: parsed.timestamp,
    }
}

const initialState: SensorsState = {
    temperature: {},
    humidity: {},
    pressure: {},
    contact: {},
}

export const setTemperature = createAction<string>("SET_TEMPERATURE");
export const setHumidity = createAction<string>("SET_HUMIDITY");
export const setPressure = createAction<string>("SET_PRESSURE");
export const setContact = createAction<string>("SET_CONTACT");

export const slice = createSlice({
    name: "sensors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setTemperature, (state, action) => {
            let measure = parseMeasure(action.payload);
            state.temperature[measure.location] = measure;
        }).addCase(setHumidity, (state, action) => {
            let measure = parseMeasure(action.payload);
            state.humidity[measure.location] = measure;
        }).addCase(setPressure, (state, action) => {
            let measure = parseMeasure(action.payload);
            state.pressure[measure.location] = measure;
        }).addCase(setContact, (state, action) => {
            let contact = parseContact(action.payload);
            state.contact[contact.location] = contact;
        })
    }
});

export const selectTemperature = (state: SensorsState) => state.temperature;
export const selectHumidity = (state: SensorsState) => state.humidity;
export const selectPressure = (state: SensorsState) => state.pressure;
export const selectContact = (state: SensorsState) => state.contact;

export default slice.reducer;