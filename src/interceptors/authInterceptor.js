import axios from "axios";

const clientId = process.env.FOURSQUARE_CLIENT_ID
const clientSecret = process.env.FOURSQUARE_CLIENT_SECRET

export const addFourSquareCredentialInterceptor = () => {
    axios.interceptors.request.use(function (config) {
        config.url = `${config.url}&client_id=${clientId}&client_secret=${clientSecret}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
}

export const addFourSquareVersionInterceptor = () => {
    axios.interceptors.request.use(function (config) {
        config.url = `${config.url}&v=20200303`
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
}
