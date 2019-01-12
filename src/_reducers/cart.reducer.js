import { cartConstants } from '../_constants/cart.constants';


const defaultState = {
  cartProducts: [],
  productsId: []
};

export function cart(state = defaultState, action) {
  switch (action.type) {
    case cartConstants.getCartProductLoaded:{
      return {
        ...state, cartProducts:[...state.cartProducts, action.payload]
      }
    }
    case cartConstants.addToCart: {
      if(state.productsId.includes(action.payload))
      {
        return {
          ...state
        }
      }
      else{
        return{
          ...state,
          productsId: [...state.productsId, action.payload]
        }
      }
    }
    case cartConstants.removeFromCart: {
      return {
        ...state,
        productsId: state.productsId.filter(item => item !== action.payload)
      }
    }
    case cartConstants.getCartProducts: {
      return {
        ...state,
        cartProducts: action.payload
      }
    }
    case cartConstants.incrementProductCount: {
      return {
        ...state,
        cartProducts: state.cartProducts.map(product => product.id === action.payload ?
          {
            ...product, count: ++product.count
          } :
          product)
      }
    }
    case cartConstants.decrementProductCount: {
      return {
        ...state,
        cartProducts: state.cartProducts.map(product => product.id === action.payload ?
          {
            ...product, count: product.count > 0 ? --product.count : 0
          } :
          product)
      }
    }
    case cartConstants.deleteCartItem: {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(product => product.id !== action.payload),
        productsId: state.productsId.filter(id => id !== action.payload)
      }
    }
    default:
      return state
  }
}