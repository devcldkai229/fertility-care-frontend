import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://localhost:7201/api/v1"
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if(token!=null) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
})

export default axiosInstance;

