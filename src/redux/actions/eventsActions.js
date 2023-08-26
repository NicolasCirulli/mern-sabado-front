import { createAction } from "@reduxjs/toolkit";

export const cargarEventos = createAction( 'cargar_eventos', ( eventos ) => {
    return {
        payload : eventos
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