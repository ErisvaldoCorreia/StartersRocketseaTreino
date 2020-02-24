import axios from 'axios';

const api = axios.create({
    // endereço de api local
    baseURL: 'http://192.168.0.3:3333/api'
});

export default api;