import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import OpenWeather from '../../../controllers/openweather/openWeather';
import LocationState from '../location/locationState';
import SettingsState from '../settings/settingsState';
import WeatherState, { Weather } from './weatherState';

const initialState: WeatherState = {
    weather: {
        air: {
            temperature: {}
        },
        wind: {},
        cloud: {},
        precipitation: {},
        sun: {}
    }
}

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (_, { getState }) => {
    console.log("Fetching weather...");
    const { settings } = getState() as { settings: SettingsState };
    const { location } = getState() as { location: LocationState };
    if (!settings.weather.openWeather.apiKey) {
        throw new Error("No API key!");
    }
    const apiKey: string = settings.weather.openWeather.apiKey;

    if (!location.coordinates.latitude) {
        throw new Error("No latitude!");
    }
    const latitude: number = location.coordinates.latitude;

    if (!location.coordinates.longitude) {
        throw new Error("No longitude!");
    }
    const longitude: number = location.coordinates.longitude;
    
    const data = await OpenWeather.getWeather(apiKey, latitude, longitude);
    console.log(data);
    
    return data;
})

export const slice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeather: (state, action: PayloadAction<Weather>) => {
            state.weather = action.payload;
        },
        setSource: (state, action: PayloadAction<string>) => {
            state.source = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = action.payload;
        })
    }
});

export const { setWeather, setSource } = slice.actions;

export const selectWeather = (state: WeatherState) => state.weather;
export const selectSource = (state: WeatherState) => state.source;

export default slice.reducer;