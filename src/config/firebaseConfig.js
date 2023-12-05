
import { initializeApp } from "firebase/app";
import {getFirestore }from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDXSMm4fwFeh-sAcgwHIbPy53TnMdJQeKw",
  authDomain: "coder-60995.firebaseapp.com",
  projectId: "coder-60995",
  storageBucket: "coder-60995.appspot.com",
  messagingSenderId: "900871163353",
  appId: "1:900871163353:web:a5e4d7feccfa2fbf825dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);