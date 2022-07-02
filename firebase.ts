// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAesDDR72FD_0nvGQteglAFgG3xnszqHAc",
  authDomain: "netflix-f7070.firebaseapp.com",
  projectId: "netflix-f7070",
  storageBucket: "netflix-f7070.appspot.com",
  messagingSenderId: "289572570149",
  appId: "1:289572570149:web:0b7a7c8ac9f2e7e0e22bcc",
  measurementId: "G-H7PP1DT0SX",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
