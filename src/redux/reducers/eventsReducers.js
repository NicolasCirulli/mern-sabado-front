import { createReducer } from "@reduxjs/toolkit";
import { cargarEventos, filtrarEventos } from '../actions/eventsActions'

const initialState = {
    allEvents : [],
    filteredEvents : [],
    categories: []
}
export const eventsReducer = createReducer( initialState, ( builder ) => 
    builder
        .addCase( cargarEventos, ( stateActual, action ) => {
            return {
                ...stateActual,
                allEvents : action.payload,
                filteredEvents : action.payload
             }
        } )
        .addCase( filtrarEventos, ( stateActual, action ) => {
            const filteredSearch = stateActual.allEvents.filter( event => event.name.toLowerCase().includes( action.payload.inputValue )  )
            let newFilteredEvents = filteredSearch
            if( action.payload.selectedCategory != "All" ){
                newFilteredEvents = newFilteredEvents.filter( event => event.category.category == action.payload.selectedCategory )
            }
            return {
                ...stateActual,
                filteredEvents : newFilteredEvents
            }
        } ) 
)