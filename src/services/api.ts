import axios from 'axios';

const api = axios.create({
    baseURL: 'https://6554daaf63cafc694fe71c07.mockapi.io/clientes',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default api;