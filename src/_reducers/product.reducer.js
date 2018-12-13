import { productConstants } from '../_constants/products.constants';

const defaultState = {
    product:{},
    products: [],
    activeProductId: 0,
    productActiveImage:0,
    activeSortLabel:''
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
      case productConstants.setDefault:{
        return { ...state, activeProductId: action.payload };
      }
      case productConstants.getProductByIdLoaded: {
        return { ...state, product: action.payload };
      }
      case productConstants.setActiveImage: {
        return { ...state, productActiveImage: action.payload };
      };
      case productConstants.setDefaultImage: {
        return { ...state, productActiveImage: action.payload };
      };
      case productConstants.sortProducts:{
        return {
          ...state, products: state.products.slice().sort(sortByKey(action.payload))
        }
      }
      case productConstants.setSortLabel:{
        return{
          ...state, activeSortLabel:action.payload
        }
      }
      default:
        return state
    }
  }

  const sortByKey = key => (a, b) => a[key] > b[key]