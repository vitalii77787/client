import { cartConstants } from '../_constants/cart.constants';


const defaultState = {
    products: [],
  };

  export function cart(state = defaultState, action) {
    switch (action.type) {
      case cartConstants.addToCart:{
          return{
              ...state,
            products: [...state.products, action.payload]
          }
      }
      case cartConstants.removeFromCart:{
          return{
            ...state,
           products: state.products.filter(item => item !== action.payload)
          }
      }
      default:
        return state
    }
  }