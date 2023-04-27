<template>
  <div class="goods w">
    <Nav />
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/index/home' }"
        >首页</el-breadcrumb-item
      >
      <el-breadcrumb-item><a href="/">酒</a></el-breadcrumb-item>
      <el-breadcrumb-item>不知道该分什么类得酒</el-breadcrumb-item>
      <el-breadcrumb-item>{{ goods.name }}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="goodsInfo">
      <div class="goodsPhoto">
        <div class="bigPhoto">
          <!-- <img :src="goods.img" alt="" /> -->
          <Zoom :imgUrl="goods.img" />
        </div>
        <div class="smallbig">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img :src="goods.img" alt="" /></div>
              <div class="swiper-slide"><img :src="goods.img" alt="" /></div>
              <div class="swiper-slide"><img :src="goods.img" alt="" /></div>
            </div>
            <div class="swiper-button-prev"></div>
            <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
            <div class="swiper-button-next"></div>
            <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
          </div>
        </div>
      </div>

      <div class="goodsDetail">
        <div class="title">{{ goods.name }}</div>
        <div class="price">
          <span>价格</span>
          <span>￥{{ goods.price }}</span>
        </div>
        <div class="saleInfo">
          <p><span>销量</span> &emsp; 0</p>
          <p><span>浏览</span> &emsp; 9</p>
          <p><span>快递</span> &emsp; 顺丰包邮</p>
        </div>
        <div class="num">
          <span>数量</span> &emsp;
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number
          >&emsp;
          <span>(库存 10 件)</span>
        </div>
        <div class="todo">
          <button class="buy" @click="addCart">立即购买</button> &emsp;
          <button class="addCart" @click="addCart">加入购物车</button>&emsp;
          <span class="lookCart" @click="$router.push('/userInfo/cart')"
            >查看购物车</span
          >
        </div>
      </div>
    </div>

    <Product />
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import Zoom from "./Zoom.vue";
import Product from "./product.vue";
import { nanoid } from "nanoid";
import { mapActions } from "vuex";
export default {
  props: ["goods"],
  data() {
    return {
      swiper: null,
      num: 1,
    };
  },
  methods: {
    ...mapActions("cart", ["addCartAct"]),
    handleChange(val) {
      console.log(val);
    },
    addCart() {
      let token = localStorage.getItem("token");
      if (token) {
        this.goods.num = this.num;
        this.goods.selected = false;
        this.goods.id = nanoid();
        console.log(this.goods);
        this.addCartAct(this.goods);
        this.$toast.center("已加入购物车,请前去用户中心付款");
      } else {
        this.$toast.center("您还未登录,请先登录");
      }
    },
  },
  components: { Zoom, Product },
  mounted() {
    console.log(this.$route.query);
    this.$nextTick(function () {
      this.swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  },
};
</script>

<style scoped>
.lookCart {
  font-size: 13px;
  color: red;
  cursor: pointer;
}
.addCart {
  width: 150px;
  height: 50px;
  background-color: #fff;
  color: #f10215;
  border: none;
  font-size: 20px;
  border: 1px solid #f10215;
}
.todo {
  margin-block: 20px;
}
.buy {
  width: 150px;
  height: 50px;
  background-color: #f10215;
  color: #fff;
  border: none;
  font-size: 20px;
}
.el-input-number {
  width: 150px;
  height: 30px;
}
.num {
  display: flex;
  height: 80px;
  align-items: center;
  font-size: 14px;
  color: #666;
}
.saleInfo p span {
  color: #666;
}
.saleInfo p {
  line-height: 30px;
}
.saleInfo {
  width: 100%;
  height: 100px;
  border-bottom: 1px dotted #ccc;
  font-size: 13px;
  padding-left: 20px;
}
.price span:nth-child(2) {
  font-size: 25px;
  color: red;
  font-weight: 600;
}
.price span:nth-child(1) {
  font-size: 13px;
  color: #666;
}
.price {
  width: 540px;
  height: 70px;
  background-color: #f3f3f3;
  line-height: 70px;
  padding-left: 20px;
  margin-top: 10px;
}
.title {
  font-size: 20px;
  line-height: 25px;
}
.goodsDetail {
  float: right;
  width: 770px;
  height: 480px;
}
.smallbig {
  width: 100%;
  height: 70px;
  overflow: hidden;
}
.bigPhoto img {
  width: 100%;
  height: 100%;
}
.bigPhoto {
  width: 100%;
  height: 410px;
}
.goodsPhoto {
  float: left;
  width: 400px;
  height: 100%;
}
.el-breadcrumb {
  margin: 20px 0;
}
.goodsInfo {
  width: 100%;
  height: 480px;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
  position: relative;
  --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
  --swiper-navigation-color: #666; /* 单独设置按钮颜色 */
  --swiper-navigation-size: 25px; /* 设置按钮大小 */
  padding: 0 30px;
}
.swiper-button-prev {
  position: absolute;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>