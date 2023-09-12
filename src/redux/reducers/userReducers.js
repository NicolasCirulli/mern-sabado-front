import { createReducer } from "@reduxjs/toolkit";
import { cargarUsuario, signUp, signIn, signInWithToken, logout } from '../actions/userActions.js'
const initialState = {
    user: null,
    token : null
}
export const userReducer = createReducer( initialState, ( builder ) => 
    builder
        .addCase( cargarUsuario, ( stateActual, action ) => {
            return {
                ...stateActual,
                user : action.payload
             }
        } )
        .addCase( signUp.fulfilled, ( stateActual, action ) => {
            let userData = {
                user : action.payload.user || null,
                token : action.payload.token || null
            }
            return {
                ...stateActual,
                ...userData
            }
        } )
        .addCase( signIn.fulfilled, (stateActual, action) => {
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        }  )
        .addCase( signInWithToken.fulfilled, (stateActual, action) => {
            return {
                ...stateActual,
                user : action.payload.user,
                token : action.payload.token
            }
        } )
        .addCase( logout, (stateActual, action) => {
            return  {
                ...stateActual,
                user : null,
                token : null
            }
        } )
)