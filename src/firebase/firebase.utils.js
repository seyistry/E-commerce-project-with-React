import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCwLLNOBQS3IqYjxOW6_azmikhjY8o0WWc",
    authDomain: "ecomm-db-37d27.firebaseapp.com",
    projectId: "ecomm-db-37d27",
    storageBucket: "ecomm-db-37d27.appspot.com",
    messagingSenderId: "10703125138",
    appId: "1:10703125138:web:0086af7bdd20cbdb20444b"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;