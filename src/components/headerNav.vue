<template>
  <div class='headerSS'>
    <div class="header-left" :class="collsFlag == true? 'header_a' : ''">双彩</div>
    <div class="header-right" :class="collsFlag == true? 'header_b' : ''">
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
        <!-- <router-link class="ul-r" v-if='!flag' to="/login">登录</router-link> -->
        <router-link class="ul-r" v-if='flag' to="/login" style='color:#b2b0b0'>注销</router-link>
      </ul>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  data() {
    return {
      flag: this.$store.state.islogin,
      name: this.$store.state.userInfo.userName,
      pathname: '',
      collsFlag: true
    }
  },
  methods: {

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
<style spcoed lang='less'>
.headerSS {
  line-height: 45px;
  background-color: #50616b;
  box-shadow: 8px 5px 10px #f0f0f0;
  .header-left {
    float: left;
    width: 65px;
    background-color: #e57e31;
    color: #fbefc6;
    text-align: center;
    height: 100%;

  }
  .header-right {
    height: 100%;
    line-height: 45px;
    margin-left: 65px;
    background-color: #fff;
    color: #000;
    padding: 0 15px;
    .elbread {
      height: 45px !important;
      line-height: 45px !important;
      margin-right: 50px;
      float: left;
      font-size: 16px;
    }
    span {
      text-align: left;
    }
    ul {
      float: right;
      color: #000;
      .ul-r {
        display: inline-block;
        margin: 0 10px;
        color: #000;
      }
      .ul-r:hover {
        color: #8c8888;
      }
    }
  }
}

.header_a {
  width: 160px !important;
}

.header_b {
  margin-left: 160px !important;
}

</style>
