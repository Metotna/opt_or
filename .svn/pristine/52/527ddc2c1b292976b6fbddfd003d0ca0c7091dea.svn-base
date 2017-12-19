<template>
  <div class='el_menus_h'>
    <el-menu :default-active="pathdata" :router="true" :unique-opened='true' text-color='#fff' background-color='#545c64' active-text-color="#52a2f6" :collapse="true">
      <el-menu-item index="index"><i class="el-icon-menu "></i><span slot="title">首页</span></el-menu-item>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-news" :class="tIndex == 2? 'el_m_active' : ''"></i></template>
        <el-menu-item-group>
          <el-menu-item index="slideshows"><i class="el-icon-news"></i><span slot="title"> BANNER</span></el-menu-item>
          <el-menu-item index="operation"><i class="el-icon-news"></i><span slot="title"> 活动运营</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-share" :class="tIndex == 3? 'el_m_active' : ''"></i></template>
        <el-menu-item-group>
          <el-menu-item index="order"><i class="el-icon-share"></i><span slot="title"> 订单查询</span></el-menu-item>
          <el-menu-item index="demographic"><i class="el-icon-share"></i><span slot="title"> 用户统计</span></el-menu-item>
          <el-menu-item index="jaccount"><i class="el-icon-share"></i><span slot="title"> 流水账单</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="index"><i class="el-icon-menu "></i><span slot="title">首页</span></el-menu-item> -->
      <!--       <el-menu-item index="slideshows"><i class="el-icon-news"></i><span slot="title">BANNER</span></el-menu-item>
      <el-menu-item index="operation"><i class="el-icon-news"></i><span slot="title">活动运营</span></el-menu-item>
      <el-menu-item index="order"><i class="el-icon-share"></i><span slot="title">订单查询</span></el-menu-item>
      <el-menu-item index="demographic"><i class="el-icon-share"></i><span slot="title">用户统计</span></el-menu-item>
      <el-menu-item index="jaccount"><i class="el-icon-share"></i><span slot="title">流水账单</span></el-menu-item> -->
      <!--             <el-submenu index="3">
        <template slot="title"><i class="el-icon-news"></i>彩种管理</template>
        <el-menu-item-group>
          <el-menu-item index="3-1"><i class="el-icon-share"></i>彩种类别</el-menu-item>
          <el-menu-item index="3-2"><i class="el-icon-share"></i>彩种管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <!--       <el-submenu index="4">
        <template slot="title"><i class="el-icon-news"></i>账户中心</template>
        <el-menu-item-group>
          <el-menu-item index="4-1"><i class="el-icon-share"></i>管理账号</el-menu-item>
          <el-menu-item index="4-2"><i class="el-icon-share"></i>用户权限</el-menu-item>
          <el-menu-item index="4-3"><i class="el-icon-share"></i>密码修改</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
      <!-- <el-menu-item index="/article"><i class="el-icon-news "></i>编辑器</el-menu-item>      -->
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pathdata: '',
      tIndex: 1
    }
  },
  mounted() {
    this.datas = this.$route.name;
    // console.log(this.$route)
  },
  watch: {
    '$route': function(val, oldval) {
      this.pathdata = val.path.substring(1);
      // console.log(this.pathdata)
      if (this.pathdata == 'slideshows' || this.pathdata == 'operation') {
        this.tIndex = 2;
      } else if (this.pathdata == 'order' || this.pathdata == 'demographic' || this.pathdata == 'jaccount') {
        this.tIndex = 3;
      } else {
        this.tIndex = 1;
      }

    }
  },
  route: {
    data() {
      this.$root.showLoading();
      return this.fetchCertificates().then((res) => {
        this.$root.dismissLoading();
        if (res.error) return this.$root.toastError(res.error);
        if (res.data.certificates.length > 0) {
          return res.data;
        } else {
          console.log(this.$route, "----当前页面的url信息----");
        }
      });
    },
    canActivate(transition) {
      console.log(transition, "======上一个页面的url信息=======");
      transition.next();
    }
  },
  mounted() {
    this.pathdata = this.$route.fullPath.substring(1);
  }
}

</script>
<style>
.el_menus_h i {
  font-size: 24px!important;
}

.menuList ul {
  border: none!important;
  z-index: 999;
}

.el-menu-item-group .el-menu-item-group__title {
  display: none !important;
}

.el-submenu .el-menu-item {
  width: 100% !important;
  min-width: 0!important;
}

.el-menu-vertical-demo {
  font-size: 20px!important;
}

.el-submenu__title,
.el-menu-item,
.el-submenu .el-menu-item {
  height: 40px !important;
  line-height: 40px !important;
}

.el_m_active {
  color: rgb(82, 162, 246) !important;
}

</style>
