import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  message: ""
};

const infoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        message: action.payload.message
      };
    case actionTypes.CLEAR_MESSAGE:
      return {
        ...state,
        message: ""
      };
    default:
      return state;
  }
};

export default infoReducer;
