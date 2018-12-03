import { productConstants } from '../_constants/products.constants';

const defaultState = {
    products: [],
    activeProductId: 0
  };

  export function products(state = defaultState, action) {
    switch (action.type) {
      case productConstants.getAllProductsLoaded: {
        return { ...state, products: action.payload };
      }
      case productConstants.getProductsByCategoryLoaded:{
        return { ...state, products: action.payload };
      }
      case productConstants.setActiveProduct: {
        return { ...state, activeProductId: action.payload };
      }
      default:
        return state
    }
  }