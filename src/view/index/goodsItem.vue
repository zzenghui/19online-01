<template>
  <div>
    <div class="goodsItem" @click="goGoods">
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
</template>

<script>
export default {
  props: ["item"],
  methods: {
    goGoods() {
      this.$router.push({
        name: "goods",
        query: this.item,
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
</style>