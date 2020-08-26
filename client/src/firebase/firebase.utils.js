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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
