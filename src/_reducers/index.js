import { combineReducers } from 'redux';
import { products } from './product.reducer';
import { categories } from './categories.reducer';
import {cart} from  './cart.reducer';
import { registerModelReducer } from './registerModel.reducer';
import { filters } from './filters.reducer';
import { loginModelReducer } from './loginModel.reducer';
import { wish } from './wish.reducer';
import { authentication } from './user.reducer';
import { order } from './order.reducer';


const rootReducer = combineReducers({
  products,
  categories,
  cart,
  register: registerModelReducer,
  filters,
  login:loginModelReducer,
  wish,
  authentication,
  order
  });
 export default rootReducer;