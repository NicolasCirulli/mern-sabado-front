import { createReducer } from "@reduxjs/toolkit";
import { filterEvents, getAllEvents, cargarEventoAsync } from '../actions/eventsActions'

const initialState = {
    allEvents : [],
    filteredEvents : [],
    categories: [],
    event : null
}
export const eventsReducer = createReducer( initialState, ( builder ) => 
    builder
        .addCase( filterEvents.fulfilled, ( stateActual, action ) => {
            return {
                ...stateActual,
                filteredEvents : action.payload
            }
        } )
        .addCase( getAllEvents.fulfilled, ( stateActual, action ) =>{
            return {
                ...stateActual,
                allEvents : action.payload,
                filteredEvents : action.payload
             }
        } )
        .addCase( cargarEventoAsync.fulfilled, ( stateActual, action ) =>{
            return {
                ...stateActual,
                event : action.payload
            }
        } )
)