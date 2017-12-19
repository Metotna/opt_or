<template>
  <div class="inquiry-alls">
    <div class="inquiry-search" v-show='conditionflag'>
      <div class="ins-t">
         <span style="float:left">订单查询条件　</span>
        <el-button type="warning" size="small" class='ins_btn' icon="el-icon-warning" @click='clearQr'>清空</el-button>
        <el-button type="primary" size="small" class='ins_btn' icon="el-icon-caret-bottom" @click='quirylist=!quirylist' v-if='!quirylist'>展开</el-button>
        <el-button type="primary" size="small" class='ins_btn' icon="el-icon-caret-top" @click='quirylist=!quirylist' v-if='quirylist'>收起</el-button>
        <el-button type="danger" size="small" class='ins_btn' style="width:100px;" @click='checkdata' icon="el-icon-search">查询</el-button>
      </div>
      <transition name="el-fade-in-linear">
        <div style="padding:5px;overflow:hidden;width:100%" v-if='quirylist'>
          <div class="block block_time"> <span>起止时间</span>
            <el-date-picker v-model="timeslot" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width:385px;" :picker-options="pickerOptions2" size="small">
            </el-date-picker>
          </div>
          <div class="block"> <span>彩种</span>
            <el-select v-model="queryobj.lotteryType" placeholder="请选择" style="width:150px;" size="small">
              <el-option v-for="item in optiona" :key="item.id" :value="item.id" :label='item.name'>
              </el-option>
            </el-select>
          </div>
          <div class="block"> <span>订单状态</span>
            <el-select v-model="queryobj.orderStatus" placeholder="请选择" size="small" style="width:150px;">
              <el-option v-for="item in optionstatus" :key="item.id" :value="item.id" :label='item.name'>
              </el-option>
            </el-select>
          </div>
          <div class="block"> <span>订单类型</span>
            <el-select v-model="queryobj.betType" placeholder="请选择" size="small" style="width:150px;">
              <el-option v-for="item in optione" :key="item.id" :value="item.id" :label='item.value'>
              </el-option>
            </el-select>
          </div>
          <div class="block"><span>期次</span>
            <el-input v-model="queryobj.winPid" placeholder="请输入期次" style="width:150px;" size="small" :maxlength='11'></el-input>
          </div>
          <div class="block"><span>渠道名称</span>
            <el-input v-model="queryobj.chnName" placeholder="请输入渠道名称" style="width:150px;" size="small"></el-input>
          </div>
          <div class="block"><span>渠道号码</span>
            <el-input v-model="queryobj.chnKey" placeholder="请输入渠道号" style="width:150px;" size="small" :maxlength='9'></el-input>
          </div>
          <div class="block"><span>手机号码</span>
            <el-input v-model="queryobj.account" placeholder="请输入手机号码" size="small" style="width:150px;" :maxlength='11'></el-input>
          </div>
          <div class="block"><span>订单号</span>
            <el-input v-model="queryobj.orderId" placeholder="请输入订单号" size="small" style="width:150px;" :maxlength='14'></el-input>
          </div>
<!--           <div class="block"> <span>货币类型</span>
            <el-select v-model="temptype" clearable placeholder="请选择" style="width:100px;" disabled size="small">
              <el-option v-for="(item,index)  in optiond" :key="index" :value="item.name">
              </el-option>
            </el-select>
          </div> -->
        </div>
      </transition>
    </div>
    <div class="inquiry-cot" ref='inquirycot'>
      <keep-alive>
        <order-list :message="queryobj" ref="orderl" :szflag='quirylist'></order-list>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import orderList from './orderlist'
