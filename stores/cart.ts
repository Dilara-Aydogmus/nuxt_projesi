import { defineStore } from "pinia";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from "~/firebase"; // Firestore instance

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Array<{ id: number; name: string; price: number; image: string }>,
  }),
  actions: {
    async addToCart(item: { id: number; name: string; price: number; image: string }) {
      this.items.push(item);
      await this.saveCartToFirestore();
    },
    async removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
      await this.saveCartToFirestore();
    },
    async clearCart() {
      this.items = [];
      await this.saveCartToFirestore();
    },
    async saveCartToFirestore() {
      try {
        const userId = "sampleUserId"; // Gerçek kullanıcı kimliğini kullanın
        const userCartDocRef = doc(db, "cart", userId);
        await setDoc(userCartDocRef, { cartItems: this.items });
        console.log("Cart saved to Firestore successfully:", this.items);
      } catch (error) {
        console.error("Error saving cart to Firestore:", error);
      }
    },
  },
});
