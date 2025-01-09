import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Firestore modülü

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyChnQN9QX9jcuLEQ1ewQqWdEiel2Jt-5GI",
  authDomain: "nuxt-proje2.firebaseapp.com",
  projectId: "nuxt-proje2",
  storageBucket: "nuxt-proje2.appspot.com",
  messagingSenderId: "1058376311425",
  appId: "1:1058376311425:web:5ad56a1a7db4cbfda56380",
};

// Initialize Firebase App (Prevent Multiple Initializations)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app); // Firestore instance

// Save cart items to Firestore
export const saveCartToFirebase = async (
  cartItems: Array<{ id: number; name: string; price: number; image: string }>
) => {
  try {
    if (!cartItems || cartItems.length === 0) {
      console.error("No items to save");
      return;
    }

    // Firestore'a kayıt
    const userCartDocRef = doc(db, "cart", "userCart");
    await setDoc(userCartDocRef, { cartItems });
    console.log("Cart saved to Firestore successfully:", cartItems);
  } catch (error) {
    console.error("Error saving cart to Firestore:", error);
  }
};

// Export Firebase instance
export { app, db };
