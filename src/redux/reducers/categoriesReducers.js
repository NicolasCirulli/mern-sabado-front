import { createReducer } from "@reduxjs/toolkit";
import { cargarCategorias, cargarCategoria, resetCategoria } from "../actions/categoriesActions";
const initialState = {
    categories: [],
    category : {}
}
export const categoriesReducer = createReducer( initialState, ( builder ) => 
    builder
        .addCase( cargarCategorias.fulfilled, ( stateActual, action ) =>{
            return {
                ...stateActual,
                categories : action.payload,
            }
        } )
        .addCase( cargarCategoria.fulfilled, ( stateActual, action ) => {
            return {
                ...stateActual,
                category : action.payload
            }
        } )
        .addCase( resetCategoria, ( stateActual, action ) =>{
            return {
                ...stateActual,
                category : action.payload
            }
        } )
)