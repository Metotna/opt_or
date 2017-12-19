<template>
  <div>
    <div class="ins-t">
      <span style="float:left">订单查询结果　</span>
      <!--       <el-button icon="el-icon-download" size="small" style="float:right;width:100px;margin:1px 5px;height:29px;padding-top:7px" @click='tryfun' >测试</el-button> -->
      <el-button icon="el-icon-download" size="small" style="float:left;width:100px;margin:1px 5px;height:29px;padding-top:7px" @click='export2Excel' type='success'>导出数据</el-button>

    </div>
    <div style="padding:10px;" class='order_table'>
      <el-table :data="tableData" border style="font-size: 13px;"  show-summary :summary-method="getSummaries" v-loading="vloadFlag">
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="account" label="手机号" width="105">
        </el-table-column>
        <el-table-column label="订单号" width="132">
          <el-button-group slot-scope="scope">
            <span v-colors="'red'">{{scope.row.orderId |order-numbera}}</span>{{scope.row.orderId|order-numberb}}
          </el-button-group>
        </el-table-column>
        <el-table-column prop="lotteryName" label="彩种" width="80">
        </el-table-column>
        <el-table-column label="订单详情" width="100">
          <el-button-group slot-scope="scope">
            <span @click='handleClick(scope.row)' style="text-decoration:underline;cursor:pointer;">{{scope.row.orderDescUsr}}</span>
          </el-button-group>
        </el-table-column>
        <el-table-column prop="winPid" label="期次" width="100">
        </el-table-column>
        <el-table-column label="订单状态" width="80">
          <el-button-group slot-scope="scope">{{scope.row.orderStatus | order-status}}</el-button-group>
        </el-table-column>
        <el-table-column prop="betCount" label="注数" width="50">
        </el-table-column>
        <el-table-column prop="betDouble" label="倍数" width="50">
        </el-table-column>
        <el-table-column prop="orderMoney" label="投注金额(¥)" width="93">
        </el-table-column>
        <el-table-column prop="winMoney" label="中奖金额(¥)" width="93">
        </el-table-column>
        <el-table-column label="类型" width="50">
          <el-button-group slot-scope="scope"> {{scope.row.betType|order-type}}</el-button-group>
        </el-table-column>
        <!--         <el-table-column prop="type" label="货币" width="50">
        </el-table-column> -->
        <el-table-column prop="chnKey" label="渠道号" width="100">
        </el-table-column>
        <el-table-column prop="chnName" label="渠道名称" width="100">
        </el-table-column>
      </el-table>
      <el-dialog title="订单详情" :visible.sync="dialogTableVisible" style='width:120%;'>
        <!-- 竞彩 -->
        <el-table :data="orderticket" style="width: 100%" border max-height='400' class='tickcot'>
          <el-table-column type="index" width="50" label="序号">
          </el-table-column>
          <el-table-column label="玩法" width="90">
            <el-button-group slot-scope="scope">
              <span v-if='ordertype'>{{scope.row.ticketContext|order-play}}</span>
              <span v-if='!ordertype'>{{ticketcotb(scope.row.ticketContext,true)}}</span>
            </el-button-group>
          </el-table-column>
          <el-table-column label="投注详情" min-width="150">
            <el-button-group slot-scope="scope">
              <span v-if='ordertype'>{{ticketcota(scope.row.ticketContext)}}</span>
              <span v-if='!ordertype'>{{ticketcotb(scope.row.ticketContext,false)}}</span>
            </el-button-group>
          </el-table-column>
          <el-table-column label="中奖状态" min-width="70">
            <el-button-group slot-scope="scope"> {{scope.row.awardResult|order-result}}</el-button-group>
          </el-table-column>
          <el-table-column label="出票状态" min-width="70">
            <el-button-group slot-scope="scope"> {{tstatus(scope.row.ticketStatus)}}</el-button-group>
          </el-table-column>
          <el-table-column prop="ticketBetCount" label="注数" min-width="45">
          </el-table-column>
          <el-table-column prop="ticketBetDouble" label="倍数" min-width="45">
          </el-table-column>
          <el-table-column prop="ticketBetMoney" label="金额(¥)" min-width="60">
          </el-table-column>
        </el-table>
      </el-dialog>
      <div class="PagePilot">
        <pagepilots :pcount='countpage' :psize='pagesizes' :pnums='currentpage' @size-change='pagesizesc' @num-change='currentpagec'></pagepilots>
      </div>
    </div>
  </div>
