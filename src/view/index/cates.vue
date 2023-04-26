<template>
  <div class="cates w">
    <div class="cateItem" v-for="item in category" :key="item.id">
      <div class="title">{{ item.title }}</div>
      <div class="goods">
        <div class="goodsItemP" v-for="item2 in item.imgs" :key="item2">
          <img :src="item2" alt="" />
        </div>
      </div>
    </div>

    <div class="cateItem">
      <div class="title">必buy清单</div>
      <div class="buyNav">
        <div
          class="buyNavItem"
          v-for="item in cateDetail"
          :key="item.id"
          :class="{ navActive: item.id == activeId }"
          @click="activeId = item.id"
        >
          {{ item.title }}
        </div>
      </div>
      <div
        class="content"
        v-for="item in cateDetail"
        :key="item.id"
        v-show="activeId == item.id"
      >
        <div class="goodsitem" v-for="item2 in item.children" :key="item2.id">
          <div class="img">
            <img :src="item2.img" alt="" />
          </div>
          <div class="detail">
            <div class="name">{{ item2.name }}</div>
            <div class="desc">{{ item2.desc }}</div>
            <div class="price">
              <div style="width: 100px; display: flex">
                <div class="nowprice">{{ item2.price }}</div>
                &ensp;
                <div class="preprice">{{ item2.prePrice }}</div>
              </div>
              <i class="el-icon-shopping-cart-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      activeId: 1,
    };
  },
  computed: {
    ...mapState("home", ["category", "cateDetail"]),
  },
  methods: {
    ...mapActions("home", ["getcategoryAct", "getcateDAct"]),
  },
  mounted() {
    this.getcategoryAct();
    this.getcateDAct();
  },
};
</script>

<style scoped>
.preprice {
  color: #ccc;
  font-size: 13px;
}
.nowprice {
  color: #fd6e27;
  font-size: 25px;
}
.price i {
  font-size: 25px;
  margin-left: 100px;
  color: #ccc;
  margin-top: 5px;
}
.price {
  display: flex;
  margin-top: 40px;
  height: 40px;
  line-height: 40px;
}
.detail .desc {
  width: 260px;
  color: #999;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 20px;
}
.detail .name {
  font-size: 17px;
}
.detail {
  padding: 15px 0;
  margin-left: 10px;
}
.content .goodsitem .img img {
  width: 100%;
  height: 60%;
}
.content .goodsitem .img {
  width: 85px;
  height: 100%;
  display: flex;
  align-items: center;
}
.content .goodsitem {
  width: 100%;
  height: 170px;
  border: 1px solid #ccc;
  display: flex;
  cursor: pointer;
}
.content {
  width: 100%;
  height: 540px;
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.buyNavItem:hover {
  background-color: #fff;
}
.buyNavItem {
  width: 33.3%;
  height: 100%;
  background-color: #f3f3f3;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}
.navActive {
  background-color: #fff;
}
.buyNav {
  width: 100%;
  height: 60px;
  display: flex;
}
.goodsItemP img {
  width: 100%;
  height: 100%;
}
.goodsItemP {
  width: 50%;
  height: 32%;
}
.goods {
  display: flex;
  width: 100%;
  height: 600px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin-top: 10px;
}
.title {
  width: 100%;
  height: 50px;
  background-color: #ad221f;
  line-height: 50px;
  padding-left: 15px;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
}
.cateItem {
  width: 390px;
  height: 100%;
}
.cates {
  height: 660px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}
</style>