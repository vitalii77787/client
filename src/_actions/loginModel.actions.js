import { loginModelConstants } from '../_constants/loginModel.constants';

export const changeMailAction = (email) => {
    return {
        type: loginModelConstants.setMailActionType,
        payload: email
    }
}


export const changePasswordAction = (password) => {
    return {
        type: loginModelConstants.setPasswordActionType,
        payload: password
    }
}
