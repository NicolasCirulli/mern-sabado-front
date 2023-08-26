import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from './reducers/eventsReducers.js'
import { userReducer } from './reducers/userReducers.js'
export const store = configureStore( {
    reducer : {
        events : eventsReducer,
        user : userReducer
    }
} )