export default {
  data() {
    return {
      optiona: [{
        id: 404,
        name: '查询中...'
      }],
      optione: [{
          id: '-1',
          value: '全部'
        },
        {
          id: '0',
          value: '普通'
        },
        {
          id: '1',
          value: '追加'
        }, {
          id: '2',
          value: '包中'

        }
      ],
      optiond: [{
          id: 0,
          name: '全部'
        },
        {
          id: 1,
          name: '现金'
        }, {
          id: 2,
          name: '彩金'
        }, {
          id: 3,
          name: '金币'
        }, {
          id: 4,
          name: '优惠券'
        }
      ],
      optionstatus: [{
          id: 100,
          name: '全部'
        },
        {
          id: 10,
          name: '待出票'
        },
        {
          id: 20,
          name: '待开奖'
        },
        {
          id: 10000,
          name: '中奖'
        },
        {
          id: 9000,
          name: '未中奖'
        }, {
          id: 10002,
          name: '已退款'
        }
      ],
      tempchoose: '-1',
      quirylist: true,
      listshow: false,
      timeslot: '',
      orderStatus: '全部',
      temptype: '全部',
      lotteryType: '全部',
      queryobj: {
        token: this.$store.state.userInfo.token, // 用户令牌
        startTime: '', //起始时间
        endTime: '', //终止时间
        lotteryType: 0, //彩种类型
        type: '', //货币类型
        winPid: '', //期次
        account: '', //用户名
        orderId: '', //订单id 
        orderStatus: 100, //订单状态
        betType: '-1',
        chnName: '', //渠道名称
        chnKey: '', //渠道号
        pageSize: 100, //每页记录数
        pageNumber: 1 //页号
      },
      conditionflag: true,
      conditiontext: '展开',
      pickerOptions2: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 0);
            picker.$emit('pick', [start, end]);
          }
        },{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      }
    };
  },
  components: {
    orderList
  },
  methods: {
    clearQr() {
      this.queryobj = {
        token: this.$store.state.userInfo.token, // 用户令牌
        lotteryType: 0, //彩种类型
        type: '', //货币类型
        winPid: '', //期次
        account: '', //用户名
        orderId: '', //订单id 
        orderStatus: 100, //订单状态
        betType: '-1',
        chnName: '', //渠道名称
        chnKey: '', //渠道号
        pageSize: 100, //每页记录数
        pageNumber: 1 //页号
      };
      var myDate = new Date()
      myDate.setDate(myDate.getDate() - 4);
      this.timeslot = [myDate, new Date()];
      this.queryobj.startTime = new Date(myDate).format('yyyy-MM-dd');
      this.queryobj.endTime = new Date().format('yyyy-MM-dd');
    },
    lotteryTypes: async function() {
      const result = await this.http.default.post('/open/service/lottery/gid/list', {
        token: this.$store.state.userInfo.token
      })
      if (result) {
        var alls = [{
          id: 0,
          name: '全部'
        }];
        this.optiona = result.data;
        this.optiona = alls.concat(this.optiona);
        this.checkdata();
      } else {
        this.optiona = [{
          id: 500,
          name: '网络请求错误'
        }]
      }
    },
    checkdata() {
      // console.log(this.queryobj)
      this.listshow = true;
      this.$refs.orderl.getlist();
    }
  },
  watch: {
    'timeslot': function(val) {
      if (val == null) {
        this.queryobj.startTime = "";
        this.queryobj.endTime = '';
      } else {
        this.queryobj.startTime = new Date(val[0]).format('yyyy-MM-dd');
        this.queryobj.endTime = new Date(val[1]).format('yyyy-MM-dd');
      }
    }
  },
  mounted() {
    var myDate = new Date()
    myDate.setDate(myDate.getDate() - 4);
    this.timeslot = [myDate, new Date()];
    this.queryobj.startTime = new Date(myDate).format('yyyy-MM-dd');
    this.queryobj.endTime = new Date().format('yyyy-MM-dd');
    this.lotteryTypes();
  }
}

</script>
<style type="text/css">
.block_time .el-date-editor .el-range-input {
  width: 35%;
  font-size: 14px;
}

.block_time .el-range-separator {
  width: 20px;
  font-size: 15px;
}

</style>
<style scoped>
.inquiry-alls {
  overflow: auto;
  min-width: 700px;
  height: 100%;
  padding-right: 0px;
}

.inquiry-search {
  border: 1px solid #ddd;
  overflow: hidden;
  background-color: #fff;
    width: 1207px;
}

.inquiry-cot {
  margin-top: 5px;
  border: 1px solid #ddd;
  overflow: auto;
  background-color: #fff;
  width: 1207px;
}

.ins-t {
  height: 32px;
  line-height: 30px;
  background-color: #CBEDF1;
  padding: 0 10px;
  font-size: 15px;
}

.block {
  float: left;
  margin: 3px 10px 3px 0;
  /*margin-right: 10px;*/
}

.block span {
  width: 70px;
  display: inline-block;
  text-align: right;
}

#block_time input {
  width: 37%!important;
}

.el-select-dropdown__wrap {
  max-height: none !important;
  overflow: hidden;
}

.ins-t .ins_btn {
  float: left;
  margin: 1px 5px;
  height: 29px;
  padding-top: 7px !important;
}

</style>
