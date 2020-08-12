import * as actionTypes from '../actionTypes/actionTypes';
import db, { auth } from '../../db/db';
import { clearMessage, addMessage } from './infoActions';

export const logInUser = user => dispatch => {
  auth
    .signInWithEmailAndPassword(user.email, user.password)
    .then(() => dispatch(userLoggedIn(user.email)))
    .then(() => dispatch(clearMessage()))
    .catch(error => dispatch(addMessage(error.message)));
};

export const userLoggedIn = email => dispatch => {
  dispatch(fetchUserDetails(email));
  dispatch({
    type: actionTypes.LOGIN_USER,
    payload: {
      email
    }
  });
};

const userLoggedOut = () => ({
  type: actionTypes.LOG_OUT_USER
});

export const logOutUser = () => dispatch => {
  auth
    .signOut()
    .then(dispatch(userLoggedOut()))
    .catch(error => console.log(error));
};

export const fetchUserDetails = user => dispatch => {
  db.collection('users')
    .doc(user)
    .get()
    .then(doc => {
      if (doc.exists) {
        const userDetails = doc.data();
        dispatch(updatedUserDetails(userDetails));
      } else {
        console.log('No such document!');
      }
    })
    .catch(error => {
      console.log('Error getting document:', error);
    });

  // db.collection("product")
  //   .add({
  //     category: 'ss',
  //     color: 'df',
  //     description: 'dfs',
  //     discount: 2,
  //     isActive: true,
  //     name: 'ddd',
  //     pictures: ['dfd'],
  //     price: 33,
  //     tags: ['ddd']
  //   })
  //    .then(r =>{
  //    });
  // db.collection('product')
  //   .limit(3)
  //   .get()
  //   .then(r => console.log(r.docs[0].data()));

  // const citiesRef = db.collection('product');
  // citiesRef.where('category', '==', 'ss').get().then(r => console.log(r.docs[0].data()));
};

export const updateUserDetails = user => dispatch => {
  db.collection('users')
    .doc(user.userEmail)
    .update(user)
    .then(dispatch(updatedUserDetails(user)));
};

export const updatedUserDetails = userDetails => ({
  type: actionTypes.UPDATE_USER_DETAILS,
  payload: {
    userDetails
  }
});
