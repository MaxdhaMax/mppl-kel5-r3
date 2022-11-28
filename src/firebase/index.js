// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from 'firebase/database'
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnGmSA3gSxPF1ZDbAWhIRnFRhbOrbz3zQ",
  authDomain: "komroom-1e3f0.firebaseapp.com",
  projectId: "komroom-1e3f0",
  storageBucket: "komroom-1e3f0.appspot.com",
  messagingSenderId: "993880946292",
  appId: "1:993880946292:web:664ef664b8ade0ecb54321",
  measurementId: "G-BBY849RHM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app)

export default firebaseConfig