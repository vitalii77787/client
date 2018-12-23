import { wishproducts } from '../_data/wishproducts';

export const wishService={
    getWishProducts,
}

function getWishProducts(productsIds) {
    return Promise.resolve({ data: wishproducts});
}