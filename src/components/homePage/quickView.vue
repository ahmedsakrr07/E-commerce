<template>
  <div class="Product-details">
    <v-dialog v-model="dailog" class="mt-16" max-width="900" max-height="500">
      <v-icon
        @click="dailog = false"
        style="
          position: absolute;
          right: -1px;
          top: -3px;
          background-color: black;
          color: white;
          font-size: 14px;
          padding: 11px;
          cursor: pointer;
          z-index: 1;
        "
        >mdi-close</v-icon
      >
      <v-card elevation="0">
        <v-container class="bg-white">
          <v-row>
            <v-col cols="12" md="7" sm="7">
              <img
                class="w-100 pt-5"
                height="400px"
                :src="tab === '' ? product.thumbnail : tab"
                v-if="!loading"
              />
              <v-skeleton-loader
                v-if="loading"
                type="image,image,image"
              ></v-skeleton-loader>
              <v-tabs
                v-model="tab"
                center-active="center-active"
                height="120"
                class="mt-10"
              >
                <v-tab
                  v-for="(img, i) in product.images"
                  :key="i"
                  class="text-capitalize"
                  :value="img"
                >
                  <img style="width: 100px; height: 100px" :src="img" />
                </v-tab>
              </v-tabs>
            </v-col>
            <v-col cols="12" md="5" sm="5">
              <v-skeleton-loader
                v-if="loading"
                type="article,article,article"
              ></v-skeleton-loader>
              <v-card elevation="0" v-if="!loading">
                <v-card-title
                  class="text-capitalize"
                  style="
                    font-size: 15px;
                    font-weight: 700;
                    line-height: 1.5;
                    white-space: pre-wrap;
                  "
                  >({{ product.title }}) Sample -
                  {{ product.description }}</v-card-title
                >
                <div class="d-flex align-center pb-3">
                  <v-rating
                    v-model="products.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="small"
                    density="compact"
                    style="gap: 2px; margin-left: 11px"
                  ></v-rating>
                </div>
                <v-card-text
                  class="pt-0 px-0"
                  style="
                    font-size: 13px;
                    font-weight: 600;
                    color: rgb(13 13 13 / 68%);
                    margin-left: 18px;
                  "
                >
                  Available:
                  {{ product.stock > 0 ? "In Stock" : "Out of Stock" }}
                </v-card-text>
                <v-card-text
                  class="pt-0 px-0"
                  style="
                    font-size: 13px;
                    font-weight: 600;
                    color: rgb(13 13 13 / 68%);
                    margin-left: 18px;
                  "
                >
                  Brand :<span style="color: rgb(13 13 13 / 68%)">{{
                    product.brand
                  }}</span>
                </v-card-text>
                <v-card-text
                  class="pt-0 px-0"
                  style="
                    font-size: 13px;
                    font-weight: 600;
                    color: rgb(13 13 13 / 68%);
                    margin-left: 18px;
                  "
                >
                  Category :<span style="color: rgb(13 13 13 / 68%)">{{
                    product.category
                  }}</span>
                </v-card-text>
                <v-card-text
                  class="pt-0"
                  style="color: black; font-weight: 600; margin-left: 5px"
                  >${{ product.price }}</v-card-text
                >
                <v-card-text
                  class="pt-0"
                  style="
                    color: rgb(13 13 13 / 68%);
                    font-weight: 600;
                    margin-left: 5px;
                  "
                  >Quantity</v-card-text
                >
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
                    class="mx-2"
                    @click="quantity > 1 ? quantity-- : false"
                    >mdi-minus</v-icon
                  >
                  <input
                    type="number"
                    style="border: none; outline: none; width: 60px"
                    class="text-center py-2"
                    min="1"
                    v-model="quantity"
                  />
                  <v-icon @click="quantity++" class="mx-2">mdi-plus</v-icon>
                </div>
                <v-card-text
                  class="pt-4"
                  style="color: black; font-weight: 600; margin-left: 5px"
                >
                  SubTotal: ${{ product.price * quantity }}</v-card-text
                >
                <v-btn
                  variant="outlined"
                  style="
                    text-transform: none;
                    margin-left: 10px;
                    border-radius: 30px;
                    background-color: black;
                    margin-top: 20px;
                  "
                  class="text-white w-75"
                  density="compact"
                  height="50"
                  @click="addToCart(product)"
                  :loading="btnLoading"
                  >Add to cart</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { cartStore } from "@/stores/Cart";
import { mapActions } from "pinia";
export default {
  name: "ProductDetails",
  inject: ["Emitter"],
  components: {
    VSkeletonLoader,
  },
  data() {
    return {
      tab: null,
      quantity: 1,
      loading: false,
      btnLoading: false,
      dailog: false,
      product: "",
      products: [
        {
          id: 1,
          title: "iPhone 9",
          description: "An apple mobile which is nothing like apple",
          price: 549,
          discountPercentage: 12.96,
          rating: 4.69,
          stock: 94,
          brand: "Apple",
          category: "smartphones",
          thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          images: [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
          ],
        },
      ],
    };
  },
  methods: {
    ...mapActions(cartStore, ["addProduct"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addProduct(item);
        this.Emitter.emit("openCart");
        this.dailog = false;
      }, 1000);
    },
  },
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      this.loading = true;
      this.dailog = !this.dailog;
      this.product = data;
      setTimeout(() => {
        this.loading = false;
      }, 600);
    });
  },
};
</script>

<style scoped lang="scss">
.content_card {
  & ::-webkit-scrollbar {
    width: 5px;
  }
  & ::-webkit-scrollbar-track {
    background: #f1f1f1;
    width: 5px;
  }
  & ::-webkit-scrollbar-thumb {
    background: #888;
    width: 5px;
  }
}
</style>
