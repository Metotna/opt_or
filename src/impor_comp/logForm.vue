<template>
  <div class="login">
    <div class="top">
      <img src="../assets/logo-icon.png" height="100%">
    </div>
    <div class="cot">
      <div class="login-form">
        <li>双彩科技运营平台管理系统</li>
        <li class="login-input">
          <i class="el-icon-edit"></i>
          <input type="text" ref="names" v-model="usernameModel" placeholder="请输入用户名" @keyup.enter="nextinput">
        </li>
        <li class="login-input">
          <i class="el-icon-edit"></i>
          <input type="password" ref="pwd" v-model="passwordModel" placeholder="请输入密码" @keyup.enter="onLogin">
        </li>
        <li class="login-btn" @click.enter="onLogin">登　录</li>
        <li class="login-error"><span>{{errorText}}</span></li>
      </div>
    </div>
    <div class="fot">杭州双彩科技有限公司版权所有<sup>©</sup>2017</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: '',
      textname:'',
      aaas:''

    }
  },
  computed: {
    userErrors() {
      let errorText, status
      if (!/@/g.test(this.usernameModel)) {
        status = false
        errorText = '不包含@'
      } else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors() {
      let errorText, status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码不是1-6位'
      } else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  mounted() {
    this.$refs.names.focus();
    this.$store.state.islogin = false;
    this.usernameModel= localStorage.optuser||sessionStorage.username || '';
    // this.onLogin();
  },
  methods: {
    add(){
      if (!/@/g.test(this.textname)){
        this.aaas=true;
      }else{
        this.aaas=false;
      }
    },
    nextinput(){
      this.$refs.pwd.focus();
    },
    onLogin: async function() {
      if (this.usernameModel && this.passwordModel) {
        let data = {
          username: this.usernameModel,
          password: this.passwordModel
        }
        const res = await this.http.default.post('/open/service/user/login', data)
        if (res.data) {
          this.$store.state.islogin = true;
          this.$store.state.userInfo.userName = this.usernameModel;
          this.$store.state.userInfo.token = res.data;
          sessionStorage.setItem("token", res.data);
          sessionStorage.setItem("username", data.username);
          localStorage.setItem("optuser", data.username);
          sessionStorage.setItem("offalg", true);
          this.lotteryTypes();
          this.$router.push({ path: 'index' })
        } else {
          alert(res.msg)
        }

      }
    },
    lotteryTypes: async function() {
      const result = await this.http.default.post('/open/service/lottery/gid/list', {
        token: this.$store.state.userInfo.token
      })
      if (result) {
        sessionStorage.setItem("list", JSON.stringify(result.data));
        this.$store.state.lotterylist = result.data;
      } else {
        this.$store.state.lotterylist = [];
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  height: 100%;
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: space-between;
}

.top {
  padding: 20px 30px;
  background-color: #f6f6f6;
  height: 100px;
  line-height: 80px;
  text-align: left;
}

.fot {
  background-color: #f5f5f5;
  padding: 10px 30px;
  height: 50px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
}

.cot {
  background-color: #dbdbdb;
  flex: 1;
  padding: 30px;
}

.login-form {
  margin: 30px auto;
  box-shadow: 0 0 14px #404040;
  width: 380px;
  padding: 30px 40px 15px;
  border: 1px solid #E2E2E2;
  background-color: #f6f6f6;
  border-radius: 5px;
}

.login-form li {
  width: 300px;
}

.login-input i {
  float: left;
  line-height: 30px;
  padding-left: 30px;
}

.login-input input {
  margin-left: 40px;
  border: none;
  width: 200px;
  height: 100%;
  outline: none;
  border-radius: 5px;
  background-color: inherit;
}

.login-input {
  background-color: #fff;
  height: 35px;
  padding: 3px 5px;
  box-shadow: 0 0 5px #ddd;
}

.login-form li:nth-child(1) {
  line-height: 30px;
  height: 30px;
  font-size: 18px;
  color: #000;
  margin-bottom: 15px;
}

.login-form li:nth-child(2) {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #ddd;
}

.login-form li:nth-child(3) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #ddd;
  border-top: none;
}


.login-btn {
  margin-top: 30px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: #ff8b3b;
  box-shadow: 0 0 10px #ddd;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
}

.login-btn:hover {
  background-color: #ffa86d;
}

.login-error {
  font-size: 12px;
  margin-top: 10px;
  height: 20px;
  line-height: 20px;
}

</style>
