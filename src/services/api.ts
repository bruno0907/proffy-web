import axios from 'axios'

const URL = 'https://api-proffy.herokuapp.com'

const api = axios.create({
        baseURL: URL,
})

export default api

