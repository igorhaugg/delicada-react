import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAjVapxVZIKL6C_wFj7y9gMTEeZq8ZD3-g',
  authDomain: 'delicada-mulher.firebaseapp.com',
  databaseURL: 'https://delicada-mulher.firebaseio.com',
  projectId: 'delicada-mulher',
  storageBucket: 'delicada-mulher.appspot.com',
  messagingSenderId: '405831402266'
  // apiKey: process.env.FIREBASE_API_KEY,
  // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const storage = firebase.storage().ref();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, storage, googleAuthProvider, database as default };
