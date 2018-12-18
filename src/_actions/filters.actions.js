import { filterConstants } from '../_constants/filter.constants';
import { filterService } from '../_services/filter.service';

export const getFiltersByCategory = (categoryId) => {
    return dispatch => {
        filterService.getFiltersByCategoryId(categoryId).
            then(
                (response) => {
                    const data = response.data;
                    dispatch(getFiltersByCategoryIdLoaded(data));
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

export function addFilterId(id){
    return{
        type: filterConstants.addFilterId,
        payload: id
    }
}
export function removeFilterId(id){
    return{
        type: filterConstants.removeFilterId,
        payload: id
    }
}