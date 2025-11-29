import axios from "axios";

const api = axios.create({
    // baseURL: import.meta.env.baseURL ??  "http://localhost:3000",
    baseURL: "https://agenda-fullstack-jp-2025.onrender.com"
})

export default api;