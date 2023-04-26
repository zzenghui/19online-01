<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    ref="menu"
    text-color="#fff"
    active-text-color="#ffd04b"
    :background-color="color"
    :router="true"
    :unique-opened="true"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-user"></i>
        <span>个人中心</span>
      </template>
      <el-menu-item index="/userInfo/uCenter">
        <i class="el-icon-office-building"></i> 用户中心首页
      </el-menu-item>
      <el-menu-item index="/userInfo/Collection">
        <i class="el-icon-star-off"></i> 收藏
      </el-menu-item>
      <el-menu-item index="/userInfo/cart">
        <i class="el-icon-shopping-cart-1"></i> 购物车
      </el-menu-item>
      <el-menu-item index="/userInfo/order">
        <i class="el-icon-present"></i> 我的订单
      </el-menu-item>
      <el-menu-item index="/userInfo/finance">
        <i class="el-icon-bank-card"></i> 我的财务
      </el-menu-item>
      <el-menu-item index="/userInfo/integral">
        <i class="el-icon-mobile-phone"></i> 我的积分
      </el-menu-item>
      <el-menu-item index="/userInfo/member">
        <i class="el-icon-postcard"></i> 我的会员卡
      </el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-phone-outline"></i>
        <span>客户服务</span>
      </template>
      <el-menu-item index="/userInfo/refund">
        <i class="el-icon-bank-card"></i> 退款明细
      </el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>消息中心</span>
      </template>
      <el-menu-item index="/userInfo/message">
        <i class="el-icon-chat-dot-square"></i> 我的留言
      </el-menu-item>
    </el-submenu>

    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>会员设置</span>
      </template>
      <el-menu-item index="/userInfo/uInfo">
        <i class="el-icon-user-solid"></i> 个人信息
      </el-menu-item>
      <el-menu-item index="/userInfo/updateU">
        <i class="el-icon-unlock"></i> 修改密码
      </el-menu-item>
    </el-submenu>

    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-eleme"></i>
        <span>微信绑定</span>
      </template>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      color: null,
    };
  },
  mounted() {
    this.color = localStorage.getItem("color");
    this.$bus.$on("changeColor", (val) => {
      this.color = val;
    });
  },
};
</script>

<style scoped>
i {
  color: #fff !important;
}
.el-menu {
  height: 100%;
  width: 100%;
}
</style>