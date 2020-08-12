import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
  isLogged: false,
  isAdmin: false,
  userEmail: null,
  name: 'edit your details...',
  secondName: 'edit your details...',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        isLogged: true,
        userEmail: action.payload.email
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLogged: false,
        userEmail: null
      };
    case actionTypes.UPDATE_USER_DETAILS:
      return {
        ...state,
        ...action.payload.userDetails
      };
    default:
      return state;
  }
};

export default userReducer;
