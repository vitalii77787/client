import { loginValidation } from '../_constants/ValidationConstants/login-validation.constants';

export const validateLogin = ( mail, password) => {
    const result = {
        isValid: true,
        errors: []
    }

    if (mail && !emailValid(mail)) {
        let error = {
            id: loginValidation.mail,
            text: loginValidation.incorrectEmail
        }
        result.isValid = false;
        result.errors.push(error);
    }
    if (password && !passwordValid(password)) {
        let error = {
            id: loginValidation.password,
            text: loginValidation.incorrectPassword
        }
        result.isValid = false;
        result.errors.push(error);
    }
    return result;
}

function emailValid(formfield) {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(formfield);
}

function passwordValid(formfield) {
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/;
    return passwordRegex.test(formfield);
}