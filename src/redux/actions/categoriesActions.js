import { createAction, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from 'axios'

export const cargarCategorias = createAsyncThunk( 'cargar_cagategorias', async () => {
    const peticion = await axios( 'http://localhost:4000/api/categories' )
    return peticion.data
} )


export const cargarCategoria = createAsyncThunk( 'cargar_categoria', async(id) =>{
   const peticion = await axios( 'http://localhost:4000/api/categories/' + id )
   return peticion.data.category
} )

export const resetCategoria = createAction( 'reset_category', () => {
    return {
        payload: {}
    }
} )