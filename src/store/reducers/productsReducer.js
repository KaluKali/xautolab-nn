import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
  isLoading: false,
  lastDoc: [],
  products: [],
  pointer: {},
  error: '',
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_PRODUCTS_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GETTING_PRODUCTS_FINISHED:
      return {
        ...state,
        isLoading: false,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
