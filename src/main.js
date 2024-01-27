import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// pinia
import { createPinia as createStore } from "pinia";

// Emitter
import mitt from "mitt";
const Emitter = mitt();

// swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .use(createStore())
  .use(router)
  .provide("Emitter", Emitter)
  .mount("#app");
