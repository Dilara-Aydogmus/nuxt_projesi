/*import { realtimeDb } from "~/firebase"; // Ensure the path is correct
import { ref, set } from "firebase/database";

export const saveCartToFirebase = async (
  cartItems: Array<{ id: number; name: string; price: number; image: string }>
) => {
  try {
    const userCartRef = ref(realtimeDb, "cart/"); // Database reference for the cart
    await set(userCartRef, cartItems);
    console.log("Cart saved to Firebase successfully");
  } catch (error) {
    console.error("Error saving cart to Firebase:", error);
  }
};
*/