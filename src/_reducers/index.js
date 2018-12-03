import { combineReducers } from 'redux';
import { products } from './product.reducer';
import { categories } from './categories.reducer';


const rootReducer = combineReducers({
  products,
  categories
  });
 export default rootReducer;