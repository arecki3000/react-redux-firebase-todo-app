import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBPvW16AX9WjU9R4Fl4dKYErCRQd5P4xk",
  authDomain: "react-redux-firebase-tod-591cd.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-tod-591cd.firebaseio.com",
  projectId: "react-redux-firebase-tod-591cd",
  storageBucket: "react-redux-firebase-tod-591cd.appspot.com",
  messagingSenderId: "653163532277",
  appId: "1:653163532277:web:d1a1d7a61588a4b7c35abc"
};

firebase.initializeApp(firebaseConfig);
firebaseConfig.firestore();

export default firebase;
