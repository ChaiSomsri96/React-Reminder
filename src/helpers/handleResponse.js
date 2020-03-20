import { authenticationService } from '../services';
import {toast} from "react-toastify";

export function handleResponse(response) {
    console.log("response");
    console.log(response);
    const data = response.data;
    if (response.status > 300) {
        if ([401, 403].indexOf(response.status) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            authenticationService.logout();
            // location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return data;
}

export function handleError(err) {
    if([401, 403].indexOf(err.status) !== -1) {
        toast.error('Token expired \n Please sign in again.');
        authenticationService.logout();
    }
}
