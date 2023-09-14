import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import eventService from '../../services/eventService.js'

export const getAllEvents = createAsyncThunk( 'get_all_events_async', async () => {
        return await eventService.getAllEvents()
})

export const cargarEventoAsync = createAsyncThunk( 'cargar_evento_async', async( id ) => {
    try {
        const peticion = await axios.get( 'http://localhost:4000/api/events/' + id  )
        return peticion.data.response
    } catch (error) {
        
    }
} )

export const filterEvents = createAsyncThunk( 'filtrar_eventos', async ( search ) => {
    return await eventService.getAllEvents( search )
})