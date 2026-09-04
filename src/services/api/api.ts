import axios from 'axios'

const URL = import.meta.env.VITE_API_URL

const API =  axios.create({
        baseURL: URL
    })

export default API;