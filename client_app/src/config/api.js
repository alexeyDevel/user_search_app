import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4050/api/',
    timeout: 6000,
});

export default api;