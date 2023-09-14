import axios from 'axios'

const authQuery = axios.create( {
    baseURL: 'http://localhost:4000/api/auth',
} )

export const signUp = async (body) => {
    try {
        const request = await authQuery.post("/signup",body)
        request.data.token && localStorage.setItem( 'token', request.data.token )
        return request.data
    } catch (error) {
        console.log( error )
        return error.response.data
    }
}
export const signIn = async (body) => {
    try {
        const request = await authQuery.post("/signin",body)
        request.data.token && localStorage.setItem( 'token', request.data.token )
        return request.data
    } catch (error) {
        return error.response.data
    }
}

export default { 
    signUp,
    signIn
}