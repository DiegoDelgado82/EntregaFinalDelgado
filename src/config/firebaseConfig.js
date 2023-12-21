

import { initializeApp } from "firebase/app";
import {getFirestore }from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDYMooDG1HtaOpE8pjgq3g84XqsfCTgpM4",
  authDomain: "particular-370ce.firebaseapp.com",
  projectId: "particular-370ce",
  storageBucket: "particular-370ce.appspot.com",
  messagingSenderId: "124665471246",
  appId: "1:124665471246:web:ff73b45a542d6cb50af75f"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);

