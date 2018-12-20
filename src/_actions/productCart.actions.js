import {cartConstants} from '../_constants/cart.constants';
import { cartService } from '../_services/cart.service';

export const addToCart=(id)=>{
    return{
        type: cartConstants.addToCart,
        payload: id
    }
}

export const getCartProducts = (productIds) => {
    return dispatch => {
        cartService.getCartProducts(productIds)
            .then(
                (response) => {
                    const data = response.data;
                    dispatch(getCartProductsLoaded(data));
                },
                error => {
                    console.log(error);
                    // dispatch(failure(id, error));
                }
            );
    }
};

function getCartProductsLoaded(products) {
    return {
        type: cartConstants.getCartProducts,
        payload: products
    }
}

export function incrementCartProduct(id){
    return{
        type: cartConstants.incrementProductCount,
        payload: id
    }
}

export function decrementCartProduct(id){
    return{
        type: cartConstants.decrementProductCount,
        payload: id
    }
}