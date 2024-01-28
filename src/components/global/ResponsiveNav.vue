<template>
  <div class="responsive">
    <v-app-bar>
      <v-container>
        <v-row class="align-center">
          <v-col cols="4" class="d-flex align-center">
            <v-app-bar-nav-icon @click="openMenu"></v-app-bar-nav-icon>
          </v-col>
          <v-col cols="4">
            <img
              src="../../../images/footer-logo.webp"
              @click="$router.push({ name: 'home' })"
              style="cursor: pointer"
              alt=""
              width="150"
              class="mt-3"
            />
          </v-col>
          <v-col cols="4" class="d-flex justify-end">
            <svg
              viewBox="0 0 30 30"
              class="icon icon-cart mt-2"
              enable-background="new 0 0 30 30"
              width="25"
              @click="openCart"
              style="cursor: pointer"
            >
              <g>
                <g>
                  <path
                    d="M20,6V5c0-2.761-2.239-5-5-5s-5,2.239-5,5v1H4v24h22V6H20z M12,5c0-1.657,1.343-3,3-3s3,1.343,3,3v1h-6V5z M24,28H6V8h4v3    h2V8h6v3h2V8h4V28z"
                  ></path>
                </g>
              </g>
            </svg>
            <v-badge
              location="right top"
              color="black"
              :content="cartItem.length"
              offset-y="9"
              v-if="cartItem.length > 0"
            ></v-badge>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { cartStore } from "@/stores/Cart";
export default {
  inject: ["Emitter"],

  computed: {
    ...mapState(cartStore, ["cartItem"]),
  },
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
    openMenu() {
      this.Emitter.emit("openMenu");
    },
  },
};
</script>

<style></style>
