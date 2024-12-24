// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore için import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLaIZdVJyuukKE7pGET21q-Ww5ryPytwQ",
  authDomain: "nuxt-project-84adb.firebaseapp.com",
  projectId: "nuxt-project-84adb",
  storageBucket: "nuxt-project-84adb.firebasestorage.app",
  messagingSenderId: "806563431404",
  appId: "1:806563431404:web:e183c28309aa45d14876c9",
  measurementId: "G-2EX1WEPB7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore başlatma

export { app, db };
