import axios from 'axios'

const eventsQueries = axios.create( {
    baseURL: 'http://localhost:4000/api/events',
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
