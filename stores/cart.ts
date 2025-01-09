import { defineStore } from "pinia";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(); // Firestore instance


export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Array<{ id: number; name: string; price: number; image: string }>,
  }),
  actions: {
    async addToCart(item: { id: number; name: string; price: number; image: string }) {
      this.items.push(item);

      // Firestore'a kaydet
      await this.saveCartToFirestore();
    },
    async removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);

      // Firestore'u güncelle
      await this.saveCartToFirestore();
    },
    async clearCart() {
      this.items = [];

      // Firestore'daki sepeti temizle
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
