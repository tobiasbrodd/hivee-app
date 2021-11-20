import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import OpenWeather from '../../../controllers/openweather/openWeather';
import LocationState from '../location/locationState';
import SettingsState from '../settings/settingsState';
import WeatherState from './weatherState';

const initialState: WeatherState = {
    weather: {
        air: {
            temperature: {}
        },
        wind: {},
        clouds: {},
        precipitation: {},
        sun: {}
    }
}

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (_, { getState }) => {
    const { settings } = getState() as { settings: SettingsState };
    const { location } = getState() as { location: LocationState };
    if (!settings.weather.openWeather.apiKey) {
        throw new Error("No API key!");
    }
    const apiKey: string = settings.weather.openWeather.apiKey;

    let latitude = 59.3293;
    let longitude = 18.0686;

    if (location.coordinates.latitude) {
        latitude = location.coordinates.latitude;
    } else {
        console.log("No latitude!");
    }

    if (location.coordinates.longitude) {
        longitude = location.coordinates.longitude;
    } else {
        console.log("No longitude!");
    }

    const data = await OpenWeather.getWeather(apiKey, latitude, longitude);

    return data;
})

export const slice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setSource: (state, action: PayloadAction<string>) => {
            state.source = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = action.payload;
            state.timestamp = new Date().getTime();
        })
    }
});

export const { setSource } = slice.actions;

export const selectWeather = (state: WeatherState) => state.weather;
export const selectSource = (state: WeatherState) => state.source;

export default slice.reducer;