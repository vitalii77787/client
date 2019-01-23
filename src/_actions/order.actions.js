import { orderConstants } from '../_constants/order.constants';
import { order } from '../_reducers/order.reducer';
import { orderService } from '../_services/order.service';


export const updateFields = (changedFields) => {
    if (changedFields.userArea) {
        return dispatch => {
            dispatch(updateCities(changedFields.userArea.value));
            dispatch(updateOrderState(changedFields));
        }
    }
    // else if (changedFields.userSurname) {
    //     return dispatch => {
    //         dispatch( updateSurnameValue(changedFields.userSurname.value));
    //     }
    // }
    // else if (changedFields.userPhone) {
    //     console.log(changedFields.userPhone.value);
    // }
    // else if (changedFields.userPay) {
    //     changedFields.userPay.value.map(value => console.log(value));
    // }
    // return {
    //     type: orderConstants.updateState,
    //     payload: changedFields
    // }
    return dispatch=>{
        dispatch(updateOrderState(changedFields))
    };
}
export const PostOrder=(values)=>{
    console.log(values);
}
export const getAreas = () => {
    return dispatch => {
        orderService.getAreas()
            .then(
                (response) => {
                    const data = response.data.areas;
                    dispatch(getAllAreasLoaded(data));
                },
                error => {
                    console.log(error);
                    // dispatch(failure(id, error));
                }
            );
    }
}
const updateOrderState=(newstate)=>{
    return {
        type: orderConstants.updateState,
        payload: newstate
    }
}

const getAllAreasLoaded=(data)=>{
    return {
        type: orderConstants.setAreas,
        payload:data
    }
}

export const setDefault=()=>{
    return{
        type: orderConstants.setDefault,
        payload: ''
    }
}
const updateCities= (value) => {
    return {
        type: orderConstants.updateCities,
        payload: value
    }
}
const updateSurnameValue = (surnameValue) => {
    return {
        type: orderConstants.updateSurname,
        payload: surnameValue
    }
}