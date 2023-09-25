import axios from 'axios'

const eventsQueries = axios.create( {
    baseURL: import.meta.env.VITE_APP_URL_BASE +'/api/events',
} )

export const getAllEvents = async (queryParams="") => {
    try {
        const response = await eventsQueries(queryParams)
        return response.data.response
    } catch (error) {
        return []
    }
}


export default { 
    getAllEvents
}
