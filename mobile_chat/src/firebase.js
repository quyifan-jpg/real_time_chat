
import firebase from 'firebase/app';
import "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getAuth,GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth"// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,addDoc, getDocs , collection,query, orderBy, limit,FieldValue } from 'firebase/firestore';
import { async } from '@firebase/util';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtxSQ9XtLKlhs5EOyI9tTfHFrirLnVe5c",
  authDomain: "react-chat-49d2e.firebaseapp.com",
  projectId: "react-chat-49d2e",
  storageBucket: "react-chat-49d2e.appspot.com",
  messagingSenderId: "1030654197419",
  appId: "1:1030654197419:web:2739aba211a40103b5c1ee",
  measurementId: "G-FZ74EGVZRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { firestore, auth }