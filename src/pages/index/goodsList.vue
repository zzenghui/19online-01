<template>
  <div class="goodsList w">
    <Nav />
    <div class="select">
      <el-dropdown v-for="item in navList" :key="item.id">
        <span class="el-dropdown-link">
          {{ item.category }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" ref="menu">
          <el-dropdown-item v-for="item2 in item.children" :key="item2.id">{{
            item2.name
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="selectManner">
      <div class="left">
        <div
          class="selectItem"
          @click="activeId = 1"
          :class="{ active: activeId == 1 }"
        >
          默认
        </div>
        <div
          class="selectItem"
          @click="activeId = 2"
          :class="{ active: activeId == 2 }"
        >
          销量
        </div>
        <div
          class="selectItem"
          @click="activeId = 3"
          :class="{ active: activeId == 3 }"
        >
          价格
        </div>
        <div
          class="selectItem"
          @click="activeId = 4"
          :class="{ active: activeId == 4 }"
        >
          最新
        </div>
      </div>
      <div class="right">11件产品</div>
    </div>

    <div class="goodsListContent w">
      <goodsItem
        v-for="goods in goodslist"
        class="goodsItem"
        :key="goods.id"
        :item="goods"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import goodsItem from "@/view/index/goodsItem";
export default {
  data() {
    return {
      activeId: 1,
    };
  },
  computed: {
    ...mapState("home", ["navList"]),
    ...mapState("goodslist", ["goodslist"]),
  },
  methods: {
    ...mapActions("home", ["getNavListAct"]),
    ...mapActions("goodslist", ["getGoodsListAct"]),
  },
  created() {
    this.getNavListAct();
    this.getGoodsListAct();
  },
  mounted() {},
  components: {
    goodsItem,
  },
};
</script>

<style scoped>
.goodsItem {
  margin-bottom: 10px;
}
/* .goodsListContent::after {
  content: "";
  flex: auto;
} */
.goodsListContent .goodsItem:last-child() {
  transform: translateX(-20%);
}

.goodsListContent {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
.goodsItem:not(:nth-child(5n)) {
  margin-right: calc(50px / 4) !important;
}

/* .goodsListContent {
  width: 100%;
  height: auto;
  display: grid;
  gap: 10px;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill.100px);
} */
.right {
  float: right;
  padding-right: 10px;
  font-size: 13px;
}
.left {
  float: right;
}
.active {
  background-color: #fd6e27;
  color: #fff;
}
.left {
  float: left;
  display: flex;
}
.selectItem {
  width: 100px;
  height: 100%;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
.selectManner {
  height: 40px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  line-height: 40px;
}
.select {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  padding: 0 15px;
  margin: 20px 0;
}
.el-dropdown-menu {
  /* display: flex; */
  /* position: absolute; */
  /* width: 300px; */
  height: auto;

  overflow: hidden;
}
.el-dropdown-menu__item {
  font-size: 14px;
  background-color: #ddd;
  border-radius: 12px;
  margin: 5px 10px;
  white-space: nowrap;
  text-align: center;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #fd6e27;
  color: #fff;
}
.el-dropdown {
  font-size: 17px;
  width: fit-content;
  padding: 0 20px;
  padding-left: 20px;
}

.el-dropdown-link {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  color: black;
}
.el-icon-arrow-down {
  font-size: 16px;
}
</style>