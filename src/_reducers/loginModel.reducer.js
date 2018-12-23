import { loginModelConstants } from '../_constants/loginModel.constants';

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
        default:
            return state
    }
}