<template>
  <div class="layout">
    <v-layout class="position-relative">
      <CartDrawer />
      <MenuDraw />
      <v-main
        :style="`padding-top: ${
          $route.name === 'card-checkout'
            ? '0px'
            : windowWidth <= 990
            ? '10px'
            : '5%'
        } `"
      >
        <slot></slot>
      </v-main>
      <AppNav v-show="$route.name !== 'card-checkout' && windowWidth > 990" />
      <ResponsiveNav
        v-show="$route.name !== 'card-checkout' && windowWidth <= 990"
      />
      <AppFooter v-show="$route.name !== 'card-checkout'" />
    </v-layout>
  </div>
</template>
<script>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
import ResponsiveNav from "./ResponsiveNav.vue";
import MenuDraw from "./MenuDraw.vue";
export default {
  name: "AppLayout",
  components: {
    AppFooter,
    CartDrawer,
    ResponsiveNav,
    AppNav,
    MenuDraw,
  },
  data() {
    return {
      drawer: false,
      windowWidth: 0,
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    };
  },
};
</script>

<style></style>
