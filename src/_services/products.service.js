import {product,product1,product2,product3,products,products1,products2,products3,products4,products5} from '../_data';

export const productService={
    getProducts,
    getProductsByCategory,
    getProductById
}

function getProducts() {
    return Promise.resolve({ data: products });
}
function getProductById(productId)
{
    let result;
    switch (productId){
        case '56c782f18990ecf954f6e0271': {
            result =product1;
            break;
        }
        case '56c782f18990ecf954f6e0272': {
            result =product2;
            break;
        }
        case '56c782f18990ecf954f6e0273': {
            result =product3;
            break;
        }
        default: {
            result =product;
        }
    }
    return Promise.resolve({ data: result});
}
function getProductsByCategory(categoryId) {
    let result;
    switch (categoryId) {
        case '1qwerty': {
            // alert(categoryId);
            result =products1;
            break;
        }
        case '2qwerty': {
            // alert(categoryId);
            result =products2;
            break;
        }
        case '3qwerty':
            {
                // alert(categoryId);
                result =products3;
                break;
            }
        case '4qwerty': {
            // alert(categoryId);
            result = products4;
            break;
        }
        case '5qwerty': {
            result = products5;
            break;
        }
        default: {
            // alert(categoryId);
            result =products;
        }
    }
    // ToDo: real API call
    return Promise.resolve({ data: result });
}
