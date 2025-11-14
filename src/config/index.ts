import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMKSut6xUk2rO5ygQ8uSkTV92NOv7MgQ8",
  authDomain: "greenshop-f6019.firebaseapp.com",
  projectId: "greenshop-f6019",
  storageBucket: "greenshop-f6019.firebasestorage.app",
  messagingSenderId: "672106344048",
  appId: "1:672106344048:web:ab1560d0bacc1ebdbf8eb5",
  measurementId: "G-QXSS8PDGJ4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};
export const registerWithGoogle = () => {
  return signInWithPopup(auth, provider);
};