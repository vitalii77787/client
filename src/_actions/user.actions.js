import { userConstants } from '../_constants/user.constants';
import { UserService } from '../_services/user.service';
import { store } from '../_helpers/store';
import jwt from 'jsonwebtoken';
import {  notification } from 'antd';

const openErrorNotification = (error) => {
    notification['error']({
        message: notifyConstants.someError,
        description: error,
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
                },
                error => {
                    console.log(error);
                    openErrorNotification(error); 
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
                },
                error => {
                    console.log(error);
                    openErrorNotification(error);  
                }
            );
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