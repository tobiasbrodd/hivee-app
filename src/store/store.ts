import { configureStore } from '@reduxjs/toolkit'
import titleReducer from './reducers';

const store = configureStore({
    reducer: {
        title: titleReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;