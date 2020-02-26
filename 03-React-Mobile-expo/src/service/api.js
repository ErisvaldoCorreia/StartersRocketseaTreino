import axios from 'axios';

const api = axios.create({
    // endereço de api local
    baseURL: 'http://04a0e846.ngrok.io/api'
});

export default api;