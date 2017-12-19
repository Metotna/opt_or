<template>
  <div id="layout">
    <header-Nav style='width:100%; height:45px;' ref='headerNav'></header-Nav>
    <menu-List class="menuList" ref='menuList' :class="collFlag == true? 'layout_a' : ''"></menu-List>
    <content :class="collFlag == true? 'layout_b' : ''">
      <router-view class="conTs" id='conTs'></router-view>
    </content>
  </div>
</template>
<script>
import headerNav from '../components/headerNav'
import menuList from '../components/menuList'
export default {
  name: 'layout',
  data() {
    return {
      collFlag: true
    }
  },
  components: {
    headerNav,
    menuList
  },
  methods: {

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
  /*font-family: 'new PingFang Regular';*/
}

content {
  flex: 1;
  display: block;
  overflow: auto;
  background-color: #f0f0f0;
  margin-left: 65px;
}

.menuList {
  position: fixed;
  top: 45px;
  left: 0;
  bottom: 0;
  background-color: #545c64;
  width: 65px;
  z-index: 99;

}

.layout_a {
  width: 160px !important;
}

.layout_b {
  margin-left: 160px !important;
}

.conTs {
  background-color: #f0f0f0;
  padding: 10px;
}

.el-scrollbar__wrap {
  overflow-x: hidden !important;
  margin-bottom: 0 !important;
}

</style>
