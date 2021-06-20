import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './slices/title/titleSlice';
import themeReducer from './slices/theme/themeSlice';
import menuReducer from './slices/menu/menuSlice';
import weatherReducer from './slices/weather/weatherSlice';
import locationReducer from './slices/location/locationSlice';
import climateReducer from './slices/climate/climateSlice';
import settingsReducer from './slices/settings/settingsSlice';
import { loadState, saveState } from './localStorage';
import createMiddleware from '../controllers/mqtt/mqtt';
import config from '../config.json';

const preloadState = () => {
    var loadedState = loadState();
    if (loadedState === undefined) {
        loadedState = {};
    }

    if (!("theme" in loadedState)) {
        if (matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) {
            loadedState.theme = { value: "dark" };
        } else {
            loadedState.theme = { value: "light" };
        }
    }

    loadedState.settings = {
        weather: {
            openWeather: {
                apiKey: config.openWeather.apiKey
            }
        }
    }

    return loadedState;
}
const preloadedState = preloadState();

const store = configureStore({
    reducer: {
        title: titleReducer,
        theme: themeReducer,
        menu: menuReducer,
        weather: weatherReducer,
        location: locationReducer,
        climate: climateReducer,
        settings: settingsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(createMiddleware(config.mqtt.host, config.mqtt.port)),
    preloadedState
});

const select = (state: RootState) => {
    return {
        theme: state.theme
    }
}

store.subscribe(() => {
    saveState(select(store.getState()))
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type StorageState = {
    theme: {
        value: string
    }
}