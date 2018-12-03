import {categoryConstants} from '../_constants/categories.constants'


const defaultStatecategories = {
    categories: [],
    activeCategoryId: 0
  };
  export function categories(state = defaultStatecategories, action) {
    switch (action.type) {
      case categoryConstants.getAllCategoriesLoaded: {
        return { ...state, categories: action.payload };
      }
      case categoryConstants.setActiveCategory: {
        return { ...state, activeCategoryId: action.payload };
      }
      default:
        return state
    }
  }