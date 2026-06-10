
import axios from "axios"
import {VITE_BASEURL} from "./env.js";

const api = axios.create({
    baseURL:VITE_BASEURL,
    withCredentials: true
})

export default api

