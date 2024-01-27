<template>
  <div class="tap-cat">
    <img
      src="../../../images/cyber-banner.webp"
      class="w-100 mt-5 mb-5"
      alt=""
    />
    <div class="cat mt-2 mb-5">
      <v-container fluid="fluid">
        <div class="cat-text d-flex align-center justify-center mb-5">
          <h1 class="text-center text-capitalize mb-5 mt-5 flex-grow-1">
            Top Categories
          </h1>
          <a href="#" style="color: black">Shop All</a>
        </div>
        <v-row>
          <v-col
            cols="6"
            sm="4"
            md="3"
            lg="2"
            v-for="Cat in Catogries"
            :key="Cat.title"
          >
            <v-card class="text-center elevation-0">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="offer-img"
                  v-bind="props"
                  style="cursor: pointer; overflow: hidden"
                >
                  <img
                    :src="Cat.img"
                    :style="`width: 75%; transition: 0.7s all ease-in-out; transform: scale(${
                      isHovering ? 1.05 : 1
                    });`"
                    alt=""
                  />
                </div>
              </v-hover>
              <p
                style="font-size: 16px; font-weight: 500"
                class="text-capitalize mt-4 text-black"
              >
                {{ Cat.title }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCat",
  data() {
    return {
      Catogries: [
        {
          title: "mobile-phones",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
        },
        {
          title: "laptops",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
        },
        {
          title: "TVS",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
        },
        {
          title: "PCs",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
        },
        {
          title: "Audio & Video",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
        },
        {
          title: "Gaming",
          img: " https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=536503283806168263",
        },
        {
          title: "Home Appliances",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
        },
        {
          title: "Kitchen",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
        },
        {
          title: "Cameras",
          img: " https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
        },
        {
          title: "Consumables",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
        },
        {
          title: "Smart Homes",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
        },
        {
          title: "Accessories",
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
        },
      ],
    };
  },
};
</script>

<style></style>
