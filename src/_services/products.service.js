import {products,products1,products2,products3,products4,products5} from '../_data';

export const productService={
    getProducts,
    getProductsByCategory
}

function getProducts() {
    return Promise.resolve({ data: products });
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
