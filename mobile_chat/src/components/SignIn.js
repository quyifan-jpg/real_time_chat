import { getAuth,GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth"// Import the functions you need from the SDKs you need

import { getFirestore,addDoc, getDocs , collection,query, orderBy, limit,FieldValue } from 'firebase/firestore';
import {auth} from "../firebase"
function SignIn() {

    const signInWithGoogle = () => {
      var provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )
    }
export default SignIn