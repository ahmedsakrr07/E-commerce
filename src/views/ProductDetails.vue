<template>
  <div class="Product-details">
    <h1 class="text-capitalize mt-15 ml-5 mb-5">Product Details</h1>
    <v-container>
      <v-row>
        <v-col cols="12" md="7" sm="7">
          <img
            class="w-100"
            :src="tab === '' ? singleProduct.thumbnail : tab"
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
              v-for="(img, i) in singleProduct.images"
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
              style="font-size: 19px; font-weight: 700"
              >({{ singleProduct.title }}) Sample -
              {{ singleProduct.description }}</v-card-title
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
              {{ singleProduct.stock > 0 ? "In Stock" : "Out of Stock" }}
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
                singleProduct.brand
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
                singleProduct.category
              }}</span>
            </v-card-text>
            <v-card-text
              class="pt-0"
              style="color: black; font-weight: 600; margin-left: 5px"
              >${{ singleProduct.price }}</v-card-text
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
            <v-card-text
              class="pt-0"
              style="color: black; font-weight: 600; margin-left: 5px"
              >subtotal :${{ singleProduct.price * quantity }}</v-card-text
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
              <v-icon class="mx-2" @click="quantity > 1 ? quantity-- : false"
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
            <v-btn
              variant="outlined"
              style="
                text-transform: none;
                margin-left: 10px;
                border-radius: 30px;
                background-color: black;
                margin-top: 35px;
              "
              class="text-white w-75"
              density="compact"
              height="50"
              @click="addToCart(singleProduct)"
              :loading="btnLoading"
              >Add to cart</v-btn
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { productsModule } from "@/stores/Products";
import { mapActions, mapState } from "pinia";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { cartStore } from "@/stores/Cart";
export default {
  name: "ProductDetails",
  components: {
    VSkeletonLoader,
  },

  data() {
    return {
      tab: null,
      quantity: 1,
      loading: false,
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
  inject: ["Emitter"],
  methods: {
    ...mapActions(productsModule, ["getSingleProducts"]),
    ...mapActions(cartStore, ["addProduct"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addProduct(item);
        this.Emitter.emit("openCart");
      }, 1000);
    },
  },
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  async mounted() {
    this.loading = true;
    await this.getSingleProducts(this.$route.params.productId);
    if (
      this.singleProduct &&
      this.singleProduct.images &&
      this.singleProduct.images.length > 0
    ) {
      this.tab = this.singleProduct.images[0];
    }
    this.loading = false;
  },
};
</script>

<style></style>
