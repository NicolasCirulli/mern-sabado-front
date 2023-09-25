import axios from 'axios'

const categoriesQueries = axios.create( {
    baseURL: import.meta.env.VITE_APP_URL_BASE +'/api/categories',
} )

export const getAllCategories = async ( ) => {
    try {
        const response = await categoriesQueries( )
        return response.data
    } catch (error) {
        return []
    }
}
