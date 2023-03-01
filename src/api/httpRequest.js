import axios from "axios";
import queryString from "query-string";

// Set up default config for http request 
const httpRequest = axios.create({
    baseURL: "http://127.0.0.1:8001/api/v1/",
    headers: {
        'Content-Type': "application/json"
    },
    paramsSerializer: {
        serialize: params => queryString.stringify(params)
    }
});

// Handle when sending request 
httpRequest.interceptors.request.use(async config => {
    // Handle token here

    return config;
});

// Handle when responding
httpRequest.interceptors.response.use(response => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, error => {
    throw new Error(error);
});

export default httpRequest;

