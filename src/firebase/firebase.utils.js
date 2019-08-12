import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDh8rb7mgpk2f-Wgh5BZSFDBxdioXw9Mls",
  authDomain: "crwn-db-2a614.firebaseapp.com",
  databaseURL: "https://crwn-db-2a614.firebaseio.com",
  projectId: "crwn-db-2a614",
  storageBucket: "",
  messagingSenderId: "844890034792",
  appId: "1:844890034792:web:5e98a8ef4887f6c0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
