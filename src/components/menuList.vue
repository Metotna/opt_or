<template>
  <div class='el_menus_h'>
    <div class="el_mens_body">
      <el-menu :default-active="pathdata" :router="true" text-color='#fff' background-color='#545c64' active-text-color="#52a2f6" :collapse="collapse" :unique-opened='true'>
        <el-menu-item index="index"><i class="el-icon-menu "></i><span slot="title">首页</span></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-news" :class="tIndex == 2? 'el_m_active' : ''"></i>
            <span :class="tIndex == 2? 'el_m_active' : ''">活动模块</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="slideshows"><i class="el-icon-news"></i><span slot="title"> BANNER</span></el-menu-item>
            <el-menu-item index="operation"><i class="el-icon-news"></i><span slot="title"> 活动运营</span></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title" class='el_list_span'><i class="el-icon-share" :class="tIndex == 3? 'el_m_active' : ''"></i><span :class="tIndex == 3? 'el_m_active' : ''">查询模块</span></template>
          <el-menu-item-group>
            <el-menu-item index="order"><i class="el-icon-share"></i><span slot="title"> 订单查询</span></el-menu-item>
            <el-menu-item index="demographic"><i class="el-icon-share"></i><span slot="title"> 用户统计</span></el-menu-item>
            <el-menu-item index="jaccount"><i class="el-icon-share"></i><span slot="title"> 流水账单</span></el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-submenu index="3">
        <template slot="title"><i class="el-icon-news"></i>彩种管理</template>
        <el-menu-item-group>
          <el-menu-item index="3-1"><i class="el-icon-share"></i>彩种类别</el-menu-item>
          <el-menu-item index="3-2"><i class="el-icon-share"></i>彩种管理</el-menu-item>
          <el-menu-item index="4-1"><i class="el-icon-share"></i>管理账号</el-menu-item>
          <el-menu-item index="4-2"><i class="el-icon-share"></i>用户权限</el-menu-item>
          <el-menu-item index="4-3"><i class="el-icon-share"></i>密码修改</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->
        <!-- <el-menu-item index="/article"><i class="el-icon-news "></i>编辑器</el-menu-item>      -->
      </el-menu>
      <div class="el_btn_choose" :class="collapse == true? 'el-ment_btn' : ''">
        <el-button type="warning" size="small" @click='toCollapse'>{{collText}}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pathdata: '',
      tIndex: 1,
      collapse: false,
      collText: "收起"
    }
  },
  watch: {
    '$route': function(val, oldval) {
      this.pathdata = val.path.substring(1);
      this.toChange(this.pathdata)
      // console.log(this.pathdata,this.tIndex)
    }
  },
  methods: {
    toChange(a) {
      if (a == 'slideshows' || a == 'operation') {
        this.tIndex = 2;
      } else if (a == 'order' || a == 'demographic' || a == 'jaccount') {
        this.tIndex = 3;
      } else {
        this.tIndex = 1;
      }
    },
    toCollapse() {
      this.collapse = !this.collapse;
      this.$parent.collFlag = !this.$parent.collFlag;
      this.$parent.$refs.headerNav.collsFlag = !this.$parent.$refs.headerNav.collsFlag;
      if (this.collText === '收起') this.collText = '展开';
      else this.collText = '收起';
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
    this.toChange(this.pathdata);
  }
}

</script>
<style lang='less'>
.el_mens_body {
  height: 100%;
  position: relative; // overflow: auto;
  i {
    font-size: 18px!important;
    line-height: 40px !important;
  }
  .el-submenu__icon-arrow {
    top: 0;
    margin-top: 0;
  }
  .el_list_span {
    span {
      font-size: 16px;
    }
  }
  .el-menu {
    border-right: none;
  }
  .el_btn_choose {
    position: fixed;
    bottom: 10px;
    left: 0;
    z-index: 55;
    width: 160px;
    padding: 0 3px;
    .el-button {
      width: 100%;
      border: none;
    }
  }
}

.el-ment_btn {
  width: 65px !important;
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
