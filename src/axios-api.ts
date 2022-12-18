import axios from 'axios'

const API_DOMAIN: string = "http://127.0.0.1:8000"

const getToken = axios.create({
    baseURL: API_DOMAIN,
    timeout: 2000
})

const getAPI = axios.create({
    baseURL: API_DOMAIN,
    timeout: 6000
})
getAPI.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('auth-token')

export { getToken, getAPI }