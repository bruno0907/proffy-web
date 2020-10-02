import axios from 'axios'

const local = 'http://localhost:3333'
const production = 'https://api-proffy.herokuapp.com/'

const URL = local

const api = axios.create({
        baseURL: URL,
})

export default api