</template>
<script>
import pagepilots from '../components/pagePilots'
export default {
  props: ['message', 'szflag'],
  data() {
    return {
      ticketcot: '',
      gridDatas: '',
      loading: false,
      dialogTableVisible: false,
      pagesizes: 100,
      countpage: 1,
      currentpage: 1,
      tableData: [],
      orderticket: [],
      ordertype: false,
      types: '',
      maxheg: 400,
      vloadFlag:false
    }
  },
  components: {
    pagepilots
  },
  methods: {
    orderAnalysis(obj) {
      var a = this.order();
      var b = a.NumberGame({
        bec: obj.orderDescUsr,
        id: obj.lotteryType
      })
      var str = '';
      for (var x in b) {
        str += b[x].play + '：' + b[x].bets + '　';
      }
      return str
    },
    export2Excel() {
      if (this.tableData) {
        require.ensure([], () => {　　　　　　　　
          const { export_json_to_excel } = require('../intraware/Export2Excel.js');　　　　　　　　
          const tHeader = ['序号', '手机号', ' 订单号', '彩种', '订单详情', '订单备注', '期次', '注数', '倍数', '投注金额(¥)', '订单状态', '渠道号', '渠道名称', '中奖金额(¥)', ];　　　　　　　　
          const filterVal = ['index', 'account', 'orderId', 'lotteryName', 'orderDescUsr', 'orderbet', 'winPid', 'betCount', 'betDouble', 'orderMoney', 'type', 'chnKey', 'chnName', 'winMoney', ];　　　　　　　　
          const list = this.tableData;　　　　　　　　
          const data = this.formatJson(filterVal, this.tableData);
          var times = new Date().format('yyyyMMdd');　　　　　　　　
          export_json_to_excel(tHeader, data, '订单列表' + times);　　　　　　
        })
      } else {
        alert('暂无数据！')
      }　　　　
    },
    formatJson(filterVal, jsonData) {
      var i = 1;　
      var f = this;　　　　
      var c = jsonData.map(v => filterVal.map(function(j) {
        if (j == 'orderbet') {
          return f.orderAnalysis(v);
        } else if (j == 'index') {
          var a = i;
          i++;
          return a;
        } else {
          return v[j]
        }
      }))
      return c　　　　
    },
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总计';
          return;
        }
        if ((index >= 1 && index <= 6) || index >= 11) {
          sums[index] = '';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += '';
        } else {
          sums[index] = 'N/A';
        }
      });
      return sums;
    },
    handleResize() {
      var a = document.documentElement.clientHeight;
      if (a > 800) {
        this.maxheg = 500;
      } else {
        this.maxheg = a - 200;
      }
    },
    ticketcota(a) {
      const f = this.orderdeal();
      var temp = f.detailsZ(a);
      for (var x in temp) {
        temp[x] = temp[x].join(',');
      }
      return temp.join('; ')
    },
    ticketcotb(a, b) {
      const f = this.orderdeal();
      var temp = f.detailsS(a, this.types);
      if (b) return temp[0].play;
      else return temp[0].bets;
    },
    tstatus(a) {
      if (a == '10000' || a == '22' || a == '31' || a == '30') return '出票成功';
      if (a == '20' || a == '10') return '出票中...';
      return '出票失败';
    },
    pagesizesc(a) {
      this.pagesizes = a;
    },
    currentpagec(a) {
      this.currentpage = a;
    },
    getlist: async function(a) {
      if (a == 1) {
        this.message.pageNumber = 1;
        this.currentpage = 1;
      }
      this.vloadFlag=true;
      const result = await this.http.default.post('/open/service/bet/order/list', this.message)
      if (result.status == 200) {
        this.tableData = result.data.list;
        this.pagesizes = result.data.pageSize;
        this.countpage = result.data.totalCount;
        this.currentpage = result.data.pageNumber;
      } else {
        alert(result.msg)
        this.tableData = [];
        this.countpage = 1;
        this.currentpage = 1;
      }
            this.vloadFlag=false;
    },
    handleClick(val) {
      this.orderticket = [];
      this.types = val.lotteryType;
      if (val.lotteryType == 1 || val.lotteryType == 2) { this.ordertype = true; } else {
        this.ordertype = false;
      }
      this.ordercot(val)
      this.dialogTableVisible = true;
    },
    ordercot: async function(val) {
      const result = await this.http.default.post('/open/service/bet/order/detail', {
        orderId: val.orderId,
        token: this.$store.state.userInfo.token
      })
      if (result.status == 200) {
        this.orderticket = result.data.tickets;
      }
    }
  },
  mounted() {
    // window.addEventListener('resize', this.handleResize)
    // this.loading == false;
    // var a = document.documentElement.clientHeight;
    // if (a > 800) {
    //   this.maxheg = 500;
    // } else {
    //   this.maxheg = a - 300;
    // }
  },
  watch: {
    pagesizes: function(val, oldVal) {
      this.message.pageSize = val;
      this.getlist(1);
    },
    currentpage: function(val, oldVal) {
      this.message.pageNumber = val;
      this.getlist();
    },
  }
}

</script>
<style>
.order_table{
  width: auto;
}
.order_table .el-table .cell {
  padding: 0px 9px !important;
  max-height: 25px !important;
  line-height: 30px !important;
}


.order_table .tickcot .cell {
  max-height: none !important;
  line-height: 30px !important;
}

.ins-t {
  height: 32px;
  line-height: 32px;
  background-color: #CBEDF1;
  padding: 0 10px;
  font-size: 15px;
  overflow: auto;
}

.PagePilot {
  float: right;
  margin: 10px 0;
}


.order_table .el-table__row td:nth-child(1) {
  text-align: center;
}

.order_table .el-table__row td {
  padding: 0 !important;
  height: 30px !important;
  line-height: 30px !important;
}

.list-jzx {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>
