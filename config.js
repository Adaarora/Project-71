import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBOmoczwkk3lgRGmLhQowt26NDAmSf5goE",
    authDomain: "e-ride-6aa59.firebaseapp.com",
    projectId: "e-ride-6aa59",
    storageBucket: "e-ride-6aa59.appspot.com",
    messagingSenderId: "938932927279",
    appId: "1:938932927279:web:2066f8b6f54f3c4b00ffda"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


