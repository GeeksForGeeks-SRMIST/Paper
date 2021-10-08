import firebase from "firebase/compat/app";
import "firebase/compat/storage";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "paper-e92a7",
  storageBucket: "paper-e92a7.appspot.com",
  messagingSenderId: process.env.RECT_APP_FIREBASE_MESSAGE_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage().ref();
export { storage, firebase as default };
