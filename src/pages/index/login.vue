<template>
  <div class="login w">
   
    <div class="title">会员登录</div>
    <div class="line">
      <div class="full"></div>
    </div>
    <div class="form">
      <div class="username">
        <div class="icon">
          <i class="el-icon-user"></i>
        </div>
        <input
          type="text"
          placeholder="请输入用户名"
          v-model="userInfo.username"
        />
      </div>
      <div class="password">
        <div class="icon">
          <i class="el-icon-lock"></i>
        </div>
        <input
          type="password"
          placeholder="请输入用户名"
          v-model="userInfo.password"
        />
      </div>
    </div>

    <div class="todo">
      <span @click="forget">忘记密码?</span>
      <span class="reg" @click="goReg">免费注册</span>
    </div>

    <button class="loginBtn" @click="login">登录</button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("user", ["loginAct"]),
    ...mapMutations("user", ["GETUSERINFO"]),
    goReg() {
      this.$router.push("/index/register");
    },
    forget() {
      this.$toast.center("未绑定手机号,无法找回密码");
    },
    async login() {
      let res = await this.loginAct(this.userInfo);
      console.log(res);
      if (res.data.status == 1) {
        this.$toast.center("登陆成功");
        let userInfo = { token: res.data.token, user: res.data.data };
        this.GETUSERINFO(userInfo);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("token", res.data.token);
        this.$router.push("/userInfo");
        this.$bus.$emit("reload", res.data.data);
      } else {
        this.$toast.center("用户不存在");
      }
    },
  },
};
</script>

<style scoped>
.loginBtn {
  width: 100%;
  height: 50px;
  background-color: #fd6e27;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  border-radius: 5px;
}
.reg {
  color: coral;
  text-decoration: underline;
  cursor: pointer;
}
.todo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 30px 0;
}
.icon {
  position: absolute;
  width: 40px;
  height: 38px;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 38px;
  font-size: 18px;
}
.username input,
.password input {
  width: 100%;
  height: 100%;
  outline: none;
  padding-left: 50px;
  border: none;
  /* outline: 1px solid #fd6e27; */
}
.username,
.password {
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 35px;
  border: 1px solid #ccc;
}
.full {
  width: 40%;
  height: 100%;
  background-color: coral;
}
.line {
  width: 100%;
  height: 2px;
  background-color: #ccc;
  margin-top: 10px;
}
.title {
  font-size: 21px;
  font-weight: 600;
  color: coral;
}
.login {
  width: 300px;
  height: 330px;
  margin: 0 auto;
}
</style>