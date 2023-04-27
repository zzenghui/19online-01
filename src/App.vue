<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  word-wrap: break-word !important;
  word-break: normal !important;
}
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #666;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
.clearfix::after,
.clearfix::before {
  content: "";
  clear: both;
  display: block;
  height: 0;
}
</style>