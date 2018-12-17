import { registerModelConstants } from '../_constants/registerModel.constants';

export const changeNameAction = (name) => {
    return {
        type: registerModelConstants.setNameActionType,
        payload: name
    }
}

export const changeMailAction = (mail) => {
    return {
        type: registerModelConstants.setMailActionType,
        payload: mail
    }
}

export const changePasswordAction = (password) => {
    return {
        type: registerModelConstants.setPasswordActionType,
        payload: password
    }
}

export const changePasswordConfirmAction = (passwordConfirm) => {
    return {
        type: registerModelConstants.setPasswordConfirmActionType,
        payload: passwordConfirm
    }
}