import {categories} from '../_data/categories';
import axios from 'axios';

export const categoryService={
    getCategories,
}

function getCategories() {
    return axios.get('http://localhost:49274/api/product/categories');
   // return Promise.resolve({ data: categories});
}

