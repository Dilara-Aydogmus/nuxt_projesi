import { defineStore } from "pinia";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from "~/firebase"; // Assuming you already have the Firebase setup
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique user IDs

export const useUserStore = defineStore("user", {
  state: () => ({
    nameSurname: "", // Combining first name and last name into one
    email: "",
    phoneNumber: "",
    password: "",
  }),
  actions: {
    async registerUser() {
      try {
        // Generate a unique userId using UUID
        const userId = uuidv4();

        // Create a document reference using the generated userId
        const userRef = doc(db, "users", userId); // Using userId as the document ID

        // Set the user data in Firestore
        await setDoc(userRef, {
          userId, // Save the userId as part of the user data
          nameSurname: this.nameSurname,
          email: this.email,
          phoneNumber: this.phoneNumber,
        });

        console.log("User registered successfully:", this.nameSurname);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    },
  },
});
