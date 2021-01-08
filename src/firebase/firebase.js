import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYvuyu0iVBoBfEWmbRB5ueokLq_Y2XvKs",
  authDomain: "crown-ecom-23216.firebaseapp.com",
  projectId: "crown-ecom-23216",
  storageBucket: "crown-ecom-23216.appspot.com",
  messagingSenderId: "785175735051",
  appId: "1:785175735051:web:d425b7903cc3d4df2e500e",
  measurementId: "G-M8M86R59ZX",
});


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;