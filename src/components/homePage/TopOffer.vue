<template>
  <div
    class="offer bg-grey-lighten-4 mt-3 pa-5 d-flex align-center justify-center"
  >
    <v-container fluid="fluid">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="offer-img"
              v-bind="props"
              style="cursor: pointer; overflow: hidden"
            >
              <img
                src="../../../images/chairs.webp"
                :style="`width: 100%; transition: 0.7s all ease-in-out; transform: scale(${
                  isHovering ? 1.05 : 1
                });`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="offer-img"
              v-bind="props"
              style="cursor: pointer; overflow: hidden"
            >
              <img
                src="../../../images/playstations.webp"
                :style="`width: 100%; transition: 0.7s all ease-in-out; transform: scale(${
                  isHovering ? 1.05 : 1
                });`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="offer-img"
              v-bind="props"
              style="cursor: pointer; overflow: hidden"
            >
              <img
                src="../../../images/headset.webp"
                :style="`width: 100%; transition: 0.7s all ease-in-out; transform: scale(${
                  isHovering ? 1.05 : 1
                });`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="12" lg="6" md="6" class="pb-4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="offer-img"
              v-bind="props"
              style="cursor: pointer; overflow: hidden"
            >
              <img
                src="../../../images/iphones.webp"
                :style="`width: 100%; transition: 0.7s all ease-in-out; transform: scale(${
                  isHovering ? 1.05 : 1
                });`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" lg="6" md="6" class="pb-4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="offer-img"
              v-bind="props"
              style="cursor: pointer; overflow: hidden"
            >
              <img
                src="../../../images/laptops.webp"
                :style="`width: 100%; transition: 0.7s all ease-in-out; transform: scale(${
                  isHovering ? 1.05 : 1
                });`"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
