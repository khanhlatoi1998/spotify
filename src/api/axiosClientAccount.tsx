import axios from 'axios';

const axiosClientAccount = axios.create({
    baseURL: process.env.REACT_APP_URL_ACCOUNT,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    // paramsSerializer: (params: string | any) => queryString.stringify(params)
});


axiosClientAccount.interceptors.request.use(async (config) => {
    return config;
});

axiosClientAccount.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }

    return response;
}, (error) => {
    if (error.response.status === 401) {
        // handle unauthorized error
    } else if (error.response.status === 404) {
        // handle not found error
    } else {
        // handle other errors
    }
    return Promise.reject(error);
});

export default axiosClientAccount;

