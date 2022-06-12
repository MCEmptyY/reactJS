import { rootReducers } from './reducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})
export default store