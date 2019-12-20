import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD-IZW30quREiUN_s3SAhCjUVphHz__uOk",
  authDomain: "clothing-master.firebaseapp.com",
  databaseURL: "https://clothing-master.firebaseio.com",
  projectId: "clothing-master",
  storageBucket: "clothing-master.appspot.com",
  messagingSenderId: "189692326566",
  appId: "1:189692326566:web:d027adfeef8bf12b83fa67"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
