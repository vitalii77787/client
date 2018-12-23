import { wishConstants } from '../_constants/wish.constants';
import { wishService } from '../_services/wish.service';

export const ToggleWishList=(id)=>{
    return{
        type:wishConstants.toggleWishList,
        payload: id
    }
}
export const getWishProducts = (productIds) => {
    return dispatch => {
        wishService.getWishProducts(productIds)
            .then(
                (response) => {
                    const data = response.data;
                    dispatch(getWishProductsLoaded(data));
                },
                error => {
                    console.log(error);
                    // dispatch(failure(id, error));
                }
            );
    }
};

function getWishProductsLoaded(products) {
    return {
        type: wishConstants.getWishProducts,
        payload: products
    }
}