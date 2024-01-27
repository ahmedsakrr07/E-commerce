<template>
  <div class="footer">
    <v-footer :app="true" absolute style="background-color: #f4f4f4">
      <v-container fluid="fluid">
        <v-row>
          <v-col cols="12" md="4" sm="6" lg="3">
            <v-card elevation="0" color="transparent">
              <v-card-title style="font-size: 19px; font-weight: 600"
                >Shop</v-card-title
              >
              <v-card-text
                class="pt-0 pb-3"
                v-for="cat in categories"
                :key="cat.title"
              >
                <router-link
                  style="
                    color: rgb(72, 72, 72);
                    font-weight: 600;
                    text-decoration: none;
                  "
                  :to="{ name: 'home' }"
                  >{{ cat.title }}</router-link
                >
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4" sm="6" lg="3">
            <v-card elevation="0" color="transparent">
              <v-card-title style="font-size: 19px; font-weight: 600"
                >Further info</v-card-title
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >About</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Customer Service</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Reward program</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Shipping&Returns</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >privcy policy</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Blog</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" md="4" sm="6" lg="3">
            <v-card elevation="0" color="transparent">
              <v-card-title style="font-size: 19px; font-weight: 600"
                >customer service</v-card-title
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Search Terms</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Advanced Search</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Order and Return</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Contact Us</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Thems FAQS</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Consulant</v-card-text
              >
              <v-card-text
                class="pt-0 pb-3"
                style="color: rgb(72, 72, 72); font-weight: 600"
                >Store Location</v-card-text
              >
            </v-card>
          </v-col>
          <v-col cols="12" md="4" sm="6" lg="3">
            <v-card elevation="0" color="transparent">
              <v-card-title>
                <img src="../../../images/footer-logo.webp" class="w-80 pt-3" />
              </v-card-title>
              <v-card-text
                class="pt-0 pb-3 d-flex"
                style="
                  color: #484848;
                  gap: 10px;
                  font-size: 12px;
                  font-weight: 600;
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="15px"
                  fill="black"
                >
                  <path
                    d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                  ></path>
                </svg>
                685 Market St, San Francisco, CA 94103
              </v-card-text>
              <v-card-text
                class="pt-0 pb-3 d-flex"
                style="
                  color: #484848;
                  gap: 10px;
                  font-size: 12px;
                  font-weight: 600;
                "
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone-alt"
                  role="img"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-phone-alt fa-w-16 fa-7x"
                  width="15px"
                  fill="black"
                >
                  <path
                    fill="currentColor"
                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                    class=""
                  ></path>
                </svg>
                Call us: (133-5225) 456-7890
              </v-card-text>
              <v-card-text
                class="pt-0 pb-2 d-flex"
                style="
                  color: #484848;
                  gap: 10px;
                  font-size: 12px;
                  font-weight: 600;
                "
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="svg-inline--fa fa-envelope fa-w-16 fa-7x"
                  width="15px"
                  fill="black"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    class=""
                  ></path>
                </svg>
                example@domain.com
              </v-card-text>
            </v-card>
            <div class="social-icons d-flex mt-5" style="gap: 10px">
              <v-btn icon>
                <v-icon color="black">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="black">mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="black">mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="black">mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="black">mdi-pinterest</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" class="text-center">
            <img
              style="width: 25%; margin: 0 auto"
              src="../../../images/cart-page-cards.webp"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <p
              style="
                color: #484848;
                font-size: 12px;
                font-weight: 600;
                margin-top: 5px;
              "
            >
              © {{ new Date().getFullYear() }}. All Rights Reserved
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import { productsModule } from "@/stores/Products";
import { mapState } from "pinia";
export default {
  name: "AppFooter",
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
};
</script>

<style></style>
