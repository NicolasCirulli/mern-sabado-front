import { createAction } from "@reduxjs/toolkit";

export const cargarUsuario = createAction( 'cargar_usuario', (user) => {
    return {
        payload : user
    }
} )