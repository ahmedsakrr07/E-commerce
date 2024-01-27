<template>
  <div class="banner">
    <div class="parent">
      <img src="../../../images/banner-bg.jpg" class="img" />
      <div class="cont">
        <h1><span class="text">Huge Saving</span> On UHD Television</h1>
        <p class="hint">Sale up to 50% off on all products</p>
        <v-btn variant="outlined" id="btn">Shop Now</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.parent {
  height: 500px;
  position: relative;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.text {
  color: #00c2ff;
}
.cont {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 600px;
}
.cont h1 {
  font-size: 57px;
  line-height: 84px;
  margin-top: 15px;
  color: white;
}
.hint {
  font-size: 21px;
  color: white;
  margin-top: 22px;
}
#btn {
  color: white;
  border-color: white;
  border-radius: 30px;
  padding-top: 16px;
  padding-bottom: 28px;
  padding-left: 20px;
  padding-right: 20px;
  padding-right: 20px;
  margin-top: 47px;
}

@media only screen and (max-width: 990px) {
  .parent {
    height: 400px;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    padding-top: 40px;
  }
  .cont h1 {
    font-size: 40px;
    line-height: 50px;
    margin-top: 15px;
    color: white;
  }
  .cont {
    position: absolute;
    top: 70px;
    left: 40px;
    width: 600px;
  }
}
@media (max-width: 767px) {
  .parent {
    height: 320px;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    padding-top: 30px;
  }
  .cont h1 {
    font-size: 30px;
    line-height: 50px;
    margin-top: 15px;
    color: white;
  }
  .cont {
    position: absolute;
    top: 70px;
    left: 40px;
    width: 400px;
  }
  .hint {
    font-size: 15px;
    color: white;
    margin-top: 15px;
  }
  #btn {
    color: white;
    border-color: white;
    border-radius: 30px;
    padding-top: 16px;
    padding-bottom: 28px;
    padding-left: 20px;
    padding-right: 20px;
    padding-right: 20px;
    margin-top: 20px;
  }
}
@media (max-width: 650px) {
  .parent {
    height: 300px;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    padding-top: 30px;
  }
  .cont h1 {
    font-size: 25px;
    line-height: 40px;
    margin-top: 15px;
    color: white;
  }
  .cont {
    position: absolute;
    top: 70px;
    left: 40px;
    width: 300px;
  }
  .hint {
    font-size: 13px;
    color: white;
    margin-top: 15px;
  }
  #btn {
    color: white;
    border-color: white;
    border-radius: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    font-size: 10px;
  }
}
@media (max-width: 440px) {
  .parent {
    height: 300px;
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    padding-top: 30px;
  }
  .cont h1 {
    font-size: 18px;
    line-height: 40px;
    margin-top: 15px;
    color: white;
  }
  .cont {
    position: absolute;
    top: 70px;
    left: 10px;
    width: 250px;
  }
  .hint {
    font-size: 10px;
    color: white;
    margin-top: 15px;
  }
  #btn {
    color: white;
    border-color: white;
    border-radius: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 20px;
    font-size: 10px;
  }
}
</style>
