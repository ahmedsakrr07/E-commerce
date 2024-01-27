<template>
  <div class="check-out">
    <v-container fluid="fluid" class="ma-0 pa-0">
      <v-row>
        <v-col cols="12" md="5">
          <v-card
            color="grey-lighten-2"
            height="102%"
            width="100%"
            elevation="0"
          >
            <v-card
              v-for="item in cartItem"
              :key="item.id"
              width="100%"
              class="d-flex justify-space-between align-center"
              color="transparent"
              elevation="0"
            >
              <img
                :src="item.thumbnail"
                width="80"
                height="80"
                class="mt-5 mb-5 ml-5"
                style="border-radius: 7px; border: 1px solid rgb(36, 36, 36)"
              />
              <div class="title flex-grow-1">
                <v-card-title
                  style="
                    font-size: 13px;
                    font-weight: 700;
                    white-space: pre-wrap;
                    line-height: 1.6;
                  "
                  color="black"
                  >({{ item.title }}) sample -
                  {{ item.description }}</v-card-title
                >
                <v-card-text
                  style="
                    font-size: 13px;
                    font-weight: 700;
                    white-space: pre-wrap;
                  "
                  >category:{{ item.category }}</v-card-text
                >
              </div>
              <v-card-text
                class="flex-grow-1"
                style="font-size: 12px; font-weight: 700"
                >${{ item.price * item.quantity }}</v-card-text
              >
            </v-card>
            <v-divider></v-divider>
            <v-card-text class="pt-5" style="font-size: 14px; font-weight: 700">
              <span>Subtotal:</span>
              <span class="float-right">${{ calcTotal }}</span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="7">
          <v-card elevation="0" class="w-100 check" color="white">
            <v-card-title
              class="font-weight-bold text-capitalize"
              style="font-size: 15px"
            >
              NEW ELLA-DEMO
            </v-card-title>
            <v-card-text
              class="text-center"
              style="font-size: 14px; font-weight: 700; color: #00000099"
            >
              Express CheckOut
            </v-card-text>
            <v-row>
              <v-col cols="6">
                <v-card-actions max-height="200">
                  <v-btn
                    style="
                      text-transform: none;
                      border-radius: 4px;
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
                  >
                    <svg
                      class="icon icon--full-color"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 38 24"
                      width="38"
                      height="24"
                      aria-labelledby="pi-shopify_pay"
                    >
                      <title id="pi-shopify_pay">Shop Pay</title>
                      <path
                        opacity=".07"
                        d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                        fill="#000"
                      ></path>
                      <path
                        d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                        fill="#5A31F4"
                      ></path>
                      <path
                        d="M21.382 9.713c0 1.668-1.177 2.858-2.821 2.858h-1.549a.133.133 0 00-.12.08.127.127 0 00-.01.049v2.192a.129.129 0 01-.13.129h-1.084a.13.13 0 01-.13-.13V6.986a.127.127 0 01.08-.12.129.129 0 01.05-.01h2.9c1.637 0 2.814 1.19 2.814 2.858v-.001zm-1.352 0c0-.958-.658-1.658-1.55-1.658h-1.468a.13.13 0 00-.13.13v3.05a.127.127 0 00.038.092.129.129 0 00.092.038h1.468c.892.005 1.55-.695 1.55-1.652zm1.674 3.791a1.527 1.527 0 01.647-1.317c.423-.316 1.084-.48 2.055-.514l1.033-.036v-.303c0-.607-.41-.863-1.068-.863-.658 0-1.075.231-1.17.61a.127.127 0 01-.125.09h-1.022a.13.13 0 01-.126-.092.125.125 0 01-.004-.055c.152-.898.904-1.58 2.494-1.58 1.692 0 2.303.783 2.303 2.276v3.172a.13.13 0 01-.132.129h-1.03a.13.13 0 01-.13-.13v-.236a.096.096 0 00-.061-.091.1.1 0 00-.107.022c-.31.334-.808.575-1.607.575-1.175 0-1.95-.607-1.95-1.657zm3.735-.687v-.246l-1.339.07c-.705.036-1.115.326-1.115.816 0 .444.376.69 1.034.69.893 0 1.42-.48 1.42-1.33zm2.316 4.6v-.919a.13.13 0 01.049-.1.132.132 0 01.108-.027c.158.029.318.044.479.044a1.229 1.229 0 001.245-.876l.067-.211a.133.133 0 000-.088l-2.145-5.471a.13.13 0 01.06-.165.13.13 0 01.062-.015h1.04a.132.132 0 01.123.085l1.456 3.859a.131.131 0 00.125.088.133.133 0 00.125-.088l1.265-3.848a.13.13 0 01.126-.09h1.076a.134.134 0 01.132.116.134.134 0 01-.008.063l-2.295 6.076c-.528 1.413-1.433 1.773-2.43 1.773a1.959 1.959 0 01-.561-.066.132.132 0 01-.1-.14h.001zM8.57 6.4a5.363 5.363 0 00-3.683 1.427.231.231 0 00-.029.31l.618.839a.236.236 0 00.362.028 3.823 3.823 0 012.738-1.11c2.12 0 3.227 1.584 3.227 3.15 0 1.7-1.163 2.898-2.835 2.921-1.292 0-2.266-.85-2.266-1.974a1.908 1.908 0 01.713-1.48.231.231 0 00.033-.324l-.65-.815a.236.236 0 00-.339-.034 3.43 3.43 0 00-.942 1.183 3.39 3.39 0 00-.337 1.47c0 1.935 1.655 3.452 3.775 3.464h.03c2.517-.032 4.337-1.884 4.337-4.415 0-2.247-1.667-4.64-4.752-4.64z"
                        fill="#fff"
                      ></path>
                    </svg>
                    pay</v-btn
                  >
                </v-card-actions>
              </v-col>
              <v-col cols="6">
                <v-card-actions max-height="200">
                  <v-btn
                    style="
                      text-transform: none;
                      border-radius: 4px;
                      border-color: white;
                      width: 100%;
                      background-color: black;
                      color: white;
                      font-size: 15px;
                      font-weight: 500;
                    "
                    class="text-capitalize"
                    density="compact"
                    height="45"
                    variant="elevated"
                    elevation="0"
                  >
                    <svg
                      class="icon icon--full-color"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      x="0"
                      y="0"
                      width="25"
                      height="24"
                      viewBox="0 0 165.521 105.965"
                      xml:space="preserve"
                      aria-labelledby="pi-apple_pay"
                    >
                      <title id="pi-apple_pay">Apple Pay</title>
                      <path
                        fill="#000"
                        d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"
                      ></path>
                      <g>
                        <g>
                          <path
                            fill="#000"
                            d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"
                          ></path>
                          <path
                            fill="#000"
                            d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"
                          ></path>
                        </g>
                        <g>
                          <path
                            fill="#000"
                            d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"
                          ></path>
                          <path
                            fill="#000"
                            d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"
                          ></path>
                          <path
                            fill="#000"
                            d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    shop</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-row>
            <v-divider
              class="mt-4"
              length="100%"
              style="color: black"
            ></v-divider>
            <v-card-text class="font-weight-bold">contact</v-card-text>
            <v-row>
              <v-col cols="12">
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
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="w-90 pt0"
                  label="First Name"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="w-90 pt0 pb-0"
                  label="Last Name"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="w-90 pt0"
                  label="Email Address"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  class="w-90 pt0"
                  label="Phone Number"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  class="w-90 pt0"
                  label="Address"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  class="w-90 pt0"
                  label="city"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  class="w-90 pt0"
                  label="governorate"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  class="w-90 pt0"
                  label="Zip Code"
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-card-actions>
                <v-btn
                  style="
                    text-transform: none;
                    border-color: white;
                    width: 100%;
                    background-color: #086fe6;
                    color: white;
                    font-size: 15px;
                    font-weight: 500;
                    margin-left: auto;
                  "
                  class="text-capitalize mb-5"
                  density="compact"
                  height="45"
                  variant="elevated"
                  elevation="0"
                  @click="dailog = true"
                  >Submit Order</v-btn
                >
              </v-card-actions>
            </v-row>
          </v-card>
          <v-divider
            class="mt-4"
            length="100%"
            style="color: black"
          ></v-divider>
          <v-card-text
            class="text-center font-weight-bold"
            style="font-size: 12px; font-weight: 700; color: #757575"
          >
            ALL RIGHTS RESERVED BY THE SHOPPING STORE@2024
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <SucessOrderVue
      :popup="dailog"
      v-if="dailog"
      @closePopup="dailog = false"
    />
  </div>
</template>

<script>
import { cartStore } from "@/stores/Cart";
import { mapState } from "pinia";
import SucessOrderVue from "@/components/Sucess/SucessOrder.vue";
export default {
  name: "CheckOut",
  components: {
    SucessOrderVue,
  },
  data() {
    return {
      dailog: false,
    };
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
};
</script>

<style scoped>
.check {
  padding: 60px 40px 0px 120px;
}
@media (max-width: 620px) {
  .check {
    padding: 2px 2px 2px 20px;
  }
}
</style>
