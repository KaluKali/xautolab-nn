import * as actionTypes from '../actionTypes/actionTypes';

export const clearMessage = () => ({
  type: actionTypes.CLEAR_MESSAGE,
});

export const addMessage = message => ({
  type: actionTypes.ADD_MESSAGE,
  payload: {
    message,
  },
});
