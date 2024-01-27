import { defineStore } from "pinia";

export const cartStore = defineStore("cartStore", {
  state: () => ({
    cartItem: [],
  }),
  actions: {
    addProduct(product) {
      let exist = false;
      for (let i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].id === product.id) {
          this.cartItem[i].quantity += product.quantity;
          exist = true;
          break;
        }
      }
      if (!exist) {
        this.cartItem.push(JSON.parse(JSON.stringify(product)));
      }
      localStorage.setItem("cart", JSON.stringify(this.cartItem));
      console.log(this.cartItem);
    },
    removeProduct(id) {
      for (let i = 0; i < this.cartItem.length; i++) {
        if (this.cartItem[i].id === id) {
          this.cartItem.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cart", JSON.stringify(this.cartItem));
    },
    getProducts() {
      if (localStorage.getItem("cart")) {
        this.cartItem = JSON.parse(localStorage.getItem("cart"));
      }
      console.log(this.cartItem);
    },
    setLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.cartItem));
    },
    resetData() {
      this.cartItem = [];
      localStorage.removeItem("cart");
    },
  },
});
