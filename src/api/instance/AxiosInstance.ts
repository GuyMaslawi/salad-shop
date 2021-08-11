import axios from 'axios';

const config = {
    baseURL: "/",
    headers: {
        "Content-type": "application/json",
        'Accept': 'application/json'
    }
}

const AxiosInstance = axios.create(config);

export default AxiosInstance;