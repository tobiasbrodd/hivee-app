import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import OpenWeather from '../../../controllers/openweather/openWeather';
import SettingsState from '../settings/settingsState';
import LocationState, { Location } from './locationState';

const initialState: LocationState = {
    location: {},
    coordinates: {}
}

const getCoordinates = () => {
    return new Promise((res, err) => {
        navigator.geolocation.getCurrentPosition(res, err);
    });
}

export const fetchCoordinates = createAsyncThunk("location/fetchCoordinates", async () => {
    console.log("Fetching coordinates...");
    const position: any = await getCoordinates();

    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);

    return {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };
})

export const fetchLocation = createAsyncThunk("location/fetchLocation", async (_, { getState }) => {
    console.log("Fetching location...");
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

    const locationName = await OpenWeather.getLocation(apiKey, latitude, longitude)

    console.log("City is :", locationName.city);
    console.log("Country is :", locationName.country);

    return {
        city: locationName.city,
        country: locationName.country
    };
})

export const slice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action: PayloadAction<LocationState>) => {
            state = action.payload;
        },
        setPlace: (state, action: PayloadAction<Location>) => {
            state.location = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCoordinates.fulfilled, (state, action) => {
            state.coordinates = action.payload;
        }).addCase(fetchLocation.fulfilled, (state, action) => {
            state.location = action.payload;
        })
    }
});

export const { setLocation, setPlace } = slice.actions;

export const selectLocation = (state: LocationState) => state;
export const selectPlace = (state: LocationState) => state.location;
export const selectCoordinates = (state: LocationState) => state.coordinates;

export default slice.reducer;