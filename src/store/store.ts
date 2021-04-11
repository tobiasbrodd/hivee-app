import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './titleSlice';
import themeReducer from './themeSlice';
import menuReducer from './menuSlice';
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();

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