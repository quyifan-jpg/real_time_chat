import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth"// Import the functions you need from the SDKs you need

import { getFirestore,addDoc, getDocs , collection,query, orderBy, limit,FieldValue } from 'firebase/firestore';
import { async } from '@firebase/util';
import SignIn from './components/SignIn';
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
function App() {
  const [user] = useAuthState(auth);
  return (
    <>
    <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      hello world!!!
      <section>
      {user ? <ChatRoom /> : <SignIn />}
      </section>
    </>
  );
}



function SignOut(){
  return (
    <section>
    { auth.currentUser ?<div>
      <button onClick={()=>{signOut(auth)}}>Sign Out</button>
    </div>: <div></div> }
    </section>
  )
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore,'messages')
  useEffect( ()=>{
    const getMessages = async () =>{
      const data = await getDocs(messagesRef)
      console.log(data)
    }
    getMessages();
  }, [])
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div>
      <span ref={dummy}></span>
  <form onSubmit={sendMessage}>

    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

    <button type="submit" disabled={!formValue}>🕊️</button>

  </form></div>
  )
};

export default App;