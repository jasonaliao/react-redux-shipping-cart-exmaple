import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cart from './cart';
import shop from './shop';

export default combineReducers({
  router: routerReducer,
  cart,
  shop
});
