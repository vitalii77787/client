import { cartConstants } from '../_constants/cart.constants';


const defaultState = {
    productsId: [],
  };

  export function cart(state = defaultState, action) {
    switch (action.type) {
      case cartConstants.addToCart:{
          return{
              ...state,
            products: [...state.productsId, action.payload]
          }
      }
      case cartConstants.removeFromCart:{
          return{
            ...state,
           products: state.productsId.filter(item => item !== action.payload)
          }
      }
      default:
        return state
    }
  }