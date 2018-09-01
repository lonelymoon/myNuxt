<template>
<section id="gl-page">
  <v-container fluid class="gl-page-container">
    <v-layout row wrap>
      <v-flex sm6 xs12 class="px-2">
        <v-card class="py-3 px-3">
          <div class="input-header mb-3 pb-3">
            登录/Login
          </div>
          <div class="input-item">
            <gl-input type="text" v-model="account" text="账号" placeholder="用户名/邮箱/手机号"></gl-input>
          </div>
          <div class="input-item">
            <gl-input type="password" v-model="password" text="密码" min="6"></gl-input>
          </div>
          <v-btn color="blue" dark depressed block>登录</v-btn>
        </v-card>
      </v-flex>
      <v-flex sm6 xs12 class="px-2">
        <v-card class="py-3 px-3">
          <div class="input-header mb-3 pb-3">
            注册/Register
          </div>
          <div class="register-way">
            <div class="input-item">
              <gl-input type="text" check="email" v-model="account" text="邮箱" placeholder="邮箱"></gl-input>
            </div>
            <div class="input-item">
              <gl-input type="password" v-model="password" text="密码" min="6"></gl-input>
            </div>
            <div class="input-item">
              <gl-input type="password" v-model="comfirm" text="确认密码" errorMsg=""></gl-input>
            </div>
          </div>
          <v-btn color="blue" dark depressed block>注册</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <div class="login-bg img-blur"></div>
</section>
</template>

<script>
import { GlInput } from '../../components'

export default {
  components: {
    GlInput
  },
  data() {
    return {
      account: '',
      password: '',
      comfirm: ''
    }
  }
}
</script>

<style scoped>
.gl-page-container{
  position: relative;
  height: auto;
  z-index: 1;
}

.login-bg{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: url('/slide/slide6.jpg') no-repeat top center;
  background-size: cover;
}

.img-blur{
  filter: blur(10px);
}

.input-header{
  position: relative;
  height: auto;
  border-bottom: 1px solid #7f828b;
  font-size: 26px;
}

.input-item{
  position: relative;
  height: auto;
  margin-bottom: 16px;
}
</style>
