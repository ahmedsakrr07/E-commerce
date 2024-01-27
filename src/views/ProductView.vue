<template>
  <div class="quality-feature py-12 mt-0">
    <h1 class="text-capitalize text-center">{{ $route.params.title }}</h1>
    <v-card :loading="loading" elevation="0">
      <v-container v-if="categoriesView.products">
        <v-row v-if="loading">
          <v-col cols="4" v-for="i in 4" :key="i">
            <v-skeleton-loader
              type="image , article , button"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="4"
            sm="6"
            v-for="product in categoriesView.products"
            :key="product.id"
          >
            <v-card class="mx-auto" max-width="300" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="
                    show[product.title]
                      ? show[product.title]
                      : product.thumbnail
                  "
                  v-bind="props"
                  :style="`cursor: pointer;position: relative; transition: 0.7s all ease-in-out; transform: scale(${
                    isHovering ? 1.05 : 1
                  });`"
                >
                </v-img>
                <v-btn
                  class="text-capitalize quickView"
                  density="compact"
                  variant="outlined"
                  width="80"
                  height="40"
                  @click="OpenQuickView(product)"
                  style="
                    position: absolute;
                    left: 50%;
                    bottom: 73%;
                    transform: translateX(-50%);
                    border-radius: 30px;
                    color: black;
                    background-color: white;
                    padding-left: 25px;
                    padding-right: 25px;
                    transition: 0.7s all ease-in-out;
                  "
                  >Quick View</v-btn
                >
              </v-hover>

              <div
                style="font-size: 16px; font-weight: 500"
                class="pl-0 text-capitalize mt-2 mb-2"
              >
                {{ product.title }}
                {{ product.description.split(" ").slice(0, 5).join(" ") }}
              </div>
              <v-rating
                v-model="product.rating"
                color="amber"
                half-increments
                readonly
                size="small"
                density="compact"
              ></v-rating>
              <div
                class="pl-0 mb-2 mt-1 font-weight-bold"
                style="font-size: 16px !important"
              >
                <del>{{ product.price }}</del> from
                <span class="text-red font-weight-bold">
                  {{
                    Math.ceil(
                      product.price -
                        product.price * (product.discountPercentage / 100)
                    )
                  }}
                </span>
              </div>
              <v-btn-toggle v-model="show[product.title]" mandatory="true">
                <v-btn v-for="(pic, i) in product.images" :value="pic" :key="i">
                  <img
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 50%;
                      border: 1px solid rgb(36, 36, 36);
                    "
                    :src="pic"
                  />
                </v-btn>
              </v-btn-toggle>
              <div class="text-center mt-2 mb-3">
                <v-btn
                  class="text-white"
                  color="red"
                  style="text-transform: none; border-radius: 5px"
                  @click="
                    $router.push({
                      name: 'products_details',
                      params: { productId: product.id },
                    })
                  "
                >
                  View Product
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { productsModule } from "@/stores/Products";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";

export default {
  name: "ProductView",
  components: {
    VSkeletonLoader,
  },
  data() {
    return {
      show: {},
      loading: false,
      card: {
        width: "300px",
      },
    };
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
  },
  computed: {
    ...mapState(productsModule, ["categoriesView"]),
  },
  watch: {
    async $route() {
      if (this.$route.name === "products_category") {
        document.documentElement.scrollTop = 0;
        this.loading = true;
        await this.getProductsByCategory(this.$route.params.category);
        this.loading = false;
      }
    },
  },
  async mounted() {
    if (!this.$route.params.category) {
      this.$router.go(-1);
    }
    this.loading = true;
    await this.getProductsByCategory(this.$route.params.category);
    this.loading = false;
  },
};
</script>

<style>
.ProductSwipper {
  margin-top: 5%;
}
.title h1 {
  font-size: 24px;
  font-weight: 600;
  margin-left: 60px;
  margin-bottom: 13px;
}
.swiper-pagination {
  widows: 100%;
}
.quickView {
  visibility: hidden;
  transition: 0.7s all ease-in-out;
}
.swiper-slide:hover .quickView {
  visibility: visible;
  opacity: 1;
}
</style>
