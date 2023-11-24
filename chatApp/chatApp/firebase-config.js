
 // Import the functions you need from the SDKs you need
 //import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkLbxKbGxh6GePIcIwH5pfbUd4-zr734I",
  authDomain: "chatapp-ef7c8.firebaseapp.com",
  projectId: "chatapp-ef7c8",
  storageBucket: "chatapp-ef7c8.appspot.com", 
  messagingSenderId: "558148239746",
  appId: "1:558148239746:web:a1193d9f1c0e71c33c0f9b",
 // measurementId: "G-DGLW6S30Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)