import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAt-0n4b6TF0jAjrenzeShb9BTYni9eQQE",
    authDomain: "crwn-db-2f984.firebaseapp.com",
    databaseURL: "https://crwn-db-2f984.firebaseio.com",
    projectId: "crwn-db-2f984",
    storageBucket: "crwn-db-2f984.appspot.com",
    messagingSenderId: "424286864259",
    appId: "1:424286864259:web:6361ebba8362022ee36cb6",
    measurementId: "G-B2P5RW4EY5"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

