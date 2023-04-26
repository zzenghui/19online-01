<template>
  <el-container>
    <el-header><userHead /></el-header>
    <el-container>
      <el-aside width="200px"><Menu /></el-aside>
      <el-main> <router-view></router-view> </el-main>
    </el-container>
  </el-container>
</template>

<script>
import userHead from "@/view/userInfo/Theader";
import Menu from "./menu.vue";
export default {
  components: {
    userHead,
    Menu,
  },
};
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-header {
  color: #333;
  line-height: 60px;
  padding: 0 !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>