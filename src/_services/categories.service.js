import {categories} from '../_data/categories';

export const categoryService={
    getCategories,
}

function getCategories() {
    return Promise.resolve({ data: categories});
}
