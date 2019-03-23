import { productConstants } from '../_constants/products.constants';

const defaultState = {
    product:{},
    products: [],
    wishList: [],
    newProducts: [],
    activeProductId: 0,
    productActiveImage:null,
    activeSortLabel:'default',
    //priceValue:{min:0, max:1000}
    priceValue:[0,1000]
  };

  export function products(state = defaultState, action) {
    switch (action.type) {
      case productConstants.setPrice:{
        return{ ...state, priceValue:action.payload};
      }
      case productConstants.getNewProductsLoaded:{
        return { ...state, newProducts: action.payload };
      }
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
        let newProducts = [ ...state.products ];
        if (action.payload === "name") {
          newProducts = newProducts.sort(sortByKeyText(action.payload));
        }
        else {
          newProducts = newProducts.sort(sortByKeyNumber(action.payload));
        }
  
        return {
          ...state, products: newProducts
        }
      }
  
      case productConstants.setSortLabel:{
        return{
          ...state, activeSortLabel:action.payload
        }
      }
      case productConstants.setToggle:{
        return{
          ...state,
          products: state.products.map(product=>product.id===action.payload?
            {
              ...product, isWish:!product.isWish
            }:
            product)
        }
      }
      default:
        return state
    }
  }

  const sortByKeyNumber = key => (a, b) => a[key] - b[key];
const sortByKeyText = key => (a, b) => a[key].localeCompare(b[key]);