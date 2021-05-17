import firebase from 'firebase';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCxqpR8RDnzKXDZTm3u9zIY3cFMYxoE4xM",
    authDomain: "books-online-ch.firebaseapp.com",
    projectId: "books-online-ch",
    storageBucket: "books-online-ch.appspot.com",
    messagingSenderId: "135002544176",
    appId: "1:135002544176:web:460a54b6c1ad5f89f0f5f5"
});

export const getFirebase = () => app;
export const getFireStore = () => firebase.firestore(app);