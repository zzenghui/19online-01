<template>
  <div class="cateItem w">
    <div class="top">
      <div class="title">{{ cateItem.title }}</div>
      <div class="topNav">
        <div class="topNavItem" v-for="item in cateItem.navList" :key="item">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="carous">
        <el-carousel :interval="5000" arrow="always" height="360px">
          <el-carousel-item v-for="item in cateItem.carousalList" :key="item">
            <img :src="item" alt="" style="width: 200px; height: 360px" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="goodslist">
        <div
          class="goodsItem"
          v-for="item in cateItem.goodsList"
          :key="item.id"
          @click="goGoods(item)"
        >
          <div class="topimg">
            <img :src="item.img" alt="" />
          </div>
          <div class="bottomDesc">
            <div class="desc">{{ item.name }}</div>
            <div class="buy">
              <div class="price">¥{{ item.price }}</div>
              <i class="el-icon-shopping-cart-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cateItem"],
  methods: {
    goGoods(goods) {
      this.$router.push({
        name: "goods",
        query: goods,
      });
    },
  },
};
</script>

<style scoped>
.buy i {
  font-size: 25px;
}
.buy .price {
  color: coral;
}
.buy {
  width: 100%;
  padding: 0 10px;
  margin-top: 25px;
  display: flex;
  line-height: 25px;
  justify-content: space-between;
  font-size: 18px;
}
.desc {
  width: 100%;
  padding: 0 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 20px;
}
.topimg img {
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}
.bottomDesc {
  height: 130px;
  padding-top: 20px;
}
.topimg {
  width: 100%;
  height: 230px;
  overflow: hidden;
}

.goodsItem:hover .bottomDesc .desc,
.goodsItem:hover .bottomDesc .buy .price,
.goodsItem:hover .bottomDesc .buy i {
  color: #fff;
}

.goodsItem:hover .bottomDesc {
  background-color: coral;
}

.goodsItem:hover .topimg img {
  transform: scale(1.2);
}

.goodsItem {
  width: 230px;
  height: 100%;
  border: 1px solid #ccc;
  cursor: pointer;
}
.goodslist {
  width: 980px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
::v-deep .el-carousel__indicator--horizontal {
  display: none;
}
::v-deep .el-carousel__arrow--left {
  top: 220px;
  left: 0;
}

::v-deep .el-carousel__arrow--right {
  top: 160px;
  right: 0;
}

::v-deep .el-carousel__arrow {
  border-radius: 0;
  background-color: rgba(50, 50, 50, 0.3);
}

.carous {
  width: 200px;
  height: 100%;
}
.bottom {
  height: 360px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.top .topNav .topNavItem:hover {
  color: red;
}
.top .topNav .topNavItem {
  padding: 0 10px;
  cursor: pointer;
}
.top .topNav {
  display: flex;
}
.top .title {
  font-size: 25px;
}
.top {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid black;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
}
.cateItem {
  height: 440px;
  margin-top: 20px;
}
</style>