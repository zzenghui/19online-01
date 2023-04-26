<template>
  <div class="reg w">
    <div class="title">用户注册</div>
    <div class="form">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            placeholder="请输入用户名"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
          <el-input
            type="email"
            v-model="ruleForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="手机" prop="phone">
          <el-input
            type="text"
            v-model="ruleForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="yanz" class="yanz">
          <el-input
            type="text"
            v-model="ruleForm.yanz"
            autocomplete="off"
          ></el-input>
          <div class="yanzN">
            <div class="yanC">
              <YANZHENG
                :identifyCode="identifyCode"
                :contentWidth="100"
                :contentHeight="40"
              />
            </div>
            <span @click="refreshIdentifyCode">看不清楚?换一张</span>
          </div>
        </el-form-item>
      </el-form>

      <button class="register" @click="reg">注册</button>
    </div>
  </div>
</template>

<script>
import YANZ from "../../mixin/Sidentify";
import { mapActions } from "vuex";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        pass: "",
        checkPass: "",
        email: "",
        phone: "",
        yanz: "",
      },

      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        yanz: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions("user", ["registerAct"]),
    async reg() {
      if (this.ruleForm.yanz == this.identifyCode) {
        delete this.ruleForm.checkPass;
        delete this.ruleForm.yanz;
        // console.log(this.ruleForm);
        //TODO 调用注册接口
        let res = await this.registerAct(this.ruleForm);
        if (res.data.status == 1) {
          this.$toast.center("注册成功");
          this.$router.push("/index/login");
        } else {
          this.$toast.center(res.data.msg);
        }
      } else {
        this.$toast.center("验证码错误");
      }
    },
  },
  mixins: [YANZ],
};
</script>

<style scoped>
.yanC {
  width: 50%;
  height: 100%;
}
.yanzN span {
  font-size: 13px;
  cursor: pointer;
  color: red;
}
.yanzN {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 230px;
  height: 40px;
  display: flex;
}

.yanz .el-input {
  width: 120px;
}
.register {
  width: 100%;
  height: 45px;
  background-color: coral;
  color: #fff;
  border: none;
  outline: none;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 100px;
}
::v-deep .el-input__inner {
  border-radius: 0;
}
::v-deep .el-input__inner:focus {
  border-color: coral;
}
.title {
  font-size: 25px;
  text-align: center;
  margin-top: 20px;
}
.reg {
  position: relative;
  width: 360px;
  margin: 0 auto;
}
</style>