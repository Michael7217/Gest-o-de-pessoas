import axios from 'axios'
import { obterUid } from '../identidade'

const URL = import.meta.env.VITE_API_URL

const API = axios.create({
  baseURL: URL,
})

API.interceptors.request.use((config) => {
  config.headers.set('X-Cliente-Id', obterUid())
  return config
})

export default API