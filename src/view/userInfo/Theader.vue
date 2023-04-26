<template>
  <div class="Theader" ref="thead">
    <div class="goHome">
      <h1><i class="el-icon-guide"></i> 返回首页</h1>
    </div>
    <div class="user">
      <div class="info">你好,111</div>
      <div class="block">
        <el-color-picker
          v-model="color"
          @change="handleColor"
        ></el-color-picker>
      </div>
      <div class="out">安全退出</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: null,
    };
  },
  methods: {
    handleColor() {
      localStorage.setItem("color", this.color);
      this.$refs.thead.style["background-color"] = this.color;
      this.$bus.$emit("changeColor", this.color);
    },
  },
  mounted() {
    this.$refs.thead.style["background-color"] = localStorage.getItem("color");
  },
};
</script>

<style scoped>
.block {
  display: flex;
  align-items: center;
}
.out:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.out {
  width: 100px;
  text-align: center;
  background-color: rgba(50, 50, 50, 0.3);
  cursor: pointer;
}
.user {
  float: right;
  width: 240px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  color: #fff;
}
.goHome h1 {
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.goHome:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.goHome {
  float: left;
  width: 200px;
  height: 100%;
  background-color: rgba(50, 50, 50, 0.3);
}
.Theader {
  background-color: #51497f;
  width: 100%;
  height: 100%;
}
</style>