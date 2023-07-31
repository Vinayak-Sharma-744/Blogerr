// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn5tJm8oMVHxpSTm-U1HbDE3UNZqojp5g",
  authDomain: "blogerr-f5a61.firebaseapp.com",
  projectId: "blogerr-f5a61",
  storageBucket: "blogerr-f5a61.appspot.com",
  messagingSenderId: "455828463294",
  appId: "1:455828463294:web:0600caa15aaf117a0d48ef",
  measurementId: "G-1VE25DJG1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)