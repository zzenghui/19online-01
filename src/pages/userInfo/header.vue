<template>
  <el-card>
    <div class="title">
      <i :class="title.icon"></i>
      {{ title.title }}
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.title {
  font-size: 18px;
}
</style>