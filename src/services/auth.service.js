import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import { handleResponse } from "../helpers";

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

export function login(email, password) {
    return axios.post('/api/auth/login', {
        email, password
    }).then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user.data));
            currentUserSubject.next(user);

            return user;
        })

}

export function register(email, password) {
    return axios.post('/api/auth/register', {
        email, password
    })
}

export function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
