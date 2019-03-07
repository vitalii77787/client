import { filterConstants } from '../_constants/filter.constants';
import { filterService } from '../_services/filter.service';
import { store } from '../_helpers/store';
import { productService } from '../_services/products.service';
import { getAllProductsLoaded } from './products.actions';

export const getFiltersByCategory = (categoryId) => {
    return dispatch => {
        productService.getProductsByCategory(categoryId).
            then(
                (response) => {
                    const data = response.data.paginatedList;
                    const pageInfo=response.data.pageInfo;
                    dispatch(getAllProductsLoaded(data));
                    dispatch(setPageInfo(pageInfo));
                },
                error => {
                    console.log(error);
                    // dispatch(failure(id, error));
                }
            );
    }
}

export const onPageChange = (pageNumber) => {
    return dispatch => {
        const categoryId = store.getState().categories.activeCategoryId;
        const pageSize=store.getState().filters.pageInfo.itemsPerPage;
        productService.getProductsWithParams(categoryId, pageNumber, pageSize).
            then(
                (response) => {
                    const data = response.data.paginatedList;
                    const pageInfo=response.data.pageInfo;
                    dispatch(getAllProductsLoaded(data));
                    dispatch(setPageInfo(pageInfo));
                },
                error => {
                    console.log(error);
                    // dispatch(failure(id, error));
                }
            );
    }
}
export const onSizeChange = (current, pageSize) => {
    return dispatch => {
        const categoryId = store.getState().categories.activeCategoryId;
        productService.getProductsWithParams(categoryId===0?null:categoryId, current, pageSize).
        then(
            (response) => {
                const data = response.data.paginatedList;
                const pageInfo=response.data.pageInfo;
                dispatch(getAllProductsLoaded(data));
                dispatch(setPageInfo(pageInfo));
            },
            error => {
                console.log(error);
                // dispatch(failure(id, error));
            }
        );
    }
}

function getFiltersByCategoryIdLoaded(filters) {
    return {
        type: filterConstants.getFiltersByCategoryIdLoaded,
        payload: filters
    }
}

export function addFilterId(id) {
    return {
        type: filterConstants.addFilterId,
        payload: id
    }
}
export function removeFilterId(id) {
    return {
        type: filterConstants.removeFilterId,
        payload: id
    }
}
export const setPageInfo = (pageInfo) => {
    return {
        type: filterConstants.setPageInfo,
        payload: pageInfo
    }
}