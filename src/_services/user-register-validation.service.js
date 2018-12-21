import { registerValidation } from "../_constants/ValidationConstants/register-validation.constants"

export const validate = (name, mail, password, passwordConfirm) => {
    const result = {
        isValid: true,
        errors: []
    }

    if (name && name.length < 3) {
        let error = {
            id: "name",
            text: registerValidation.incorrectName
        }
        result.isValid = false;
        result.errors.push(error);
    }
    if (mail && !emailValid(mail)) {
        let error = {
            id: "mail",
            text: registerValidation.incorrectEmail
        }
        result.isValid = false;
        result.errors.push(error);
    }
    if (password && !passwordValid(password)) {
        let error = {
            id: "password",
            text: registerValidation.incorrectPassword
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
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return passwordRegex.test(formfield);
}