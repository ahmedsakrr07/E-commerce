<template>
  <app-layout>
    <router-view />
    <quickViewVue />
  </app-layout>
</template>

<script>
import AppLayout from "./components/global/AppLayout.vue";
import quickViewVue from "@/components/homePage/quickView.vue";
export default {
  components: {
    AppLayout,
    quickViewVue,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
