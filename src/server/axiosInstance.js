import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.sidego.klr.kr",
    // baseURL: "http://localhost:8080",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

export default axiosInstance;
