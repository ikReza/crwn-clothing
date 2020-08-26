import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnpmkHYXrDbl8P7mGXbSuS7CDLZxFw15Y",
  authDomain: "crwn-db-e4ed1.firebaseapp.com",
  databaseURL: "https://crwn-db-e4ed1.firebaseio.com",
  projectId: "crwn-db-e4ed1",
  storageBucket: "crwn-db-e4ed1.appspot.com",
  messagingSenderId: "542984046851",
  appId: "1:542984046851:web:9318f31b2b7c51c99e4136",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
