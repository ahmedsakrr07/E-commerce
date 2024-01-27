<template>
  <div class="ProductSwipper">
    <div class="title d-flex align-center justify-space-between">
      <h1 :class="`text-${TextColor}`">{{ title }}</h1>
      <router-link
        style="color: black; margin-right: 10px"
        :to="{
          name: 'products_category',
          params: {
            title: categories[index].title,
            category: categories[index].route,
          },
        }"
        >View All</router-link
      >
    </div>
    <v-container fluid="fluid" v-if="!products.length">
      <v-row>
        <v-col cols="12" style="padding-top: 80px">
          <v-row>
            <v-col cols="3" v-for="i in 4" :key="i">
              <v-skeleton-loader
                type="image , article , button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <swiper
      v-else
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      :modules="modules"
      :slides-per-view="4"
      class="pb-12"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        pauseOnFocus: true,
      }"
      :loop="true"
      :breakpoints="breakpoints"
    >
      <SwiperSlide
        v-for="product in products"
        :key="product.id"
        cols="12"
        md="3"
      >
        <v-card class="mx-auto" max-width="300" elevation="0">
          <v-hover v-slot="{ isHovering, props }">
            <v-img
              class="white--text align-end"
              height="200px"
              :src="
                show[product.title] ? show[product.title] : product.thumbnail
              "
              v-bind="props"
              :style="`cursor: pointer; position: relative; transition: 0.7s all ease-in-out; transform: scale(${
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
              >show more</v-btn
            >
          </v-hover>

          <div
            style="font-size: 16px; font-weight: 500"
            class="pl-0 text-capitalize mt-2 mb-2"
          >
            {{ product.title }}
            {{ product.description.split(" ").slice(0, 6).join(" ") }}
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
      </SwiperSlide>
      <div class="swiper-prev"></div>
      <div class="swiper-next"></div>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components/index.mjs";
import { productsModule } from "@/stores/Products";
import { mapState } from "pinia";
export default {
  data() {
    return {
      show: {},
      breakpoints: {
        990: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  inject: ["Emitter"],
  methods: {
    OpenQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    TextColor: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
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
  opacity: 0;
  transition: 0.7s all ease-in-out;
}
.swiper-slide:hover .quickView {
  visibility: visible;
  opacity: 1;
}
</style>
