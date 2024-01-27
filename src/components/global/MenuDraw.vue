<template>
  <div class="Menu">
    <v-navigation-drawer
      v-model="drawer"
      temporary="true"
      location="left"
      width="400"
    >
      <h1
        class="px-0 d-flex justify-space-between"
        style="font-size: 16px; font-weight: 700"
      >
        Menu
        <v-icon @click="drawer = false">mdi-close</v-icon>
      </h1>
      <v-list>
        <v-list-item
          class="px-0"
          v-for="category in categories"
          :key="category.title"
          @click="
            $router.push({
              name: 'products_category',
              params: { category: category.route, title: category.title },
            })
          "
        >
          <v-list-item-title class="text-capitalize font-weight-bold">{{
            category.title
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { productsModule } from "@/stores/Products";
import { mapState } from "pinia";
export default {
  name: "MenuDrawer",
  inject: ["Emitter"],
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
  },
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
  mounted() {
    this.Emitter.on("openMenu", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>

<style></style>

<!-- 
<router-link
style="color: black; text-decoration: none"
:to="{
  name: 'products_category',
  params: { category: category.route, title: category.title },
}"
>{{ category.title }}</router-link
> -->
