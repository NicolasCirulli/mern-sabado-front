import axios from 'axios'

const categoriesQueries = axios.create( {
    baseURL: 'http://localhost:4000/api/categories',
} )

export const getAllCategories = async ( ) => {
    try {
        const response = await categoriesQueries( )
        return response.data
    } catch (error) {
        return []
    }
}
