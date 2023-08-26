import { createReducer } from "@reduxjs/toolkit";
import { cargarUsuario } from '../actions/userActions.js'
const initialState = {
    user: ''
}
export const userReducer = createReducer( initialState, ( builder ) => 
    builder
        .addCase( cargarUsuario, ( stateActual, action ) => {
            return {
                ...stateActual,
                user : action.payload
             }
        } )
)