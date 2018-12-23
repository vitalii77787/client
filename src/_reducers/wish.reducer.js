import { wishConstants } from '../_constants/wish.constants';

const defaultState = {
    wishProducts: [],
    wishListId: [],
  };

  export function wish(state = defaultState, action) {
    switch (action.type) {
      case wishConstants.toggleWishList:{
        let result=state.wishListId.filter(ownid=>ownid==action.payload);
        if (result.length>0)
        {
          return{
            ...state,
            wishListId: state.wishListId.filter(item => item !== action.payload)
          }
                 }
        else{
            return{
              ...state,
              wishListId:[...state.wishListId, action.payload]
           }
        }
      }
      case wishConstants.getWishProducts: {
        return {
          ...state,
          wishProducts: action.payload
        }
      }
      default:
        return state
    }
  }