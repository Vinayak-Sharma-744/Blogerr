import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZGfbDVQdwQfkczfyVfvujmCUlcoYAb0A",
  authDomain: "bloger-website.firebaseapp.com",
  projectId: "bloger-website",
  storageBucket: "bloger-website.appspot.com",
  messagingSenderId: "214739781195",
  appId: "1:214739781195:web:15e098a906c8e26ce1efce",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
