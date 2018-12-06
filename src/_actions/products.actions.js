import { productConstants } from '../_constants/products.constants';
import { productService } from '../_services/products.service';

export const productsActions = {
    getAllProducts,
    getProductsByCategory,
    setActiveProduct,
    getProductById,
    setDefault
}
export const getProductById = (productId) => {
    return dispatch => {
        productService.getProductById(productId)
            .then(
                (response) => {
                    const data = response.data;
                    dispatch(getProductByIdLoaded(data));
                },
                error => {
                    console.log(error);
                    // dispatch(failure(id, error));
                }
            );
    }
}
export const getAllProducts = () => {
    return dispatch => {

        productService.getProducts()
            .then(
                (response) => {
                    const data = response.data;
                    dispatch(getAllProductsLoaded(data));
                },
                error => {
                    console.log(error);
                    // dispatch(failure(id, error));
                }
            );
    }
};

function getAllProductsLoaded(products) {
    return {
        type: productConstants.getAllProductsLoaded,
        payload: products
    }
}
export const getProductsByCategory = (categoryId) => {
    return dispatch => {
        productService.getProductsByCategory(categoryId).
            then(
                (response) => {
                    const data = response.data;
                    dispatch(getProductsByCategoryLoaded(data));
                },
                error => {
                    console.log(error);
                    // dispatch(failure(id, error));
                }
            );
    }
}
function getProductByIdLoaded(product) {
    return {
        type: productConstants.getProductByIdLoaded,
        payload: product
    }
}
function getProductsByCategoryLoaded(products) {
    return {
        type: productConstants.getProductsByCategoryLoaded,
        payload: products
    }
}
export const setActiveProduct = (id) => {
    return {
        type: productConstants.setActiveProduct,
        payload: id
    } 
};
export const setDefault = () => {
    return {
        type: productConstants.SetDefault,
        payload: 0
    }
};