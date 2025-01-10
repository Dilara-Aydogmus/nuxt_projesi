import { defineStore } from "pinia";
import { db } from "~/firebase"; // Firebase setup
import { v4 as uuidv4 } from "uuid"; // Import uuid to generate unique user IDs
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore"; // Firestore functions

interface User {
  nameSurname: string;
  email: string;
  phoneNumber: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    userId: "", // userId is initially empty, it will be set after registration or login
    nameSurname: "", // Combining first name and last name into one
    email: "",
    phoneNumber: "",
    password: "",
  }),
  actions: {
    // Initialize the user from localStorage
    initializeUser() {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        this.userId = storedUserId;
        console.log("Restored userId from localStorage:", storedUserId);
      } else {
        console.log("No userId found in localStorage.");
      }
    },

    // Register new user with a unique userId
    async registerUser() {
      try {
        const userId = uuidv4();
        this.userId = userId; // Set userId in the store
        localStorage.setItem("userId", userId); // Save userId to localStorage

        // Set the user document in Firestore
        const userRef = doc(db, "users", userId);
        await setDoc(userRef, {
          userId,
          nameSurname: this.nameSurname,
          email: this.email,
          phoneNumber: this.phoneNumber,
        });
        console.log("User registered successfully with ID:", userId);
      } catch (error) {
        console.error("Error registering user:", error);
      }
    },

    // Fetch user data based on userId from Firestore
    async fetchUser(userId: string) {
      try {
        if (!userId) {
          console.error("No userId provided to fetchUser.");
          return;
        }

        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data() as User;
          this.userId = userId;
          this.nameSurname = userData.nameSurname;
          this.email = userData.email;
          this.phoneNumber = userData.phoneNumber;
          console.log("User data fetched successfully:", userData);
        } else {
          console.log("User not found.");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    },

    // Update the user's nameSurname and ensure uniqueness
    async updateUser(nameSurname: string) {
      try {
        if (!this.userId) {
          console.error("User ID is required.");
          return;
        }

        // Query to check if the nameSurname already exists in the Firestore database
        const userQuery = query(
          collection(db, "users"),
          where("nameSurname", "==", nameSurname)
        );
        const userSnap = await getDocs(userQuery);

        // If nameSurname exists, update it
        if (!userSnap.empty) {
          const userRef = doc(db, "users", userSnap.docs[0].id);

          // Update the nameSurname field in Firestore
          await updateDoc(userRef, { nameSurname });

          // Update local state after successful update
          this.nameSurname = nameSurname;

          console.log("User updated successfully");
        } else {
          console.log(
            "Name does not exist in the database. Please enter a valid name."
          );
        }
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    },
  },
});
