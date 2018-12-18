import { filterConstants } from '../_constants/filter.constants';


const defaultState={
    categoryFilters:[],
    activeFiltersIds:[]
}

export function filters(state = defaultState, action) {
    switch (action.type) {
        case filterConstants.getFiltersByCategoryIdLoaded:{
            return {...state, categoryFilters:action.payload, activeFiltersIds:[]}
        }
        case filterConstants.addFilterId:{
            return{
                ...state,
                activeFiltersIds:[...state.activeFiltersIds, action.payload]
            }
        }
        case filterConstants.removeFilterId:{
            return{
                ...state,
                activeFiltersIds: state.activeFiltersIds.filter(item => item !== action.payload)
            }
        }
        default:
        return state
    }
}