<template>
  <div class="headerN">
    <div class='headerSS'>
      <div class="header-left headers">双彩</div>
      <div class="header-right headers">
        <el-breadcrumb separator="/" class='elbread'>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: pathname }" v-if="pathname== 'slideshows'">BANNER</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: pathname }" v-if="pathname== 'operation'">活动运营</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: pathname }" v-if="pathname== 'order'">订单查询</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: pathname }" v-if="pathname== 'article'">编辑器</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: pathname }" v-if="pathname== 'demographic'">用户统计</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: pathname }" v-if="pathname== 'jaccount'">流水账单</el-breadcrumb-item>
        </el-breadcrumb>
        <ul>
          <router-link class="ul-r" v-if='flag' to=''>{{name}}</router-link>
          <router-link class="ul-r" v-if='!flag' to="/login">登录</router-link>
          <router-link class="ul-r" v-if='flag' to="/login" style='color:#b2b0b0'>注销</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: this.$store.state.islogin,
      name: this.$store.state.userInfo.userName,
      pathname: ''
    }
  },
  methods: {
    // changeUrl() {
    //   if (this.$store.state.baseUrl == '') {

    //     this.$router.push({ path: '/login' });
    //   }
    // }
  },
  watch: {
    '$route': function(val, oldval) {
      this.pathname = val.path.substring(1);
      // console.log(this.pathdata)
      // console.log('TO:'+val.path, 'FROM:'+oldval.path)
    }
  },
  mounted() {
    this.pathname = this.$route.fullPath.substring(1);
    // console.log(this.pathdata)
  }

}

</script>
<style spcoed>
.header-left {
  float: left;
  width: 65px;
  background-color: #e57e31;
  color: #fbefc6;
  text-align: center;
}

.header-right {
  margin-left: 65px;
  background-color: #fff;
  color: #000;
  padding: 0 15px;
}

.header-right span {
  text-align: left;
}

.header-right ul {
  float: right;
  color: #000;
}

.header-right ul .ul-r {
  display: inline-block;
  margin: 0 10px;
  color: #000;
}

.header-right ul .ul-r:hover {
  color: #8c8888;
}

.headerN .headers {
  height: 100%;
  line-height: 45px;
}

.elbread {
  height: 45px !important;
  line-height: 45px !important;
  margin-right: 50px;
  float: left;
  font-size: 16px;
}

.headerN {
  width: 100%;
  height: 45px;
  background-color: #50616b;

}

.headerSS {
  position: fixed;
  top: 0;
  left: 0;
  height: 45px;
  width: 100%;
  z-index: 7;
  box-shadow: 8px 5px 10px #f0f0f0;
}

</style>
