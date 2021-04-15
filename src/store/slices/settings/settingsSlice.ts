import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import SettingsState, { WeatherSettingsState } from './settingsState';

const initialState: SettingsState = {
    weather: {
        openWeather: {}
    }
}

export const slice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setSettings: (state, action: PayloadAction<SettingsState>) => {
            state = action.payload;
        },
        setWeather: (state, action: PayloadAction<WeatherSettingsState>) => {
            state.weather = action.payload;
        },
    },
});

export const { setSettings } = slice.actions;

export const selectWeather = (state: SettingsState) => state.weather;
export const selectOpenWeather = (state: SettingsState) => state.weather.openWeather;
export const selectWeatherSource = (state: SettingsState) => state.weather.source;

export default slice.reducer;