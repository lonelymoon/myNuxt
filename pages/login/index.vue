<template>
<section id="gl-page">
  <v-container fluid class="gl-page-container px-2 py-5">
    <v-layout row wrap>
      <v-flex xs12 v-if="isMobile" class="pb-3">
        <div class="gl-input-title">
          {{activeStatus === 'login' ? '登录Gamelife' : '注册Gamelife'}}
        </div>
      </v-flex>
      <v-flex sm6 xs12 :class="flexClasses" v-resize="onResize" v-show="showLogin">
        <v-card class="py-3 px-3">
          <div class="input-header mb-3 pb-3">
            登录/Login
          </div>
          <div class="input-item">
            <gl-input type="text"
                      v-model="account_login"
                      text="账号"
                      placeholder="用户名/邮箱/手机号"
                      min="6"
                      @error="canLogin">
            </gl-input>
          </div>
          <div class="input-item">
            <gl-input type="password"
                      v-model="password_login"
                      text="密码"
                      min="6"
                      @error="canLogin">
            </gl-input>
          </div>
          <v-btn color="blue" dark depressed block @click="login">登录</v-btn>
          <div class="gl-input-change-box py-2" v-if="isMobile">
            <div class="gl-input-change-left" @click="activeStatus = 'register'">没有账号？点此注册</div>
            <div class="gl-input-change-right">忘记密码？</div>
          </div>
        </v-card>
      </v-flex>
      <v-flex sm6 xs12 :class="flexClasses" v-show="showRegister">
        <v-card class="py-3 px-3">
          <div class="input-header mb-3 pb-3">
            注册/Register
          </div>
          <div class="register-way">
            <div class="input-item">
              <gl-input type="text"
                        check="email"
                        v-model="account_register"
                        text="邮箱"
                        placeholder="邮箱"
                        errorMsg="请填写正确的邮箱地址"
                        @error="canRegister">
              </gl-input>
            </div>
            <div class="input-item">
              <gl-input type="password"
                        v-model="password_register"
                        text="密码"
                        min="6"
                        @error="canRegister">
              </gl-input>
            </div>
            <div class="input-item">
              <gl-input type="password"
                        v-model="confirm"
                        text="确认密码"
                        errorMsg="两次输入密码不一致"
                        :showError="passwordPass"
              >
              </gl-input>
            </div>
          </div>
          <v-btn color="blue" dark depressed block @click="register">注册</v-btn>
          <div class="gl-input-change-box py-2" v-if="isMobile">
            <div class="gl-input-change-left" @click="activeStatus = 'login'">没有账号？点此注册</div>
            <div class="gl-input-change-right">忘记密码？</div>
          </div>
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
      isMobile: false,
      account_login: '',
      password_login: '',
      account_register: '',
      password_register: '',
      confirm: '',
      passwordPass: { status: true, value: this.confirm },
      loginCheckNum: 0,
      registerCheckNum: 0,
      activeStatus: 'login'
    }
  },
  computed: {
    flexClasses() {
      return {
        'px-2': !this.isMobile
      }
    },
    showLogin() {
      return !this.isMobile || (this.isMobile && this.activeStatus === 'login')
    },
    showRegister() {
      return !this.isMobile || (this.isMobile && this.activeStatus === 'register')
    }
  },
  methods: {
    onResize() {
      let w = window.innerWidth
      this.isMobile = (w <= 500)
    },
    login() {
      if (!this.loginCheck()) {
        alert('填写格式有误')
        return false
      }

      this.$axios.post('/login', {
        account: this.account_login,
        password: this.password_login
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    loginCheck() {
      let account = this.account_login.replace(/\s+/g, '')
      let password = this.password_login.replace(/\s+/g, '')
      if (this.loginCheckNum !== 0 || account.length === 0 || password.length === 0) {
        return false
      }
      return true
    },
    register() {
      if (!this.registerCheck()) {
        alert('填写格式有误')
        return false
      }

      this.$axios.post('/register', {
        account: this.account_register,
        password: this.password_register
      }).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    registerCheck() {
      let account = this.account_register.replace(/\s+/g, '')
      let password = this.password_register.replace(/\s+/g, '')
      if (this.loginCheckNum !== 0 || account.length === 0 || password.length === 0 || !this.passwordPass) {
        return false
      }
      return true
    },
    canLogin(value) {
      value ? this.loginCheckNum++ : this.loginCheckNum--
    },
    canRegister(value) {
      value ? this.registerCheckNum++ : this.registerCheckNum--
    }
  },
  watch: {
    password_register() {
      this.passwordPass = {
        status: this.confirm === this.password_register,
        value: this.confirm
      }
    },
    confirm() {
      this.passwordPass = {
        status: this.confirm === this.password_register,
        value: this.confirm
      }
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

.gl-input-title{
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 24px;
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

.gl-input-change-box{
  position: relative;
  height: auto;
  font-size: 12px;
  color: #2196F3;
}

.gl-input-change-box:after{
  clear: both;
  display: block;
  content: "";
}

.gl-input-change-left{
  float: left;
  cursor: pointer;
}

.gl-input-change-right{
  float: right;
}

.gl-input-change-left:hover,.gl-input-change-right:hover{
  cursor: pointer;
  opacity: 0.9;
}
</style>
