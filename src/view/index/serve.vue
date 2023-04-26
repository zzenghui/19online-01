<template>
  <div class="serve w">
    <div class="item">
      <img src="../../../public/static/images/banner/serve1.png" alt="" />
      &ensp;
      <h3>品质</h3>
      &emsp;
      <span>正品行货 购物无忧</span>
    </div>

    <div class="item">
      <img src="../../../public/static/images/banner/serve2.png" alt="" />
      &ensp;
      <h3>低价</h3>
      &emsp;
      <span>普惠实价 帮您省钱</span>
    </div>

    <div class="item">
      <img src="../../../public/static/images/banner/serve3.png" alt="" />
      &ensp;
      <h3>速达</h3>
      &emsp;
      <span>专业配送 按时按需</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item span {
  font-size: 20px;
}
.item {
  display: flex;
  align-items: center;
}
.serve {
  height: 85px;
  background-color: #f2f2f2;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>