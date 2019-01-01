import { wishproducts } from '../_data/wishproducts';
import axios from 'axios';

export const wishService={
    getWishProducts,
}

function getWishProducts(productsIds) {
    return axios.get('http://localhost:49274/api/wishcontroller/getwishes', {
        params: {
            ids: JSON.stringify(productsIds)
        }
    });
   // return Promise.resolve({ data: wishproducts});
}