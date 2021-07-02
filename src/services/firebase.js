import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyDwb4n97lh2hKEVf6D6c7d1mj5ejXtZZAw",
    authDomain: "undercontrol-28937.firebaseapp.com",
    databaseURL: "https://undercontrol-28937-default-rtdb.firebaseio.com",
    projectId: "undercontrol-28937",
    storageBucket: "undercontrol-28937.appspot.com",
    messagingSenderId: "407578180403",
    appId: "1:407578180403:web:0697b94ce48c6c1bc19c46"
  };

  
firebase.initializeApp( firebaseConfig );

const database = firebase.database();

 export { firebase, database };