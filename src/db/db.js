import config from './config';
import firebase from 'firebase/app';
require('firebase/firestore');
require('firebase/auth');

firebase.initializeApp(config);

const db = firebase.firestore();


export const db_products = db.collection('products');
export const auth = firebase.auth();
export default db;
