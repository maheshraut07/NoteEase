import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice"

const rootReducers = combineReducers({
    user : userReducer,
})

export default rootReducers;