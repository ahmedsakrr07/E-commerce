<template>
  <div class="Cart-page mt-5">
    <v-container fluid="fluid">
      <v-row>
        <v-col cols="12">
          <v-breadcrumbs
            :items="['Home', 'your cart']"
            style="font-size: 16px; color: black"
          >
            <template v-slot:divider>
              <v-icon color="black">mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12" v-if="cartItem.length">
          <v-card-text
            class="pt-0 pb-0"
            style="font-size: 25px; font-weight: 600"
            >Your Cart</v-card-text
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
            class="px-2"
            style="font-size: 15px; font-weight: 600; color: #757575"
            >Only ${{ 10000 - calcTotal }} left in your cart</v-card-text
          >
          <v-card-text
            v-if="cartItem.length && 10000 - calcTotal <= 0"
            class="px-2"
            style="font-size: 15px; font-weight: 600; color: #757575"
            >Your Order now is free</v-card-text
          >
        </v-col>
        <v-col cols="12" lg="8" v-if="cartItem.length">
          <v-table class="table-cart" density="compact" style="width: 100%">
            <thead>
              <tr>
                <th style="font-size: 13px; font-weight: bold">PRODUCT</th>
                <th
                  class="text-center"
                  style="font-size: 13px; font-weight: bold"
                >
                  PRICE
                </th>
                <th
                  class="text-center"
                  style="font-size: 13px; font-weight: bold"
                >
                  quantity
                </th>
                <th
                  class="text-center"
                  style="font-size: 13px; font-weight: bold"
                >
                  TOTAL
                </th>
                <th
                  class="text-center"
                  style="font-size: 13px; font-weight: bold"
                >
                  ACtION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in cartItem"
                :key="item.id"
                style="font-size: 14px; font-weight: 600"
              >
                <td style="width: 50%">
                  <v-row class="d-flex align-center">
                    <v-col cols="4">
                      <img :src="item.thumbnail" alt="" class="w-100" />
                    </v-col>
                    <v-col cols="8">
                      <v-card-title class="title-cart"
                        >{{ item.title }} Sample -
                        {{ item.category }}</v-card-title
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
                        category: {{ item.category }}
                      </v-card-title>
                    </v-col>
                  </v-row>
                </td>
                <td style="width: 15%" class="text-center">
                  <v-card-text
                    class="pt-0"
                    style="
                      white-space: pre-wrap;
                      font-size: 15px;
                      font-weight: 600;
                      line-height: 1.2;
                    "
                    >${{ item.price }}</v-card-text
                  >
                </td>
                <td class="quantity">
                  <div class="quant d-flex align-center justify-space-between">
                    <div
                      class="counter px-1"
                      style="
                        border-radius: 30px;
                        border: 1px solid rgb(13 13 13 / 68%);
                        width: max-content;
                        margin-left: 13px;
                      "
                    >
                      <v-icon
                        class="mx-1"
                        style="width: 31px"
                        @click="item.quantity > 1 ? item.quantity-- : false"
                        >mdi-minus</v-icon
                      >
                      <input
                        type="number"
                        style="border: none; outline: none; width: 29px"
                        class="text-center py-2"
                        min="1"
                        v-model="item.quantity"
                      />
                      <v-icon @click="item.quantity++" class="mx-1"
                        >mdi-plus</v-icon
                      >
                    </div>
                  </div>
                </td>
                <td style="width: 15%" class="text-center">
                  <v-card-text
                    class="pt-0"
                    style="
                      white-space: pre-wrap;
                      font-size: 15px;
                      font-weight: 600;
                      line-height: 1.2;
                    "
                    >${{ item.price * item.quantity }}</v-card-text
                  >
                </td>
                <td style="width: 15%" class="text-center">
                  <v-icon @click="removeProduct(item.id)">mdi-close</v-icon>
                </td>
              </tr>
            </tbody></v-table
          >
          <v-card elevation="0" class="ml-5" style="margin-top: 8%">
            <div class="d-flex align-center">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="shield-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-shield-alt fa-w-16 fa-3x"
                width="25px"
              >
                <defs>
                  <linearGradient
                    id="logo-gradient"
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#6423d1"></stop>
                    <stop offset="100%" stop-color="#a215e1"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url('#logo-gradient')"
                  d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"
                  class=""
                ></path>
              </svg>
              <v-card-text
                style="font-size: 12px; font-weight: 600; color: #9c9c9c"
                mt-5
              >
                Secure Checkout Guranteed
              </v-card-text>
            </div>
            <img src="../../images/cart-page-cards.webp" style="width: 38%" />
          </v-card>
        </v-col>
        <v-col
          cols="12"
          lg="4"
          class="px-3 mt-8 mt-lg-0"
          v-if="cartItem.length"
        >
          <v-card elevation="0">
            <v-card-title
              style="
                white-space: pre-wrap;
                font-size: 14px;
                font-weight: 700;
                line-height: 1.2;
              "
              >ORDER SUMMARY</v-card-title
            >
            <v-divider length="100%" style="color: black"></v-divider>
            <v-divider length="100%" style="color: black"></v-divider>
            <v-card-text
              class="pt-3 pb-5"
              style="
                white-space: pre-wrap;
                font-size: 15px;
                font-weight: 600;
                line-height: 1.2;
              "
            >
              <span>SubTotal</span>
              <span class="float-right">${{ calcTotal }}</span>
            </v-card-text>
            <v-divider length="100%" style="color: black"></v-divider>
            <v-card-text
              style="
                white-space: pre-wrap;
                font-size: 14px;
                font-weight: 600;
                line-height: 1.2;
              "
              >Get Shipped To Your Address</v-card-text
            >
            <v-select
              class="w-90 pt-0 px-0"
              style="border-radius: 30px"
              label="Select State"
              :items="[
                'Egypt',
                'Syria',
                'Tunisia',
                'Sudan',
                'Ksa',
                'Qatar',
                'UAE',
              ]"
              variant="outlined"
            ></v-select>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  class="w-90"
                  label="Street Name"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="w-90"
                  label="Zip Code"
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-card-actions max-height="200">
              <v-btn
                style="
                  text-transform: none;
                  border-radius: 30px;
                  border-color: white;
                  width: 100%;
                  background-color: #086fe6;
                  color: white;
                  font-size: 15px;
                  font-weight: 500;
                "
                class="text-capitalize"
                density="compact"
                height="45"
                variant="elevated"
                elevation="0"
                >Calculate Shipping</v-btn
              >
            </v-card-actions>
            <v-divider
              class="mt-4"
              length="100%"
              style="color: black"
            ></v-divider>
            <v-card-text
              style="
                white-space: pre-wrap;
                font-size: 14px;
                font-weight: 600;
                line-height: 1.2;
              "
              >Copon Code</v-card-text
            >
            <v-text-field
              class="w-90 pb-0"
              label="Enter Copon Code"
              variant="outlined"
            ></v-text-field>
            <v-card-text
              class="pt-0 px-0"
              style="color: #9c9c9c; font-weight: 600; font-size: 12px"
              >Copon Code Will be Applied At Checkout</v-card-text
            >
            <v-divider
              class="mt-1"
              length="100%"
              style="color: black"
            ></v-divider>
            <v-card-text
              style="
                white-space: pre-wrap;
                font-size: 14px;
                font-weight: 600;
                line-height: 1.2;
              "
            >
              <span>Total</span>
              <span class="float-right">${{ calcTotal }}</span>
            </v-card-text>
            <v-card-actions max-height="200">
              <v-btn
                style="
                  text-transform: none;
                  border-radius: 0px;
                  border-color: white;
                  width: 100%;
                  background-color: #086fe6;
                  color: white;
                  font-size: 15px;
                  font-weight: 600;
                "
                class="text-capitalize"
                density="compact"
                height="45"
                variant="elevated"
                elevation="0"
                @click="checkout"
                >Proceed To Checkout</v-btn
              >
            </v-card-actions>
            <v-card-actions>
              <v-btn
                style="
                  text-transform: none;
                  border-radius: 0px;
                  border-color: #d6d6d6;
                  font-size: 13px;
                  font-weight: 600;
                "
                class="text-capitalize w-100"
                density="compact"
                height="45"
                color="black"
                variant="outlined"
                @click="$router.push({ name: 'home' })"
                >Continue Shopping</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="cartItem.length == 0">
      <v-card-text style="font-size: 25px; font-weight: 600" class="text-center"
        >Your Cart is Empty</v-card-text
      >
      <v-card-actions class="text-center">
        <v-btn
          style="
            text-transform: none;
            border-radius: 30px;
            border-color: #d6d6d6;
            font-size: 13px;
            font-weight: 600;
            background-color: #086fe6;
            width: 30%;
            margin: 0 auto;
          "
          class="text-capitalize"
          density="compact"
          height="45"
          color="white"
          variant="outlined"
          @click="$router.push({ name: 'home' })"
          >Continue Shopping</v-btn
        >
      </v-card-actions>
    </v-container>
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
      drawer: true,
    };
  },
  methods: {
    ...mapActions(cartStore, [
      "getProducts",
      "removeProduct",
      "setLocalStorage",
    ]),
    checkout() {
      this.$router.push({ name: "card-checkout" });
      this.setLocalStorage();
    },
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
<style scoped>
.quantity {
  width: 15%;
}
.title-cart {
  white-space: pre-wrap;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.2;
}
@media (max-width: 990px) {
  .quantity {
    width: 19%;
  }
  .table-cart {
    width: 800px !important;
  }
}
@media (max-width: 620px) {
  .table-cart {
    width: 900px !important;
  }
  .title-cart {
    white-space: nowrap;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.2;
  }
}
</style>
