import axios from 'axios';

export class UserService {
    static registerNewUser(name, mail, password) {
        return axios.post('http://localhost:49274/auth/register', {
            Name: name,
            Email: mail,
            Password: password
        })
    }
    static loginUser(mail, password) {
        return axios.post('http://localhost:49274/auth/login', {
            Email: mail,
            Password: password
        })
    }
    static setAuthorizationToken(token) {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common['Authorization'];
        }
    }
}