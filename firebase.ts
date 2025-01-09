import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getDatabase } from "firebase/database"; // Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyChnQN9QX9jcuLEQ1ewQqWdEiel2Jt-5GI",
  authDomain: "nuxt-proje2.firebaseapp.com",
  projectId: "nuxt-proje2",
  storageBucket: "nuxt-proje2.appspot.com",
  messagingSenderId: "1058376311425",
  appId: "1:1058376311425:web:5ad56a1a7db4cbfda56380",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore instance
const realtimeDb = getDatabase(app); // Realtime Database instance

export { app, db, realtimeDb };
