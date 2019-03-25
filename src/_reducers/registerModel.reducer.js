import { registerModelConstants } from '../_constants/registerModel.constants';
import { userConstants } from '../_constants/user.constants';

const defaultRegisterModelState = {
    name: "",
    mail: "",
    password: "",
    passwordConfirm: ""

};
export const registerModelReducer = (state = defaultRegisterModelState, action) => {
    switch (action.type) {
        case registerModelConstants.setNameActionType: {
            return { ...state, name: action.payload };
        }
        case registerModelConstants.setMailActionType: {
            return { ...state, mail: action.payload };
        }
        case registerModelConstants.setPasswordActionType: {
            return { ...state, password: action.payload };
        }
        case registerModelConstants.setPasswordConfirmActionType: {
            return { ...state, passwordConfirm: action.payload };
        }
        case userConstants.clearForm: {
            return { ...state, mail: action.payload, password: action.payload, name: action.payload, passwordConfirm: action.payload };
        }
        default:
            return state
    }
}