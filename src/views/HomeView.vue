<template>
  <div class="home">
    <upperBannerVue />
    <theFutiureVue />
    <TopOfferVue />
    <ProductsComponent
      :products="FlashDeals"
      :title="'Flash Deals'"
      :TextColor="'red'"
      :index="0"
    />
    <TopCat />
    <NewProduct :products="ProductsLap" :index="1" />
    <Quality />
    <ProductsComponent
      :products="mobile"
      :title="'TopMobiles'"
      :TextColor="'black'"
      :index="1"
    />
    <CoverImage />
    <ProductsComponent
      :products="ProductsLap"
      :title="'TopLaptops'"
      :TextColor="'black'"
      :index="1"
    />
    <NextCoverVue />
    <ProductsComponent
      :products="Fragrances"
      :title="'TopFragrances'"
      :TextColor="'black'"
      :index="2"
    />
    <ShopWithUs />
  </div>
</template>

<script>
import upperBannerVue from "@/components/homePage/upperBanner.vue";
import theFutiureVue from "@/components/homePage/theFutiure.vue";
import TopOfferVue from "@/components/homePage/TopOffer.vue";
import TopCat from "@/components/homePage/TopCat.vue";
import NewProduct from "@/components/homePage/NewProduct.vue";
import Quality from "@/components/homePage/Quality.vue";
import CoverImage from "@/components/homePage/CoverImage.vue";
import NextCoverVue from "@/components/homePage/NextCover.vue";
import ShopWithUs from "@/components/homePage/ShopWithUs.vue";
import { productsModule } from "@/stores/Products";
import { mapActions, mapState } from "pinia";
import ProductsComponent from "@/components/homePage/productSwipper.vue";

export default {
  name: "HomeView",
  components: {
    upperBannerVue,
    theFutiureVue,
    TopOfferVue,
    ProductsComponent,
    TopCat,
    NewProduct,
    Quality,
    CoverImage,
    NextCoverVue,
    ShopWithUs,
  },
  computed: {
    ...mapState(productsModule, [
      "FlashDeals",
      "ProductsLap",
      "mobile",
      "laptop",
      "Fragrances",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  created() {
    this.getProducts();
  },
};
</script>
