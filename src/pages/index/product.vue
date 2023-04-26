<template>
  <div>
    <div class="product w">
      <div
        class="prodItem"
        @click="activeId = 1"
        :class="{ active: activeId == 1 }"
      >
        产品详情
      </div>
      <div
        class="prodItem"
        @click="activeId = 2"
        :class="{ active: activeId == 2 }"
      >
        产品参数
      </div>
      <div
        class="prodItem"
        @click="activeId = 3"
        :class="{ active: activeId == 3 }"
      >
        产品评价
      </div>
    </div>
    <el-card v-show="activeId == 1"> 产品详情</el-card>
    <el-card v-show="activeId == 2">产品参数 </el-card>
    <el-card v-show="activeId == 3"> 产品评价</el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeId: 1,
    };
  },
};
</script>

<style scoped>
.el-card {
  margin: 15px 0;
  text-align: center;
}
.active {
  background-color: #fff;
  color: red !important;
  border-top: 1px solid red;
}
.product {
  display: flex;
  margin-top: 40px;
  height: 40px;
  background-color: #f3f3f3;
  line-height: 40px;
  padding-left: 20px;
}
.product .prodItem {
  color: #666;
  font-size: 15px;
  cursor: pointer;
  width: 100px;
  height: 100%;
  text-align: center;
}
</style>