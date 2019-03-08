import { filters } from '../_data/filters';

export const filterService={
    getFiltersByCategoryId,
    getProductsByPrice
}

function getFiltersByCategoryId(id) {
    return Promise.resolve({ data: filters });
}

function getProductsByPrice(param){
console.log(param);
}