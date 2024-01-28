import { defineStore } from "pinia";
import axios from "axios";
export const productsModule = defineStore("productsModule", {
  id: "products",
  state: () => ({
    FlashDeals: [],
    ProductsLap: [],
    mobile: [],
    laptop: [],
    Fragrances: [],
    categoriesView: [],
    products: [],
    singleProduct: "",
    categories: [
      {
        title: "laptops",
        route: "laptops",
      },
      {
        title: "smartphones",
        route: "smartphones",
      },
      {
        title: "fragrances",
        route: "fragrances",
      },
      {
        title: "skincare",
        route: "skincare",
      },
      {
        title: "groceries",
        route: "groceries",
      },
      {
        title: "decoration",
        route: "home-decoration",
      },
      {
        title: "furniture",
        route: "furniture",
      },
      {
        title: "tops",
        route: "tops",
      },
      {
        title: "sunglasses",
        route: "sunglasses",
      },
    ],
  }),
  actions: {
    async getProducts() {
      try {
        const response = await axios.get("https://dummyjson.com/products");

        if (response.data) {
          const products = response.data.products;

          this.ProductsLap = products.filter((el) => el.category === "laptops");
          this.FlashDeals = products.slice(0, 8);
          this.mobile = products.filter((el) => el.category === "smartphones");
          this.laptop = products.filter((el) => el.category === "laptops");
          this.Fragrances = products.filter(
            (el) => el.category === "fragrances"
          );
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getSingleProducts(productId) {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        console.log(response.data);
        this.singleProduct = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getProductsByCategory(category) {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        console.log(response.data);
        this.categoriesView = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
