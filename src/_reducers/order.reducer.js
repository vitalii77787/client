import { orderConstants } from '../_constants/order.constants';


const defaultState = {
  orderLine:{
    isValid:false,
    productId:'',
    productCount: ''
  },
  userName: {
    value: ''
  },
  userSurname: {
    value: ''
  },
  userPhone: {
    value: ''
  },
  userEmail: {
    value: ''
  },
  userPay: {
    value: ''
  },
  userDelivery:{
    value:'By address'
  },
  deliveryOptions:[
    "By address",
    "In the post office"
  ],
  paymentOptions: [
    {
      id: 1,
      value: 'In cash'
    },
    {
      id: 2,
      value: 'cashless payments'
    },
    {
      id: 3,
      value: 'payment on the card'
    }
  ],
  userArea:{
    value: ''
  },
  userCity:{
   value:''
  },
  userStreet:{
    value:''
  },
  userHouse:{
    value:''
  },
  userFlat:{
    value:''
  },
  areas:{},
  cities:''
};

export function order(state = defaultState, action) {
  switch (action.type) {
    case orderConstants.updateState: {
      return {
        ...state,
        ...action.payload
      }
    }
    case orderConstants.updateCities:{
      return{
        ...state,
        cities:state.areas.filter(item=>item.name===action.payload).map(item=>item.areas)[0]
      }
    }
    case orderConstants.setOrderLine:{
      return{
        ...state,
        orderLine:action.payload
      }
    }
    case orderConstants.setAreas:{
      return {
        ...state,
        areas:action.payload
      }
    }
    case orderConstants.setDefault: {
      return {
        ...state,
        ...defaultState
      }
    }
    case orderConstants.updateName: {
      return {
        ...state,
        userName: action.payload
      }
    }
    case orderConstants.updateSurname: {
      return {
        ...state,
        userSurname: action.payload
      }
    }
    default:
      return state
  }
}
