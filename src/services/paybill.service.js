import { authHeader, handleResponse, handleError } from "../helpers";
import axios from 'axios';
axios.defaults.headers = authHeader();

function getAll() {
    return axios.post('/api/getAllPaybills', {

    }).then(handleResponse)
        .then(data => {
            return data
        })
        .catch(err => {
            handleError(err.response);
        });
}

export const paybillService = {
    getAll
};
