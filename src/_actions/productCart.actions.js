import {cartConstants} from '../_constants/cart.constants';

export const addToCart=(id)=>{
    return{
        type: cartConstants.addToCart,
        payload: id
    }
}