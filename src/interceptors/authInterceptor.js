import axios from "axios";

const clientId = 'X4U5WCPYGMQUW4U5Z3N4IQXQR1P4IIPUG5RBXEZSENFQY5Z3';
const clientSecret = 'RCTOSXPSP1IUO3JEK2JRVLNEUGOPZNKLLF2ETNCDH24MZ0DJ';

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
        config.url = `${config.url}&v=20200303`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
}
