<template>
  <div class="order">
    <v-dialog v-model="dailog" class="dailog" persistent="true">
      <v-card class="text-center">
        <div class="text-center">
          <v-icon
            size="75"
            color="green"
            style="
              background-color: white;
              border-radius: 50%;
              color: green;
              width: 100px;
              height: 100px;
              margin: 0 auto;
              padding: 20px;
              font-size: 50px;
              margin-top: 20px;
              border: 1px solid green;
            "
            >mdi-check</v-icon
          >
        </div>
        <v-card-title
          style="font-weight: 700; font-size: 20px; color: rgb(31, 31, 31)"
          >Order Placed Sucessfully!</v-card-title
        >
        <v-card-text style="font-size: 16px; color: rgb(134, 134, 134)"
          >Thank you for shopping with us. Your order has been placed
          successfully. We will deliver your order within 24 hours.</v-card-text
        >
        <v-card-actions class="mt-5 mb-5 justify-center">
          <v-btn
            class="text-capitalize px-5 pt-3 pb-6"
            density="compact"
            color="blue"
            variant="elevated"
            @click="restItem"
            >Go it</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { cartStore } from "@/stores/Cart";
export default {
  name: "SucessOrder",
  data() {
    return {
      dailog: false,
    };
  },
  props: {
    popup: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.dailog = this.popup;
  },
  watch: {
    dailog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("closePopup");
        }, 300);
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ["resetData"]),
    restItem() {
      this.resetData();
      this.dailog = false;
      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 500);
    },
  },
};
</script>

<style>
.dailog {
  width: 30%;
}
@media (max-width: 620px) {
  .dailog {
    width: 90%;
  }
}
</style>
