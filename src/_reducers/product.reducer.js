import { productConstants } from '../_constants/products.constants';

const defaultState = {
    product:{},
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
      case productConstants.getProductByIdLoaded: {
        return { ...state, product: action.payload };
      }
      default:
        return state
    }
  }