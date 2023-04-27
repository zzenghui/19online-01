<template>
  <div class="Thead w">
    <div class="adv">
      <img src="../asset/imgs/thead/adv.jpg" alt="" />
    </div>
    <div class="info">
      <div class="logo">
        <img src="../asset/imgs/thead/logo.jpg" alt="" />
      </div>
      <div class="search">
        <div class="input">
          <input type="text" />
          <el-select placeholder="" v-model="selected">
            <el-option label="产品" value="1"> </el-option>
            <el-option label="文章" value="2"> </el-option>
            <el-option label="下载" value="3"> </el-option>
          </el-select>
          <button>搜索</button>
        </div>
        <div class="history">
          <div class="historyItem">国台</div>
          <div class="historyItem">奔富</div>
          <div class="historyItem">马爹利</div>
          <div class="historyItem">麦卡伦</div>
          <div class="historyItem">獭祭</div>
        </div>
      </div>
      <div class="userInfo">
        <div class="lineOne" v-if="!user.username">
          您好! &ensp; <span @click="goLogin">请登录</span> &ensp; 注册
          &emsp;&emsp;
          <i
            class="el-icon-platform-eleme"
            style="font-size: 20px; color: #18a8ff"
          ></i>
        </div>

        <div class="lineOne" v-else>
          您好! &ensp; {{ user.username }} &ensp;
          <span class="goMember" @click="goMember">进入会员中心</span>
          <span @click="logout">退出</span>
          &emsp;&emsp;
        </div>

        <div class="cart" @click="$router.push('/userInfo/cart')">
          <i class="el-icon-shopping-cart-full"></i>
          我的购物车
          <div class="num">{{ goodsNum }}</div>
        </div>
        <br /><br />

        <div class="serverPhone">服务热线：400-884-1919</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", ["goodsNum"]),
  },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user") || "{}"),
      selected: "下载",
    };
  },
  // watch: {
  //   user: {
  //     deep: true,
  //     handler() {
  //       console.log(123);
  //     },
  //   },
  // },
  methods: {
    goMember() {
      this.$router.push("/userInfo");
    },
    goLogin() {
      this.$router.push("/index/login");
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      location.reload();
    },
  },
  mounted() {
    this.$bus.$on("reload", () => {});
  },
};
</script>

<style scoped>
.Thead {
  height: 200px;
}
.adv {
  height: 80px;
  width: 100%;
}
.adv img {
  width: 100%;
  height: 100%;
}
.info {
  width: 100%;
  height: 120px;
}
.info .logo {
  width: 280px;
  height: 100%;
  float: left;
}
.info .logo img {
  width: 100%;
  height: 100%;
}
.info .search {
  float: left;
  width: 530px;
  height: 100%;
  padding-top: 20px;
  margin-left: 160px;
}
.info .search .input {
  width: 100%;
  height: 40px;
}
.info .search .input input {
  float: left;
  width: 382px;
  height: 100%;
  border: 1px solid #fd6e27;
  outline: none;
  padding-left: 50px;
  color: #666;
  border-right: none;
}
.info .search .input .el-select {
  float: left;
  width: 78px;
  height: 100%;
  border-radius: none;
  outline: none !important;
}
::v-deep .el-input__inner {
  border: 1px solid #fd6e27;
  border-radius: 0px !important;
  font-size: 13px !important;
}
::v-deep .el-select .el-input.is-focus .el-input__inner {
  border-color: #fd6e27 !important;
}
::v-deep .el-select .el-input__inner:focus {
  border-color: #fd6e27;
}
.info .search .input button {
  float: left;
  width: 70px;
  height: 100%;
  background-color: #fd6e27;
  color: #fff;
  border: none;
}
.history {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  display: flex;
}
.history .historyItem {
  padding: 0 10px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}
.history .historyItem:hover {
  color: red;
}
.userInfo {
  float: right;
  width: 200px;
  height: 100%;
}
.userInfo .lineOne {
  color: #666;
  font-size: 14px;
  margin-top: 5px;
}
.userInfo .lineOne span {
  color: red;
  cursor: pointer;
}
.cart {
  float: right;
  width: 140px;
  height: 40px;
  background-color: #f8f8f8;
  margin-top: 10px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
}
.cart i {
  color: #fd6e27;
}
.num {
  display: inline-block;
  width: 15px;
  height: 15px;
  color: #fff;
  background-color: #fd6e27;
  vertical-align: middle;
  border-radius: 70% 50%;
  text-align: center;
  line-height: 15px;
  font-size: 12px;
  margin-top: -3px;
}

.cart:hover {
  color: #fff;
  background-color: #fd6e27;
  cursor: pointer;
}
.cart:hover i {
  color: #fff;
}

.cart:hover .num {
  color: #fd6e27;
  background-color: #fff;
}
.serverPhone {
  margin-top: 15px;
  font-weight: 900;
  font-size: 14px;
}
</style>