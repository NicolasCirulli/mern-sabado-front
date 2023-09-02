import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const cargarEventos = createAction( 'cargar_eventos', ( eventos ) => {
    return {
        payload : eventos
    }
})

export const cargarEventosAsync = createAsyncThunk( 'cargar_eventos_async', async () => {
    try {
        const peticion = await axios.get( 'http://localhost:4000/api/events' )
        return peticion.data.response
    } catch (error) {
        return []
    }
} )

export const cargarEventoAsync = createAsyncThunk( 'cargar_evento_async', async( id ) => {
    try {
        const peticion = await axios.get( 'http://localhost:4000/api/events/' + id  )
        return peticion.data.response
    } catch (error) {
        
    }
} )

export const filtrarEventos = createAction( 'filtrar_eventos', ( category, search ) => {
    return {
        payload : {
            selectedCategory : category,
            inputValue : search
        }
    }
})