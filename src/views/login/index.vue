<template>
  <div class="login">
    <div class="bg">
      <img src="./../../assets/images/bg.jpg" alt="">
    </div>
    <div class="form">
      <h1>权限管理</h1>
      <el-form :model="ruleForm" status-icon size="mini"
               :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" auto-complete="off"
                    @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off"
                    @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    ...mapActions([
      'user/login',
    ]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this['user/login'](this.ruleForm)) {
            this.$router.push({
              path: '/',
            });
          }
        }
        return true;
      });
    },
  },
};
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 100%;
  }
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -120px;
    margin-left: -200px;
    width: 400px;
    height: 200px;
    padding-bottom: 10px;
    background: rgba(255,255,255,.5);
    border: 1px solid #e1e1e1;
  }
  .demo-ruleForm {
    padding-right: 30px;
  }
  h1 {
    text-align: center;
  }
</style>
