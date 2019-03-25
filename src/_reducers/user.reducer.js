import { userConstants } from '../_constants/user.constants';
import jwt from 'jsonwebtoken';

let user = jwt.decode(localStorage.getItem('token'));

const defaultState = {
    user: user ? user :{},
    logginIn: user ? true : false

};

export function authentication(state = defaultState, action) {
    switch (action.type) {
        case userConstants.setUser: {
            return {
                ...state,
                user: action.payload
            }
        }
        case userConstants.setIsLogedIn: {
            return {
                ...state,
                logginIn:action.payload
            }
        }
        default:
        return state
    }
}
