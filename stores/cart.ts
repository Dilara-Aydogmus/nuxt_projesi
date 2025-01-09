import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Array<{ id: number; name: string; price: number; image: string }>,
  }),
  actions: {
    addToCart(item: { id: number; name: string; price: number; image: string }) {
      this.items.push(item);
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.items = [];
    },
  },
});
