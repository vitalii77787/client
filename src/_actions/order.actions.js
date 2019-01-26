import { orderConstants } from '../_constants/order.constants';
import { order } from '../_reducers/order.reducer';
import { orderService } from '../_services/order.service';
import { history } from '../_helpers/history';


export const updateFields = (changedFields) => {
    if (changedFields.userArea) {
        return dispatch => {
            dispatch(updateCities(changedFields.userArea.value));
            dispatch(updateOrderState(changedFields));
        }
    }
    return dispatch=>{
        dispatch(updateOrderState(changedFields))
    };
}
export const PostOrder=(values, orderLine)=>{
    const orderModel={
        productId: orderLine.productId,
        quantity: orderLine.productCount,
        payMethod: values.userPay,
        userName: values.userName,
        userSurname: values.userSurname,
        userPhone: values.userPhone,
        userEmail: values.userEmail,
        userDelivery: values.userDelivery,
        userArea: values.userArea,
        userCity: values.userCity,
        userStreet: values.userStreet,
        userHouse: values.userHouse,
        userFlat: values.userFlat?values.userFlat:''
    }
    return dispatch=>{
        orderService.postOrder(orderModel).then(
            (response)=>{
                console.log(response);
            },
            error=>{
                console.log(error);
            }
        );
        history.push('/categories');
    }
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