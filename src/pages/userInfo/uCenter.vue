<template>
  <div class="ucenter">
    <el-card class="userI">
      <div class="thead">
        <div class="avar">
          <el-avatar shape="square" :src="squareUrl"></el-avatar>
        </div>
        <div class="info">
          <div class="name changecolor">{{ user.username }}</div>
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
      <table>
        <thead>
          <tr>
            <th style="width: 20%">订单号</th>
            <th style="width: 20%">联系人名称</th>
            <th style="width: 20%">订单金额</th>
            <th style="width: 20%">下单时间</th>
            <th style="width: 20%">订单状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orderList" :key="item.id" class="bodyTr">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.money }}</td>
            <td>{{ item.time }}</td>
            <td style="color: red">{{ item.status }}</td>
          </tr>
        </tbody>
      </table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderList: [
        {
          id: 1,
          name: "zzh",
          money: "188",
          time: "2023-04-12",
          status: "待取件",
        },
      ],
      user: {},
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
  created() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
};
</script>

<style scoped>
.bodyTr:hover {
  background-color: #ccc;
}
th {
  font-size: 17px;
  font-weight: 600;
  height: 50px;
}
td {
  height: 40px;
  text-align: center;
}
th {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
table {
  border-collapse: collapse;
  width: 100% !important;
}
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
  width: 70px;
  height: 70px;
}
.userI {
  display: flex;
}
</style>