import firebase from 'firebase/app';
import 'firebase/firestore';

const API_KEY = process.env.REACT_APP_FIREBASE_KEY;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'where-is-waldo-a70d9.firebaseapp.com',
  databaseURL: 'https://where-is-waldo-a70d9.firebaseio.com',
  projectId: 'where-is-waldo-a70d9',
  storageBucket: 'where-is-waldo-a70d9.appspot.com',
  messagingSenderId: '7035074159',
  appId: '1:7035074159:web:8e9fecfb3925bfc042ff9a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
