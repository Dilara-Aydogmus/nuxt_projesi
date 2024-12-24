
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };