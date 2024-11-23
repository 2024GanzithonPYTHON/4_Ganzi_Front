import axios from "axios";

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: "https://api.sidego.klr.kr",
  // baseURL: "http://localhost:8080",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
=======
    baseURL: "https://api.sidego.klr.kr",
    // baseURL: "http://localhost:8080",
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
>>>>>>> 7500391f2e49e40109b265b92b651375c5c35acc
});

export default axiosInstance;
