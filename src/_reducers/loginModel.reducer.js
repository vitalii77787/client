import { loginModelConstants } from '../_constants/loginModel.constants';

const defaultLoginModelState = {
    name: "",
    password: "",  
};
export const loginModelReducer = (state = defaultLoginModelState, action) => {
    switch (action.type) {
        case loginModelConstants.setNameActionType: {
            return { ...state, name: action.payload };
        }
        case loginModelConstants.setPasswordActionType: {
            return { ...state, password: action.payload };
        }
        default:
            return state
    }
}