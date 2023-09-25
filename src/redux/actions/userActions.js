import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import authService from "../../services/authService";

export const cargarUsuario = createAction( 'cargar_usuario', (user) => {
    return {
        payload : user
    }
} )

export const signUp = createAsyncThunk( "create_user", async ( body ) => {
        return await authService.signUp(body)
} )

export const signIn = createAsyncThunk( "logear", async ( body ) => {
    return await authService.signIn(body)
} )


export const signInWithToken = createAsyncThunk( "logear_token", async (  ) => {
    try {
        const token = localStorage.getItem( 'token' )
        const response = await axios.post( import.meta.env.VITE_APP_URL_BASE +'/api/auth/signin/token',{}, {
            headers: {
                Authorization : "Bearer " + token
              }
        })
        return {
            user : response.data?.user,
            token : token
        }
    } catch (error) {
        console.log( error )
    }
} )


export const logout = createAction( "reset", () => {
        localStorage.removeItem('token')
        return {
            payload : null
        }
} )