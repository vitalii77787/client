import {categoryConstants} from '../_constants/categories.constants';
import { categoryService} from '../_services/categories.service';

export const categoriesActions={
    getAllCategories,
    setActiveCategory
}


export const getAllCategories = () => {
    return dispatch => {
        categoryService.getCategories()
            .then(
                (response) => {
                    const data = response.data;
                    dispatch(getAllCategoriesLoaded(data));
                },
                error => {
                    console.log(error);
                    // dispatch(failure(id, error));
                }
            );
    }
};

function getAllCategoriesLoaded(categories) {
    return {
        type: categoryConstants.getAllCategoriesLoaded,
        payload: categories
    }
}
export const setActiveCategory = (id) => {
    return {
        type: categoryConstants.setActiveCategory,
        payload: id
    }
}