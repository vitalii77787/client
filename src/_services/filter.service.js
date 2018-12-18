import { filters } from '../_data/filters';

export const filterService={
    getFiltersByCategoryId
}

function getFiltersByCategoryId(id) {
    return Promise.resolve({ data: filters });
}