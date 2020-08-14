import { combineReducers } from 'redux';
import user from './userReducer';
import info from './infoReducer';
import products from './productsReducer';

import { LOG_OUT_USER } from '../actionTypes/actionTypes';

const appReducer = combineReducers({
  user,
  info,
  products,
});

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT_USER) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
