import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore"; // Firestore modülü

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

import { v4 as uuidv4 } from 'uuid'; // This will help in generating unique IDs for the user

export const saveUserToFirebase = async (
  nameSurname: string,
  email: string,
  phoneNumber: string
) => {
  try {
    // Generate a unique userId using the email or UUID
    const userId = uuidv4();  // This generates a random unique ID

    // Create a document reference using the userId
    const userRef = doc(db, "users", userId); // Use the generated userId as document ID

    // Set user data
    await setDoc(userRef, {
      userId, // Save the userId as part of the user data
      nameSurname,
      email,
      phoneNumber,
    });

    console.log("User registered successfully:", nameSurname);
  } catch (error) {
    console.error("Error registering user:", error);
  }
};



// Function to get user data by userId
export const getUser = async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);  // Get document reference
      const userSnap = await getDoc(userRef);  // Fetch document snapshot
  
      if (userSnap.exists()) {
        return userSnap.data();  // Return the document data if it exists
      } else {
        console.log("No such user!");
        return null;
      }
    } catch (error) {
      console.error("Error getting user data:", error);  // Handle error
    }
  };
  
  // Function to update user data by userId
  export const updateUser = async (userId: string, nameSurname: string, email: string, phoneNumber: string) => {
    try {
      const userRef = doc(db, "users", userId);  // Get document reference for the user
      await updateDoc(userRef, {  // Update user document in Firestore
        nameSurname,  // Update the user's name and other fields
        email,
        phoneNumber
      });
  
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);  // Handle error
    }
  };
// Export Firebase instance
export { app, db };
