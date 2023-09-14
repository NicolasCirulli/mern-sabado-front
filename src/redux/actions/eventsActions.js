import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getAllEvents = createAsyncThunk( 'get_all_events_async', async () => {
    try {
        const request = await axios.get( 'http://localhost:4000/api/events' )
        return request.data.response
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