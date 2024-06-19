import { axiosInstance } from "/src/shared/api/base.js";

const request = function (options) {
    const onSuccess = function (response) {
        return response.data;
    }

    const onError = function (error) {
        console.error('Request Failed: ', error.config);


        if (error.response) {
            console.error('Status: ', error.response.status)
            console.error('Data: ', error.response.data)
            console.error('Headers: ', error.response.headers)
        } else {
            console.error('Error message: ', error.message);
        }
        return Promise.reject(error.response || error.message);
    }
    return axiosInstance(options).then(onSuccess).catch(onError);
}

export default request;