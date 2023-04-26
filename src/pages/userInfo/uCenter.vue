<template>
  <div class="ucenter">
    <el-card>
      <div class="thead">
        <div class="avar">
          <el-avatar shape="square" :src="squareUrl"></el-avatar>
        </div>
        <div class="info">
          <div class="name changecolor">123</div>
          <p>普通会员</p>
        </div>
      </div>
    </el-card>

    <el-card class="cateAll">
      <div class="cate">
        <div class="cateItem">
          <div class="img">
            <img
              src="../../../public/static/images/user/user_index_07.jpg"
              alt=""
            />
          </div>
          <p class="changecolor">我的会员卡</p>
        </div>
        <div class="cateItem">
          <div class="img">
            <img
              src="../../../public/static/images/user/user_index_09.jpg"
              alt=""
            />
          </div>
          <p class="changecolor">我的购物车</p>
        </div>
        <div class="cateItem">
          <div class="img">
            <img
              src="../../../public/static/images/user/user_index_11.jpg"
              alt=""
            />
          </div>
          <p class="changecolor">我的订单</p>
        </div>
        <div class="cateItem">
          <div class="img">
            <img
              src="../../../public/static/images/user/user_index_17.jpg"
              alt=""
            />
          </div>
          <p class="changecolor">网站公告</p>
        </div>
        <div class="cateItem">
          <div class="img">
            <img
              src="../../../public/static/images/user/user_index_18.gif"
              alt=""
            />
          </div>
          <p class="changecolor">用户信息</p>
        </div>
      </div>
    </el-card>

    <el-card class="table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
    };
  },
  mounted() {
    document.querySelectorAll(".changecolor").forEach((item) => {
      item.style.color = localStorage.getItem("color");
    });
    this.$bus.$on("changeColor", (val) => {
      document.querySelectorAll(".changecolor").forEach((item) => {
        item.style.color = val;
      });
    });
  },
};
</script>

<style scoped>
.table {
  margin-top: 15px;
}
.cateItem .img img {
  width: 100%;
  height: 100%;
}
.cateItem .img {
  width: 60px;
  height: 60px;
}
.cateItem p {
  font-size: 15px;
  font-weight: 600;
}
.cateItem {
  width: 150px;
  height: 100%;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  /* justify-content: center; */
}
.cateAll {
  margin-top: 15px;
  height: 170px;
  display: flex;
  align-items: center;
}
.cate {
  width: 750px;
  height: 90px;
  display: flex;
  /* margin-top: 50px; */
}
.info p {
  font-weight: 600;
}
.info .name {
  font-size: 20px;
}
.info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 15px;
}
.el-avatar {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.thead {
  width: 100%;
  height: 100%;
  display: flex;
}
.avar {
  /* float: left; */
  width: 70px;
  height: 70px;
}
.el-card {
  display: flex;
}
</style>