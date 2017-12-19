<template>
  <div id="layout">
    <header-Nav style='width:100%;' ></header-Nav>
    <menu-List class="menuList"></menu-List>
    <content>
      <router-view class="conTs"></router-view>
    </content>
  </div>
</template>
<script>
import headerNav from '../components/headerNav'
import menuList from '../components/menuList'
export default {
  name: 'layout',
  components: {
    headerNav,
    menuList
  }
}

</script>
<style>
#layout {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  font-family: 'new PingFang Regular';
}
content {
  flex: 1;
  display: block;
  overflow: auto;
  background-color: #f0f0f0;
  margin-left:  150px !important;
}

.menuList {
  position: fixed;
  top: 45px;
  left: 0;
  height: 100%;
  background-color: #545c64;
  width: 150px !important;
  z-index: 8;
}

.conTs {
  background-color: #f0f0f0;
  padding: 20px 30px;

/*  width: 82% !important;;
  margin-left: 16%;*/
}

.el-scrollbar__wrap {
  overflow-x: hidden !important;
  margin-bottom: 0 !important;
}

</style>
