<template>
  <div class="banner">
    <div class="main w">
      <Nav />

      <!-- 轮播 -->
      <div class="bannerSwiper">
        <el-carousel height="440px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.img" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!--广告  -->
      <div class="adv">
        <img
          src="../../../public/static/images/banner/bannerRight01.jpg"
          alt=""
        />
        <img
          src="../../../public/static/images/banner/bannerRight02.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("home", ["bannerList"]),
  },
  methods: {
    ...mapActions("home", ["getBannerAct"]),
  },
  mounted() {
    this.getBannerAct();
  },
  components: {},
};
</script>

<style scoped>
.adv img {
  width: 100%;
  height: 50%;
}
.adv {
  float: right;
  width: 190px;
  height: 440px;
  background-color: #ad221f;
}

/* 广告区域 */

.el-carousel,
.el-carousel__item {
  width: 100% !important;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.bannerSwiper {
  width: 800px;
  height: 440px;
  margin-left: 210px;
  float: left;
}

/* 轮播区域 */

.banner {
  height: 490px;
  width: 100%;
  background-image: url("../../../public/static/images/banner/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>