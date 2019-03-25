import { loginModelConstants } from '../_constants/loginModel.constants';
import { userConstants } from '../_constants/user.constants';

const defaultLoginModelState = {
    email: "",
    password: "",  
};
export const loginModelReducer = (state = defaultLoginModelState, action) => {
    switch (action.type) {
        case loginModelConstants.setMailActionType: {
            return { ...state, email: action.payload };
        }
        case loginModelConstants.setPasswordActionType: {
            return { ...state, password: action.payload };
        }
        case userConstants.clearForm: {
            return { ...state, email: action.payload, password: action.payload };
        }
        default:
            return state
    }
}