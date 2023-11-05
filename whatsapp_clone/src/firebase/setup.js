
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC1ZraHmlRdxhyWOSTSc6TfMCkoqV0Kq3Q",
  authDomain: "whatsapp-clone-10b49.firebaseapp.com",
  projectId: "whatsapp-clone-10b49",
  storageBucket: "whatsapp-clone-10b49.appspot.com",
  messagingSenderId: "24525367020",
  appId: "1:24525367020:web:fad1be52017d7bf36327c9"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const googleProvider = new GoogleAuthProvider(app)
  export const database = getFirestore(app)