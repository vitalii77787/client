import { cartproducts } from '../_data/cartproducts';

export const cartService={
    getCartProducts,
}

function getCartProducts(productIds) {
    return Promise.resolve({ data: cartproducts});
}