<template>
  <div class="drawer">
    <v-navigation-drawer
      v-model="drawer"
      temporary="true"
      location="right"
      width="400"
    >
      <v-card elevation="0">
        <v-card-title
          class="px-0 d-flex justify-space-between"
          style="font-size: 16px; font-weight: 700"
          >Shopping Cart
          <v-icon @click="drawer = false">mdi-close</v-icon>
        </v-card-title>
        <v-card-text
          class="px-0"
          style="font-size: 14px; font-weight: 600; color: #757575"
          >{{ cartItem.length }} items</v-card-text
        >
        <v-card-text
          v-if="!cartItem.length"
          class="px-0 pt-0"
          style="font-size: 14px; font-weight: 600; color: #757575"
          >Free Shipping For all orders over $10000:00</v-card-text
        >
        <v-card-text
          v-if="!cartItem.length"
          class="px-0 pt- text-center"
          style="font-size: 14px; font-weight: 600; color: #757575"
          >Your cart is empty</v-card-text
        >
        <div class="bar mt-4 position-relative" v-if="cartItem.length">
          <svg
            class="icon-shipping-truck"
            viewBox="0 0 40.55 24"
            width="35"
            :fill="
              parseInt((calcTotal / 10000) * 100) < 50
                ? '#F44336'
                : parseInt((calcTotal / 10000) * 100) >= 50 &&
                  parseInt((calcTotal / 10000) * 100) < 100
                ? '#ff9800'
                : '#4CAf50'
            "
            :style="`position: absolute; bottom: 50%; left: calc(${
              parseInt((calcTotal / 10000) * 100) <= 100
                ? parseInt((calcTotal / 10000) * 100)
                : 100
            }% - 30px); z-index: 1; transition: 0.2s all ease-in-out;`"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="truck-body"
                  d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                ></path>
                <path
                  class="truck-body"
                  d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                ></path>
                <path
                  class="wheel"
                  :fill="
                    parseInt((calcTotal / 10000) * 100) < 50
                      ? '#F44336'
                      : parseInt((calcTotal / 10000) * 100) >= 50 &&
                        parseInt((calcTotal / 10000) * 100) < 100
                      ? '#ff9800'
                      : '#4CAf50'
                  "
                  d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                ></path>
                <path
                  class="wheel"
                  fill="white"
                  d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                ></path>
              </g>
            </g>
          </svg>
          <v-progress-linear
            :color="
              parseInt((calcTotal / 10000) * 100) < 50
                ? 'red'
                : parseInt((calcTotal / 10000) * 100) > 50 &&
                  parseInt((calcTotal / 10000) * 100) < 100
                ? 'orange'
                : 'green'
            "
            height="10"
            :model-value="
              parseInt((calcTotal / 10000) * 100) <= 100
                ? parseInt((calcTotal / 10000) * 100)
                : 100
            "
            striped=""
          >
          </v-progress-linear>
        </div>
        <v-card-text
          v-if="cartItem.length && 10000 - calcTotal > 0"
          class="px-0"
          style="font-size: 13px; font-weight: 600; color: #757575"
          >Only ${{ 10000 - calcTotal }} left in your cart</v-card-text
        >
        <v-card-text
          v-if="cartItem.length && 10000 - calcTotal <= -0"
          class="px-0"
          style="font-size: 13px; font-weight: 600; color: #757575"
          >Your Order now is free</v-card-text
        >
        <v-card-actions v-if="!cartItem.length">
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: #757575;
            "
            class="text-capitalize w-100"
            variant="outlined"
            density="compact"
            height="45"
            @click="drawer = false"
            >Continue shopping</v-btn
          >
        </v-card-actions>
        <v-card
          class="pa-0 mt-5"
          elevation="0"
          v-if="cartItem.length"
          max-height="400"
          style="overflow-y: auto"
        >
          <v-container class="px-0" v-if="cartItem.length > 0 && cartItem[0]">
            <v-row
              v-for="cartItem in cartItem"
              :key="cartItem.id"
              class="d-flex align-center"
            >
              <v-col cols="5">
                <img :src="cartItem.thumbnail" alt="" class="w-100" />
              </v-col>
              <v-col cols="7">
                <v-card-title
                  style="
                    white-space: pre-wrap;
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 1.2;
                  "
                  >{{ cartItem.title }} Sample -
                  {{ cartItem.category }}</v-card-title
                >
                <v-card-title
                  class="pt-0"
                  style="
                    white-space: pre-wrap;
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 1.2;
                    color: #757575;
                  "
                >
                  category: {{ cartItem.category }}
                </v-card-title>
                <v-card-text
                  class="pt-0"
                  style="
                    white-space: pre-wrap;
                    font-size: 15px;
                    font-weight: 600;
                    line-height: 1.2;
                  "
                  >${{ cartItem.price * cartItem.quantity }}</v-card-text
                >
                <div class="quant d-flex align-center justify-space-between">
                  <div
                    class="counter px-1"
                    style="
                      border-radius: 30px;
                      border: 1px solid rgb(13 13 13 / 68%);
                      width: fit-content;
                      margin-left: 13px;
                    "
                  >
                    <v-icon
                      class="mx-1"
                      style="width: 31px"
                      @click="
                        cartItem.quantity > 1 ? cartItem.quantity-- : false
                      "
                      >mdi-minus</v-icon
                    >
                    <input
                      type="number"
                      style="border: none; outline: none; width: 29px"
                      class="text-center py-2"
                      min="1"
                      v-model="cartItem.quantity"
                    />
                    <v-icon @click="cartItem.quantity++" class="mx-1"
                      >mdi-plus</v-icon
                    >
                  </div>
                  <v-icon @click="removeProduct(cartItem.id)">mdi-close</v-icon>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-card>
      <v-card elevation="0" class="pt-0 mt-5" v-if="cartItem.length">
        <v-card-actions class="mt-5" max-height="200">
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: white;
              width: 100%;
            "
            class="text-capitalize"
            density="compact"
            height="45"
            color="blue"
            variant="elevated"
            elevation="0"
            @click="$router.push({ name: 'card-checkout' })"
            >Checkout</v-btn
          >
        </v-card-actions>
        <v-card-actions>
          <v-btn
            style="
              text-transform: none;
              border-radius: 30px;
              border-color: black;
            "
            class="text-capitalize w-100"
            density="compact"
            height="45"
            color="black"
            variant="outlined"
            @click="$router.push({ name: 'card-product' })"
            >View Cart</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { cartStore } from "@/stores/Cart";
import { mapActions, mapState } from "pinia";
export default {
  name: "CartDrawer",
  inject: ["Emitter"],
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    ...mapActions(cartStore, ["getProducts", "removeProduct"]),
  },
  computed: {
    ...mapState(cartStore, ["cartItem"]),
    calcTotal() {
      let total = 0;
      this.cartItem.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = !this.drawer;
    });
    this.getProducts();
  },
};
</script>
