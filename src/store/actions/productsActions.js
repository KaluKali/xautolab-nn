import { GETTING_PRODUCTS_FAILURE, GETTING_PRODUCTS_FINISHED, GETTING_PRODUCTS_STARTED } from '../actionTypes/actionTypes';


export const getProductsNext = (pointer, lastDoc, perPage) => {
  return dispatch => {
    dispatch(getProductsStarted());
    if (lastDoc.length){
      pointer.startAfter(lastDoc[lastDoc.length-1]).limit(perPage)
        .get()
        .then(docs => {
          let productsInCategory = docs.docs.map((doc) => ({_id:doc.id,...doc.data()}));

          dispatch(getProductsFinished(productsInCategory,pointer,docs.docs));
        })
        .catch(err => dispatch(getProductsFailure(err)))
    } else {
      pointer.limit(perPage)
        .get()
        .then(docs => {
          let products = docs.docs.map((doc) => ({_id:doc.id,...doc.data()}));
          dispatch(getProductsFinished(products,pointer,docs.docs));
        })
    }
  }
};

export const getProductsPrev = (pointer, lastDoc, perPage) => {
  return dispatch => {
    dispatch(getProductsStarted());
    if (lastDoc){
      pointer.endBefore(lastDoc[0]).limitToLast(perPage)
        .get()
        .then(docs => {
          let products = docs.docs.map((doc) => ({_id:doc.id,...doc.data()}));
          dispatch(getProductsFinished(products,pointer,docs.docs));
        })
        .catch(err => dispatch(getProductsFailure(err)))
    } else {
      dispatch(getProductsFailure('getProductPrev: lastDoc undefined'));
    }
  }
};

const getProductsFinished = (products, pointer, lastDoc) => ({
  type: GETTING_PRODUCTS_FINISHED,
  payload: {
    products,
    pointer,
    lastDoc
  }
});

const getProductsStarted = () => ({
  type: GETTING_PRODUCTS_STARTED
});

const getProductsFailure = error => ({
  type: GETTING_PRODUCTS_FAILURE,
  payload: {
    error
  }
});
