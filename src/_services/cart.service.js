import { cartproducts } from '../_data/cartproducts';
import axios from 'axios';

export const cartService={
    getCartProducts,
    getCartProduct
}

function getCartProducts(productIds) {
    return Promise.resolve({ data: cartproducts});
}

function getCartProduct(id){
    return axios.get('http://localhost:49274/api/cartcontroller/getcartitem', {
        params: {
            id: id
        }
    });
}