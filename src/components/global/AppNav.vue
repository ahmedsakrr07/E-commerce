<template>
  <div class="nav-bar">
    <v-app-bar color="#02218f" height="fit-content" class="w-100">
      <v-container fluid="fluid" style="padding-top: 25px">
        <v-row>
          <v-col cols="2">
            <img
              src="../../../images/logo.png"
              @click="$router.push({ name: 'home' })"
              style="cursor: pointer"
              alt=""
            />
          </v-col>
          <v-col cols="5">
            <ul
              class="links d-flex text-white align-center"
              style="list-style: none; gap: 38px; margin-left: -47px"
            >
              <li v-for="category in categories" :key="category.title">
                <router-link
                  style="color: white; text-decoration: none"
                  :to="{
                    name: 'products_category',
                    params: { category: category.route, title: category.title },
                  }"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="4">
            <div
              class="parent text-white d-flex justify-end align-center"
              style="margin-top: -12px"
            >
              <!-- <div
                class="help d-flex align-center"
                style="gap: 8px; cursor: pointer; margin-right: -21px"
                id="language"
              >
                <span
                  style="width: 20px; margin-bottom: -8px; margin-left: -29px"
                  v-bind:innerHTML="slectedLanguage[0].icon"
                ></span>
                <span class="text-white"
                  >{{ slectedLanguage[0].title }}/{{
                    slectedLanguage[0].currency
                  }}</span
                >
                <v-icon style="cursor: pointer">mdi-chevron-down</v-icon>
                <v-menu activator="#language">
                  <v-list v-model:selected="slectedLanguage" mandatory="true">
                    <v-list-item
                      v-for="lang in language"
                      :key="lang.title"
                      :value="lang"
                    >
                      <v-list-item-title
                        class="d-flex align-center"
                        style="gap: 10px"
                      >
                        <span style="width: 20px" v-html="lang.icon"></span>
                        {{ lang.title }}/{{ lang.currency }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div> -->
              <div
                class="whishlist d-flex align-center flex-column"
                :style="`cursor:pointer;margin-left: 55px;margin-right: -100px;pointer-events:${
                  $route.name === 'card-product' ? 'none' : 'unset'
                }`"
                @click="openCart"
              >
                <v-badge
                  location="right top"
                  color="#205dc2"
                  :content="cartItem.length"
                  offset-x="-12"
                  v-if="cartItem.length > 0"
                ></v-badge>
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  style="width: 30px; fill: orange"
                >
                  <path
                    class="path1"
                    d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path2"
                    d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path3"
                    d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
                  ></path>
                </svg>
                <span class="text-orange">Cart</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <!-- <v-app-bar-nav-icon @click="openCart"></v-app-bar-nav-icon> -->
    </v-app-bar>
  </div>
</template>

<script>
import { productsModule } from "@/stores/Products";
import { mapState } from "pinia";
import { cartStore } from "@/stores/Cart";
export default {
  name: "AppNav",
  inject: ["Emitter"],
  data() {
    return {
      slectedLanguage: [
        {
          title: "EN",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
<circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"></circle>
<g>
    <path style="fill:#0052B4;" d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"></path>
    <path style="fill:#0052B4;" d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"></path>
    <path style="fill:#0052B4;" d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"></path>
    <path style="fill:#0052B4;" d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"></path>
    <path style="fill:#0052B4;" d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"></path>
    <path style="fill:#0052B4;" d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"></path>
    <path style="fill:#0052B4;" d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"></path>
    <path style="fill:#0052B4;" d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"></path>
</g>
<g>
    <path style="fill:#D80027;" d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"></path>
    <path style="fill:#D80027;" d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"></path>
    <path style="fill:#D80027;" d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"></path>
    <path style="fill:#D80027;" d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"></path>
    <path style="fill:#D80027;" d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"></path> 
</g>
</svg>`,
          currency: "USD",
        },
      ],
      language: [
        {
          title: "EN",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
<circle style="fill:#F0F0F0;" cx="256" cy="256" r="256"></circle>
<g>
    <path style="fill:#0052B4;" d="M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z"></path>
    <path style="fill:#0052B4;" d="M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z"></path>
    <path style="fill:#0052B4;" d="M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z"></path>
    <path style="fill:#0052B4;" d="M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z"></path>
    <path style="fill:#0052B4;" d="M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z"></path>
    <path style="fill:#0052B4;" d="M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z"></path>
    <path style="fill:#0052B4;" d="M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z"></path>
    <path style="fill:#0052B4;" d="M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z"></path>
</g>
<g>
    <path style="fill:#D80027;" d="M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z"></path>
    <path style="fill:#D80027;" d="M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z"></path>
    <path style="fill:#D80027;" d="M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z"></path>
    <path style="fill:#D80027;" d="M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z"></path>
    <path style="fill:#D80027;" d="M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z"></path> 
</g>
</svg>`,
          currency: "USD",
        },
        {
          title: "DE",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
    <path style="fill:#FFDA44;" d="M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783  L15.923,345.043z"></path>
    <path d="M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z"></path>
    <path style="fill:#D80027;" d="M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155  C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z"></path>
</svg>`,
          currency: "EURO",
        },
      ],
    };
  },
  computed: {
    ...mapState(productsModule, ["categories"]),
    ...mapState(cartStore, ["cartItem"]),
  },
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>

<style></style>
