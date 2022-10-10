
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider  } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrjL7UzA9rATHiB6SWo8VeU0ge4tvkMzA",
  authDomain: "thebiglebowski-1adfc.firebaseapp.com",
  projectId: "thebiglebowski-1adfc",
  storageBucket: "thebiglebowski-1adfc.appspot.com",
  messagingSenderId: "611056954314",
  appId: "1:611056954314:web:48a8e6d6259abe38c7bd33"
};

// Initialize Firebase
// const firebaseApp =
 initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters(
    {prompt: "select_account",}
);

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);