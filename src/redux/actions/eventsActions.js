import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllEvents, getOneEvent } from "../../services/eventService";
export const cargarEventos = createAction( 'cargar_eventos', ( eventos ) => {
    return {
        payload : eventos
    }
} )

export const cargarEventosAsync = createAsyncThunk( 'cargar_eventos_async', async () => {
        const eventos = getAllEvents()
        return eventos
} )

export const cargarUnEvento = createAsyncThunk( "cargar_evento_async", async( id ) =>{
        const event = getOneEvent(id)
        return event
} )

export const resetEvent = createAction( 'reset_event', () => {
    return {
        payload: null
    }
} )

export const filtrarEventos = createAction( 'filtrar_eventos', ( category, search ) => {
    return {
        payload : {
            selectedCategory : category,
            inputValue : search
        }
    }
} )

