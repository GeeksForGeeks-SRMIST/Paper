import firebase from "firebase/compat/app";
import "firebase/compat/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDf7ftP3AqSeK2_4ehDsFUIPqEG8JghZx4",
  authDomain: "paper-e92a7.firebaseapp.com",
  projectId: "paper-e92a7",
  storageBucket: "paper-e92a7.appspot.com",
  messagingSenderId: "730047354785",
  appId: "1:730047354785:web:4068589550d1d2302b5de0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage().ref();
export { storage, firebase as default };
