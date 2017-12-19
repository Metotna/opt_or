<template>
  <div class='jAla'>
    <div class="jAla_inquiry">
      <el-input placeholder="请输入用户手机号码" v-model="inq_name" style="width:400px" size='small' :maxlength='11'>
        <template slot="prepend">账户名</template>
        <el-button slot="append" icon="el-icon-search" type="danger">查询</el-button>
      </el-input>
    </div>
    <div class="jAla_header">
      <i class="jAla_tags" :class="isChoose == 1? 'jAla_choose' : 'jAla_unchoose'" @click='toChoose(1)'>购彩记录</i>
      <i class="jAla_tags" :class="isChoose == 2? 'jAla_choose' : 'jAla_unchoose'" @click='toChoose(2)'>中奖记录</i>
      <i class="jAla_tags" :class="isChoose == 3? 'jAla_choose' : 'jAla_unchoose'" @click='toChoose(3)'>账户明细</i>
      <i class="jAla_tags" :class="isChoose == 4? 'jAla_choose' : 'jAla_unchoose'" @click='toChoose(4)'>明细1</i>
      <i class="jAla_tags" :class="isChoose == 5? 'jAla_choose' : 'jAla_unchoose'" @click='toChoose(5)'>明细2</i>
    </div>
    <div class="jAla_body">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isChoose: 1,
      inq_name: ''
    }
  },
  methods: {
    toChoose(a) {
      this.isChoose = a;
    }
  },
  watch:{
    inq_name:function(val) {
      this.inq_name=val.replace(/[^1-9]/g,'');
    }
  }
}

</script>
<style>
.jAla_inquiry {
  margin: 0px 0 15px 0;
}

.jAla_inquiry .el-input-group__append {
  color: #fff!important;
  background-color: #409eff!important;
  border-color: #409eff!important;
}

.jAla_header {
  margin-left: 50px;
}

.jAla_tags {
  margin-right: 35px;
  width: 100px;
  height: 30px;
  text-align: center;
  color: #333;
  font-size: 14px;
  font-style: normal;
  line-height: 30px;
  border: 1px solid #ddd;
  border-bottom: none;
  background-color: #a1a6bc;
  position: relative;
  display: inline-block;
  cursor: default;
  -webkit-transition: background-color .2s;
  -o-transition: background-color .2s;
  transition: background-color .2s;
}

.jAla_choose {
  background-color: #fbf7f7 !important;
  font-weight: bold;
}

.jAla_choose::before {
  z-index: 5 !important;
}

.jAla_unchoose {
  background-color: #a1a6bc !important;
}

.jAla_tags:before {
  content: '';
  display: block;
  width: 35px;
  height: 29px;
  position: absolute;
  transform: skewX(-30deg);
  background: inherit;
  border-top-left-radius: 5px;
  border: 1px solid #ddd;
  border-right: none;
  border-bottom: none;
  left: -20px;
  top: -1px;
  z-index: 3;
}

.jAla_tags:after {
  content: '';
  display: block;
  width: 35px;
  height: 29px;
  position: absolute;
  transform: skewX(30deg);
  background: inherit;
  border: 1px solid #ddd;
  border-left: none;
  border-bottom: none;
  border-top-right-radius: 5px;
  top: -1px;
  right: -20px;
  z-index: 5;
}

.jAla_body {
  padding: 20px 0;
  border: 1px solid #ddd;
  margin-top: -1px;
  background-color: #fbf7f7;
}

</style>
