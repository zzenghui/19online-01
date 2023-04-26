<template>
  <div class="rightNav">
    <div class="topNav">
      <div class="topItem"><i class="el-icon-phone-outline"></i></div>
      <div class="topItem center"><i class="el-icon-user-solid"></i></div>
      <div class="topItem"><i class="el-icon-date"></i></div>
    </div>

    <div class="goTop" @click="goTop"><i class="el-icon-arrow-up"></i></div>
  </div>
</template>

<script>
export default {
  methods: {
    goTop() {
      //直接跳到头部
      //   document.body.scrollTop = document.documentElement.scrollTop = 0;
      //直接跳到头部
      //   scrollTo(0, 0);
      //过度写法
      var myTimer = -1;
      var scrollTo =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (myTimer == -1) {
        myTimer = setInterval(() => {
          scrollTo -= 60;
          if (scrollTo <= 0) {
            scrollTo = 0;
            window.clearInterval(myTimer);
            myTimer = -1;
          }
          window.scrollTo(0, scrollTo);
        }, 10);
      }
    },
  },
};
</script>

<style scoped>
.topItem {
  width: 100%;
  height: calc(100% / 3);
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  color: #fff;
}
.center {
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
}
.goTop {
  width: 50px;
  height: 50px;
  background-color: #1e88e5;
  border-radius: 10px;
  padding: 0 10px;
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  color: #fff;
}
.topNav {
  width: 100%;
  height: 150px;
  background-color: #1e88e5;
  border-radius: 10px;
  padding: 0 10px;
}
.rightNav {
  position: fixed;
  right: 50px;
  top: 40%;
  transform: translateY(-50%);
  width: 50px;
  height: 205px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>