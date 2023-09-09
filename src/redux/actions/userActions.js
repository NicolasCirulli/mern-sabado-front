import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
export const cargarUsuario = createAction( 'cargar_usuario', (user) => {
    return {
        payload : user
    }
} )

export const signUp = createAsyncThunk( "create_user", async ( body ) => {
    try {
        const response = await axios.post( 'http://localhost:4000/api/auth/signup', body )
        localStorage.setItem( 'token', response.data.token )
        return response.data
    } catch (error) {
        console.log( error )
    }
} )

export const signIn = createAsyncThunk( "logear", async ( body ) => {
    try {
        const response = await axios.post( 'http://localhost:4000/api/auth/signin', body )
        localStorage.setItem( 'token', response.data.token )
        return response.data
    } catch (error) {
        console.log( error )
    }
} )


export const signInWithToken = createAsyncThunk( "logear_token", async (  ) => {
    try {
        const token = localStorage.getItem( 'token' )
        const response = await axios.post( 'http://localhost:4000/api/auth/signin/token',{}, {
            headers: {
                Authorization : "Bearer " + token
              }
        })
        return {
            user : response.data.user,
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