import { userConstants } from '../_constants/user.constants';
import { UserService } from '../_services/user.service';
import { store } from '../_helpers/store';
import jwt from 'jsonwebtoken';
import {  notification } from 'antd';
import { notifyConstants } from '../_constants/notification.constants';
import { history } from '../_helpers/history';

const openErrorNotification = (error) => {
    notification['error']({
        message: notifyConstants.someError,
        description: error
      });
    };

export const userActions = {
    registerUser
}
export const registerUser = () => {
    const name=store.getState().register.name;
    const mail=store.getState().register.mail;
    const password=store.getState().register.password;
    return dispatch => {
        UserService.registerNewUser(name, mail, password)
            .then(
                (response) => {
                    const token = response.data;
                    localStorage.setItem('token', token);
                    UserService.setAuthorizationToken(token);
                    dispatch(setUser(jwt.decode(token)));
                    dispatch(setIsLogIn(true));
                    history.push('/');
                },
                error => {
                    console.log(error.response.data.login_failure[0]);
                    openErrorNotification(error.response.data.login_failure[0]); 
                }
            );
    }
}

export const loginUser = () =>{
    const mail=store.getState().register.mail;
    const password=store.getState().register.password;
    return dispatch => {
        UserService.loginUser(mail, password)
            .then(
                (response) => {
                    const token = response.data;
                    localStorage.setItem('token', token);
                    UserService.setAuthorizationToken(token);
                    dispatch(setUser(jwt.decode(token)));
                    dispatch(setIsLogIn(true));
                    history.push('/');
                },
                error => {
                    console.log(error.response.data.login_failure[0]);
                    openErrorNotification(error.response.data.login_failure[0]); 
                }
            );
    }
}

export const clearForm = () =>{
    return  {
        type:userConstants.clearForm,
        payload: ''
    }
}

const setIsLogIn=(param)=>{
    return{
        type:userConstants.setIsLogedIn,
        payload: param
    }
}
const setUser=(user)=>{
    return {
        type:userConstants.setUser,
        payload: user
    }
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('token');
        console.log("logout");
        UserService.setAuthorizationToken(false);
        dispatch(setUser({}));
        dispatch(setIsLogIn(false));
    }
}