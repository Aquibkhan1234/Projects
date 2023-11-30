
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider } from 'firebase/auth';

 const firebaseConfig = {
  apiKey: "AIzaSyDDfAgDWaQoUY8RP7OkBUx9MubBiodYbSY",
  authDomain: "blogproject-6b7a6.firebaseapp.com",
  projectId: "blogproject-6b7a6",
  storageBucket: "blogproject-6b7a6.appspot.com",
  messagingSenderId: "280108047693",
  appId: "1:280108047693:web:c132ba1aee8e09dd6c2b04"
};

 const app = initializeApp(firebaseConfig);
  
 export const db = getFirestore(app);
 export const auth = getAuth(app);
 export const provider = new GoogleAuthProvider();