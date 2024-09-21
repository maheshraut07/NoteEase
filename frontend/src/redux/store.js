import {configureStore} from "@reduxjs/toolkit"
import rootReducers from "./rootReducer"

export const store = configureStore({
    reducer: rootReducers
})