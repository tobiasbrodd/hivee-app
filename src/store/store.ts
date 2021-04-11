import { configureStore } from '@reduxjs/toolkit';
import titleReducer from './titleSlice';
import themeReducer from './themeSlice';
import menuReducer from './menuSlice';

const store = configureStore({
    reducer: {
        title: titleReducer,
        theme: themeReducer,
        menu: menuReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;