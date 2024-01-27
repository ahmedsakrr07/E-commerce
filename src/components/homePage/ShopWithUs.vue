<template>
  <div class="shop-with-us py-12">
    <div class="title">
      <h2><span>Why Shop</span> With Us ?</h2>
    </div>
    <v-container fluid="fluid">
      <v-row>
        <v-col cols="12" md="4" lg="3" sm="6" class="pt-5">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent">
              <img src="../../../images/free-shipping.png" />
            </div>
            <v-card-title
              style="
                font-weight: 700;
                color: white;
                font-size: 16px;
                white-space: pre-wrap;
                line-height: 1.2;
              "
              >Free Shipping on first order</v-card-title
            >
            <v-card-text class="text-center text-white"
              >present suspicious offers matiels</v-card-text
            >
            <a href="#" style="color: white">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="3" sm="6" class="pt-5">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent">
              <img src="../../../images/weekly-flash-sales.png" />
            </div>
            <v-card-title
              style="
                font-weight: 700;
                color: white;
                font-size: 16px;
                white-space: pre-wrap;
                line-height: 1.2;
              "
              >Weekly Flash Sales</v-card-title
            >
            <v-card-text class="text-center text-white"
              >present suspicious offers matiels</v-card-text
            >
            <a href="#" style="color: white">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="3" sm="6" class="pt-5">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent">
              <img src="../../../images/discount.png" />
            </div>
            <v-card-title
              style="
                font-weight: 700;
                color: white;
                font-size: 16px;
                white-space: pre-wrap;
                line-height: 1.2;
              "
              >Anual payment discount</v-card-title
            >
            <v-card-text class="text-center text-white"
              >present suspicious offers matiels</v-card-text
            >
            <a href="#" style="color: white">Learn More</a>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" lg="3" sm="6" class="pt-5">
          <v-card elevation="0" class="text-center" color="transparent">
            <div class="img-parent">
              <img src="../../../images/cash-back.png" />
            </div>
            <v-card-title
              style="
                font-weight: 700;
                color: white;
                font-size: 16px;
                white-space: pre-wrap;
                line-height: 1.2;
              "
              >Cashback Reward program</v-card-title
            >
            <v-card-text class="text-center text-white"
              >present suspicious offers matiels</v-card-text
            >
            <a href="#" style="color: white">Learn More</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shop-with-us {
  background: url("../../../images/why-shop-with-us-banner.webp");
  background-repeat: re;
  background-position: center;
  background-size: cover;
}
.title h2 {
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}
.title span {
  color: #00ffe7;
}
</style>
