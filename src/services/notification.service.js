import {authHeader, handleResponse} from "../helpers";
import axios from 'axios';
axios.defaults.headers = authHeader();

function getAll() {
    return axios.post('/api/getAllNotification', {

    }).then(handleResponse)
        .then(data => {
            return data
        })
        .catch(err => {
            console.log(err)
        });
}

export const notificationService = {
    getAll
};
