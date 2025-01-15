import axios from "axios";
const url = import.meta.env.VITE_REACT_BASE_URL;
// Create an Axios instance
const api = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;