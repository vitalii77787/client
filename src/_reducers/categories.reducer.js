import {categoryConstants} from '../_constants/categories.constants'


const defaultStatecategories = {
    categories: [],
    activeCategoryId: null,
    activeCategoryName: ''
  };
  export function categories(state = defaultStatecategories, action) {
    switch (action.type) {
      case categoryConstants.getAllCategoriesLoaded: {
        return { ...state, categories: action.payload };
      }
      case categoryConstants.setActiveCategoryId: {
        return { ...state, activeCategoryId: action.payload };
      }
      case categoryConstants.setActiveCategoryName: {
        return { ...state, activeCategoryName: action.payload };
      }
      case categoryConstants.setDefaultCategory:{
        return{
          ...state,
          activeCategoryId:action.payload.categoryId,
          activeCategoryName: action.payload.categoryName
        };
      }
      default:
        return state
    }
  }