import { userConstants } from '../_constants/user.constants';

const defaultState = {
    user: {},
    logginIn: false

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
