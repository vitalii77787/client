import { userConstants } from '../_constants/user.constants';
import { UserService } from '../_services/user.service';
import { store } from '../_helpers/store';
import jwt from 'jsonwebtoken';


export const userActions = {
    registerUser
}
export const registerUser = () => {
    const name=store.getState().register.name;
    const mail=store.getState().register.mail;
    const password=store.getState().register.password;
    const pageSize=store.getState().filters.pageInfo.itemsPerPage;
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
                    return false;
                    // dispatch(failure(id, error));
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