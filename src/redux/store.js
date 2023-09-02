import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from './reducers/eventsReducers.js'
import { userReducer } from './reducers/userReducers.js'
import { categoriesReducer } from "./reducers/categoriesReducers.js";
export const store = configureStore( {
    reducer : {
        events : eventsReducer,
        user : userReducer,
        categories : categoriesReducer
    }
} )