import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './titleSlice';
import themeReducer from './themeSlice';
import menuReducer from './menuSlice';
import { loadState, saveState } from './localStorage';

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

    return loadedState;
}
const preloadedState = preloadState();

const store = configureStore({
    reducer: {
        title: titleReducer,
        theme: themeReducer,
        menu: menuReducer,
    },
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