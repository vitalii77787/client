import { combineReducers } from 'redux';
import { products } from './product.reducer';
import { categories } from './categories.reducer';
import {cart} from  './cart.reducer';
import { registerModelReducer } from './registerModel.reducer';
import { filters } from './filters.reducer';
import { loginModelReducer } from './loginModel.reducer';


const rootReducer = combineReducers({
  products,
  categories,
  cart,
  register: registerModelReducer,
  filters,
  login:loginModelReducer
  });
 export default rootReducer;