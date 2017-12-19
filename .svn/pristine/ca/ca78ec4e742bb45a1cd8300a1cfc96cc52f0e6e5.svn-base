<template>
  <div>
    <div class="dgr_cot" id='dgr_scroll'>
      <div class="dgr_inqury" name='1F'>
        <div class='dgr_in_part'>
          <span class='dgr_span'>粒度:</span>
          <el-select v-model="requestObj.timeLevel" size='small' style='width:80px'>
            <el-option v-for="item in dayValue" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </div>
        <div class='dgr_in_part' v-if="requestObj.timeLevel=='YEAR'">
          <span class='dgr_span'>起始:</span>
          <el-date-picker v-model="timevalue[0]" type="year" placeholder="选择年" size='small' style='width:115px' :picker-options="pickerOptions21">
          </el-date-picker>
          <span class='dgr_span' style="margin-left:15px">终止:</span>
          <el-date-picker v-model="timevalue[1]" type="year" placeholder="选择年" size='small' style='width:115px' :picker-options="pickerOptions21">
          </el-date-picker>
        </div>
        <div class='dgr_in_part' v-if="requestObj.timeLevel=='MONTH'">
          <span class='dgr_span'>起始:</span>
          <el-date-picker v-model="timevalue[0]" type="month" placeholder="选择月" size='small' style='width:115px' :picker-options="pickerOptions21">
          </el-date-picker>
          <span class='dgr_span' style="margin-left:15px">终止:</span>
          <el-date-picker v-model="timevalue[1]" type="month" placeholder="选择月" size='small' style='width:115px' :picker-options="pickerOptions22">
          </el-date-picker>
        </div>
        <div class='dgr_in_part' v-if="requestObj.timeLevel=='DAY'">
          <span class='dgr_span'>起止时间:</span>
          <el-date-picker v-model="timevalue" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions1" size='small' style='width:300px'>
          </el-date-picker>
        </div>
        <div class='dgr_in_part'>
          <span class='dgr_span'>渠道:</span>
          <el-select v-model="requestObj.channelKey" size='small' style='width:120px'>
            <el-option v-for="item in channelKeyAry" :key="item.chnKey" :label="item.chnName" :value="item.chnKey">
            </el-option>
          </el-select>
        </div>
        <div class='dgr_in_part'>
          <el-button type="primary" size="small" @click='toGetlist'>查询</el-button>
          <el-button type="info" size="small" @click='toExportExcel(1)'>导出</el-button>
        </div>
      </div>
      <div class="dgr_list" ref='dgr_table_a' id='dgr_list'>
        <el-table :data="tableData" stripe style="width: 100%" border  :highlight-current-row='true' header-row-class-name='dgr_list_bt' >
          <el-table-column type="index" label="序号" width="50" align='center'></el-table-column>
          <el-table-column prop="date"  label="时间" width="100" align='center'></el-table-column>
          <el-table-column prop="chnShow" label="渠道" width="100" align='center'>
            <el-button-group slot-scope="scope">
              <span class='dgr_spana' :class='{ href_Click:hrefClick}' @click='toChild(scope.row)' v-if='hrefClick'>{{scope.row.chnShow}}</span>
              <span class='dgr_spanb' v-if='!hrefClick'>{{scope.row.chnShow}}</span>
            </el-button-group>
          </el-table-column>
          <el-table-column prop="accessCount" label="访问用户" width="50" align='center' sortable></el-table-column>
          <el-table-column prop="accessCountApp" label="APP访问" width="50" align='center' sortable></el-table-column>
          <el-table-column prop="appDownloadCount" label="APP下载 " width="50" align='center' sortable></el-table-column>
          <el-table-column prop="activeCount" label="活跃用户" width="50" align='center'></el-table-column>
          <el-table-column prop="activeCountApp" label="APP活跃" width="50" align='center'></el-table-column>
          <el-table-column prop="activeCountAppFirst" label="APP首登" width="50" align='center'></el-table-column>
          <el-table-column prop="regCount" label="注册用户" width="50" align='center'></el-table-column>
          <el-table-column prop="regCountApp" label="APP注册" width="50" align='center'></el-table-column>
          <el-table-column prop="betCount" label="投注用户" width="50" align='center'></el-table-column>
          <el-table-column prop="betCountApp" label="APP投注" width="50" align='center'></el-table-column>
          <el-table-column prop="twiceBetCount" label="二次投注" width="50" align='center'></el-table-column>
          <el-table-column prop="betMoney" label="投注金额(元)" width="70" align='right'></el-table-column>
          <el-table-column prop="awardMoney" label="中奖金额(元)" width="70" align='right'></el-table-column>
          <el-table-column prop="arpu" label="ARPU" width="90" align='right'></el-table-column>
          <el-table-column prop="arppu" label="ARPPU" width="90" align='right'></el-table-column>
          <el-table-column prop="firstAccessCount" label="首次访问" width="50" align='center'></el-table-column>
          <el-table-column prop="firstChargeCount" label="首充用户" width="50" align='center'></el-table-column>
          <el-table-column prop="firstChargeMoney" label="首充金额(元)" width="70" align='right'></el-table-column>
          <el-table-column prop="regCount" label="注册用户" width="50" align='center'></el-table-column>
          <el-table-column label="注册率" width="70" align='right'>
            <el-button-group slot-scope="scope">{{scope.row.regRatio|valPercent}}</el-button-group>
          </el-table-column>
          <el-table-column label="付费率" width="70" align='right'>
            <el-button-group slot-scope="scope">{{scope.row.chargeRatio|valPercent}}</el-button-group>
          </el-table-column>
          <el-table-column prop="allRegCount" label="所有注册" width="85" align='right'></el-table-column>
        </el-table>
      </div>
      <div class=" ">
        <pagepilots :pcount='countpage' :psize='requestObj.pageSize' :pnums='requestObj.pageNumber' @size-change='pagesizesc' @num-change='currentpagec'></pagepilots>
      </div>
      <div class="dgr_el_dialog">
        <el-dialog :visible.sync="dgrdialogVisible" width="70%" :show-close='false' top='5vh'>
          <div slot="title" class="dialog-title">
            <span style="margin-right:20px;">{{listChildtitle}} 用户统计-分渠道</span>
            <el-button type="info" size="small" @click='toExportExcel(2)'>导出</el-button>
            <div class='dgr_in_part' style="float:right">
              <el-button type="warning" size="small" @click='dgrdialogVisible=false'>关闭</el-button>
            </div>
          </div>
          <div class="dgrDiaCot" ref='dgr_table_b'>
            <el-table :data="tableDataChild" stripe style="width: 100%" border :max-height='tableChildMax' :highlight-current-row='true' header-row-class-name='dgr_list_bt' show-summary :summary-method="toGetSummariesChild">
              <el-table-column type="index" fixed='left' label="序号" width="50" align='center'></el-table-column>
              <el-table-column prop="chnName" label="渠道名称" fixed='left'width="100" align='center'>
                <el-button-group slot-scope="scope">
                  <span class='dgr_spanb'>{{scope.row.chnName}}</span>
                </el-button-group>
              </el-table-column>
              <el-table-column prop="chnKey" label="渠道号" width="95" align='center'></el-table-column>
              <el-table-column prop="accessCount" label="访问用户" width="50" align='center'></el-table-column>
              <el-table-column prop='percent' label="访问占比" width="70" align='right'></el-table-column>
              <el-table-column prop="accessCountApp" label="APP访问" width="50" align='center'></el-table-column>
              <el-table-column prop="appDownloadCount" label="APP下载 " width="50" align='center'></el-table-column>
              <el-table-column prop="activeCount" label="活跃用户" width="50" align='center'></el-table-column>
              <el-table-column prop="activeCountApp" label="APP活跃" width="50" align='center'></el-table-column>
              <el-table-column prop="activeCountAppFirst" label="APP首登" width="50" align='center'></el-table-column>
              <el-table-column prop="regCount" label="注册用户" width="50" align='center'></el-table-column>
              <el-table-column prop="regCountApp" label="APP注册" width="50" align='center'></el-table-column>
              <el-table-column prop="betCount" label="投注用户" width="50" align='center'></el-table-column>
              <el-table-column prop="betCountApp" label="APP投注" width="50" align='center'></el-table-column>
              <el-table-column prop="twiceBetCount" label="二次投注" width="50" align='center'></el-table-column>
              <el-table-column prop="betMoney" label="投注金额(元)" width="70" align='right'></el-table-column>
              <el-table-column prop="awardMoney" label="中奖金额(元)" width="70" align='right'></el-table-column>
              <el-table-column prop="arpu" label="ARPU" width="90" align='right'></el-table-column>
              <el-table-column prop="arppu" label="ARPPU" width="90" align='right'></el-table-column>
              <el-table-column prop="firstAccessCount" label="首次访问" width="50" align='center'></el-table-column>
              <el-table-column prop="firstChargeCount" label="首充用户" width="50" align='center'></el-table-column>
              <el-table-column prop="firstChargeMoney" label="首充金额(元)" width="70" align='right'></el-table-column>
              <el-table-column prop="regCount" label="注册用户" width="50" align='center'></el-table-column>
              <el-table-column label="注册率" width="70" align='right'>
                <el-button-group slot-scope="scope">{{scope.row.regRatio|valPercent}}</el-button-group>
              </el-table-column>
              <el-table-column label="付费率" width="70" align='right'>
                <el-button-group slot-scope="scope">{{scope.row.chargeRatio|valPercent}}</el-button-group>
              </el-table-column>
              <el-table-column prop="allRegCount" label="所有注册" min-width="85" align='right'>
              </el-table-column>
            </el-table>
            <div class="dgrDiaCot_page dgr_end">
              <pagepilots :pcount='countpageChild' :psize='requestChildObj.pageSize' :pnums='requestChildObj.pageNumber' @size-change='pagesizesChild' @num-change='currentpageChild'></pagepilots>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import pagepilots from '../components/pagePilots'
export default {
  data() {
    let _this = this;
    return {
      requestObj: {
        timeLevel: 'DAY',
        startDate: '',
        channelKey: '0',
        endDate: '',
        pageNumber: 1,
        pageSize: 100,
        token: this.$store.state.userInfo.token
      },
      requestChildObj: {
        timelevel: 'DAY',
        time: '',
        token: this.$store.state.userInfo.token,
        pageNumber: 1,
        pageSize: 100,
        totalAccessCount: ''
      },
      countpage: 1,
      countpageChild: 1,
      dayValue: [{ id: 'DAY', name: '日' }, { id: 'MONTH', name: '月' }, { id: 'YEAR', name: '年' }],
      timevalue: [Date.now() - 8.64e7 * 7, Date.now()],
      channelKeyAry: [{ chnKey: 0, chnName: '全部' }],
      tableData: [],
      tableDataChild: [],
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now() || time.getTime() < new Date(2017, 6, 1, 0, 0, 0).getTime();;
        },
        shortcuts: [{
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
      },
      pickerOptions21: {
        disabledDate(time) {
          return time.getTime() > Date.now() || time.getTime() < new Date(2017, 6, 1, 0, 0, 0).getTime();;
        }
      },
      pickerOptions22: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e7 ||
            time.getTime() < new Date(_this.timevalue[0]).getTime();
        }
      },
      hrefClick: false,
      dgrdialogVisible: false,
      listChildtitle: '',
      tableMax: '500',
      tableChildMax: '500',
      docClientH: document.documentElement.clientHeight,
      changeSizeflag: true
    }
  },
  methods: {
    toAlert(a) {
      this.$alert('a', '提示', {
        confirmButtonText: '确定',
        callback: action => {}
      });
    },
    toGetlistQDH: async function() {
      const result = await this.http.default.post('/open/service/channel/list/myandchildren', {
        token: this.$store.state.userInfo.token
      })
      if (result.status == 200) {
        this.channelKeyAry = [{ chnKey: '0', chnName: '全部' }];
        this.channelKeyAry = this.channelKeyAry.concat(result.data);
        this.toGetlist();
      } else {
        this.toAlert(result.msg)
      }
    },
    toGetlist: async function() {
      if (!this.timevalue[0] || !this.timevalue[1]) return false;
      if (this.requestObj.timeLevel == 'DAY') var layout = 'yyyy-MM-dd';
      if (this.requestObj.timeLevel == 'MONTH') var layout = 'yyyy-MM';
      if (this.requestObj.timeLevel == 'YEAR') var layout = 'yyyy-MM';
      this.requestObj.startDate = new Date(this.timevalue[0]).format(layout);
      this.requestObj.endDate = new Date(this.timevalue[1]).format(layout);
      const result = await this.http.default.post('/open/service/user/statis/list', this.requestObj)
      if (result.status == 200) {
        this.tableData = result.data.list;
        this.countpage = result.data.totalCount * 1;
        this.requestObj.channelKey == '0' ? this.hrefClick = true : this.hrefClick = false;   
        document.getElementsByTagName('content')[0].scrollTop=0
        // if (this.changeSizeflag) {
        //   this.changeSizeflag = false;
        //   var a = this.$refs.dgr_table_a;
        //   setTimeout(function() {
        //     var b = a.querySelectorAll('.el-table__fixed-body-wrapper')[0];
        //     b.style.maxHeight = parseInt(b.style.maxHeight) - 53 + 'px';
        //   }, 500)
        // }
      } else {
        this.toAlert(result.msg)
      }
    },
    toChild: async function(a) {
      if (this.hrefClick) {
        this.dgrdialogVisible = true;
        this.listChildtitle = a.date;
        this.requestChildObj.timelevel = this.requestObj.timeLevel;
        this.requestChildObj.time = this.listChildtitle;
        this.requestChildObj.totalAccessCount = a.accessCount;
        this.toChildPost();
      }
    },
    toChildPost: async function() {
      const result = await this.http.default.post('/open/service/user/statis/channel', this.requestChildObj)
      if (result.status == 200) {
        this.tableDataChild = result.data.list;
        this.countpageChild = result.data.totalCount * 1;
        // if (this.changeSizeflag) {
        //   this.changeSizeflag = false;
        //   var a = this.$refs.dgr_table_b;
        //   setTimeout(function() {
        //     var b = a.querySelectorAll('.el-table__fixed-body-wrapper')[0];
        //     b.style.maxHeight = parseInt(b.style.maxHeight) - 53 + 'px';
        //   }, 500)
        // }
      } else {
        this.toAlert(result.msg)
      }
    },
    toExportExcel(a) {
      if (this.tableData && a == 1) {
        require.ensure([], () => {　　　
          const { export_json_to_excel } = require('../intraware/Export2Excel.js');　　　　　　　
          const tHeader = ["序号", "时间", "渠道", "访问用户", "app访问人数", "app活跃人数", "app首登人数", "app下载次数", "app注册人数", "活跃用户", "注册用户", "投注用户", "二次投注用户", "投注金额(元)", "中奖金额(元)", "ARPU", "ARPPU", "首次访问用户", "首冲用户", "首冲金额(元)", "充值用户", "充值金额(元)", "注册率", "付费率", "所有注册用户", "次留", "二日留", "三日留", "四日留", "五日留", "六日留", "周留", "半月留", "月留", "app投注人数"];　　　　　　　　
          const filterVal = ['index', "date", "chnShow", "accessCount", "accessCountApp", "activeCountApp", "activeCountAppFirst", "appDownloadCount", "regCountApp", "activeCount", "regCount", "betCount", "twiceBetCount", "betMoney", "awardMoney", "arpu", "arppu", "firstAccessCount", "firstChargeCount", "firstChargeMoney", "chargeCount", "chargeMoney", "regRatio", "chargeRatio", "allRegCount", "regCount", "day2Retention", "day3Retention", "day4Retention", "day5Retention", "day6Retention", "day7Retention", "day15Retention", "day30Retention", 'betCountApp'];　　　　　　　　
          const data = this.formatJson(filterVal, this.tableData);
          export_json_to_excel(tHeader, data, this.requestObj.startDate + '-' + this.requestObj.endDate + ' 用户统计');
          return true;
        })
        0
      } else if (this.tableDataChild && a == 2) {
        require.ensure([], () => {　　　　　　　　
          const { export_json_to_excel } = require('../intraware/Export2Excel.js');　　　
          const tHeader = ["序号", "时间", "渠道key", "渠道名称", "访问用户", "app访问人数", "app活跃人数", "app首登人数", "app下载次数", "app注册人数", "活跃用户", "注册用户", "投注用户", "二次投注用户", "投注金额(元)", "中奖金额(元)", "ARPU", "ARPPU", "首次访问用户", "首冲用户", "首冲金额(元)", "充值用户", "充值金额(元)", "注册率", "付费率", "所有注册用户", "次留", "二日留", "三日留", "四日留", "五日留", "六日留", "周留", "半月留", "月留", "app投注人数"];　　　　　　　　
          const filterVal = ['index', "date", "chnKey", "chnName", "accessCount", "percent", "accessCountApp", "activeCountApp", "activeCountAppFirst", "appDownloadCount", "regCountApp", "activeCount", "regCount", "betCount", "twiceBetCount", "betMoney", "awardMoney", "arpu", "arppu", "firstAccessCount", "firstChargeCount", "firstChargeMoney", "chargeCount", "chargeMoney", "regRatio", "chargeRatio", "allRegCount", "regCount", "day2Retention", "day3Retention", "day4Retention", "day5Retention", "day6Retention", "day7Retention", "day15Retention", "day30Retention", 'betCountApp'];　　　　　　　　
          const data = this.formatJson(filterVal, this.tableDataChild);
          export_json_to_excel(tHeader, data, this.requestChildObj.time + ' 用户统计-分渠道');
          return true;
        })
      } else {
        this.toAlert('暂无数据！');
        return false;　
      }　
    },
    formatJson(filterVal, jsonData) {
      var i = 1;　
      var f = this;　　　　
      var c = jsonData.map(v => filterVal.map(function(j) {
        if (j == 'chargeRatio' || j == 'regRatio' || j == 'day2Retention' || j == 'day3Retention' || j == 'day4Retention' || j == 'day5Retention' || j == 'day6Retention' || j == 'day7Retention' || j == 'day15Retention' || j == 'day30Retention' || j == 'regRatio') {
          return (Math.round(v[j] * 10000) / 100).toFixed(2) + '%';
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
    toGetSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 1) {
          sums[index] = '总计';
          return;
        }
        if (index == 2 || index == 16 || index == 17 || index == 22 || index == 23) {
          sums[index] = '';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              var temp =prev + curr;
                          if(temp==Math.round(temp)){
                return temp;
              }else{
                return temp.toFixed(2);
              }

              // return prev + curr;
            } else {
              if(prev==Math.round(prev)){
                return prev;
              }else{
                return prev.toFixed(2);
              }
              
            }
          }, 0);
          sums[index] += '';
        } else {
          sums[index] = '';
        }
      });
      return sums;
    },
    toGetSummariesChild(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 1) {
          sums[index] = '总计';
          return;
        }
        if (index == 2 || index == 4 || index == 17 || index == 18 || index == 23 || index == 24) {
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
          sums[index] = '';
        }
      });
      return sums;
    },
    pagesizesChild(a) {
      this.requestChildObj.pageSize = a;
    },
    currentpageChild(a) {
      this.requestChildObj.pageNumber = a;
    },
    pagesizesc(a) {
      this.requestObj.pageSize = a;
    },
    currentpagec(a) {
      this.requestObj.pageNumber = a;
    },
    toOnresize(a) {
      this.changeSizeflag = true;
      if (a > 500) {
        this.tableMax = a - 200;
        this.tableChildMax = a * .95 - 160;
      } else {
        this.tableMax = 300;
        this.tableChildMax = 315;
      }
    }
  },
  components: {
    pagepilots
  },
  watch: {
    docClientH: function(val, oldVal) {
      if (val > 500) {
        this.tableMax = val - 200;
        this.tableChildMax = val * .95 - 160;
      } else {
        this.tableMax = 300;
        this.tableChildMax = 315;
      }

    },
    'requestObj.pageSize': function(val, oldVal) {
      if (val != oldVal) {
        this.requestObj.pageSize = val;
        this.toGetlist();
      }
    },
    'requestObj.currentpage': function(val, oldVal) {
      if (val != oldVal) {
        this.requestObj.pageSize = val;
        this.toGetlist();
      }
    },
    'requestChildObj.pageSize': function(val, oldVal) {
      if (val != oldVal) {
        this.requestChildObj.pageSize = val;
        this.toChildPost();
      }
    },
    'requestChildObj.currentpage': function(val, oldVal) {
      if (val != oldVal) {
        this.requestChildObj.pageSize = val;
        this.toChildPost();
      }
    }
  },
  mounted() {
    this.toGetlistQDH();
    this.toOnresize(document.documentElement.clientHeight)
    const that = this;
    window.onresize = () => {
      return (() => {
        that.docClientH = document.documentElement.clientHeight
      })()
    }
  }
}

</script>
<style>
.dgr_cot {
  width: 1592px;
  /*border: 1px solid #ddd;*/
}

.dgr_inqury {
  padding: 2px 20px 2px 5px;
  /*border-bottom: 1px solid #ddd;*/
  overflow: hidden;
}

.dgr_in_part {
  float: left;
  margin-right: 15px;
  margin-bottom: 10px;
}

.el-popper .popper__arrow {
  display: none !important;
}

.dgr_in_part .el-range-input {
  width: 35% !important;
  text-align: center;
}

.dgr_in_part .el-range-separator {
  width: 30px;
}

.dgr_span {
  font-size: 14px;
}

.dgr_list {
  padding: 0px 20px 10px 5px;
}

.dgr_end {
  /*background-color: #fff;*/
  float: right;
  color: #333;
  margin-right: 20px;
  padding:  10px 0px 10px 20px;
  overflow: hidden;
}

.dgr_list .el-table td,
.dgrDiaCot .el-table td {
  padding: 2px 0 !important;
}

.dgr_list .el-table .cell,
.dgrDiaCot .el-table .cell {
  padding: 0 8px !important;
}

.dgr_list_bt {
  background-color: #f6d79b !important;
  font-weight: bold;
  color: #282828!important;
}

.dgr_list .is-leaf,
.dgrDiaCot .is-leaf {
  padding: 3px 1px !important;
  /*text-align: center!important;*/
  height: 52px !important;
}

.dgr_list_right {
  text-align: right!important;
}

.dgr_list .el-table__fixed,
.dgrDiaCot .el-table__fixed {
  bottom: -1px !important;
}

.dgr_list .el-table__fixed-body-wrapper {
  padding-bottom: 53px !important;
}

.dgr_list .el-table__fixed,
.dgr_list .el-table__fixed-right {
  box-shadow: 12px 1px 10px rgba(0, 0, 0, .12) !important;
  -webkit-box-shadow: 12px 1px 10px rgba(0, 0, 0, .12) !important;
}


.dgrDiaCot .el-table__fixed,
.dgrDiaCot .el-table__fixed-right {
  box-shadow: 12px 1px 10px rgba(0, 0, 0, .12) !important;
  -webkit-box-shadow: 12px 1px 10px rgba(0, 0, 0, .12) !important;
}

.href_Click {
  text-decoration: underline;
}

.dgr_spana {
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
}

.dgr_spanb {
  overflow: hidden;
  white-space: nowrap;
  text-align: left !important;
}

.dgrDiaCot {
  padding: 0 10px;
  overflow: hidden;
}

.dgr_el_dialog .el-dialog__body {
  padding: 0px 20px !important;
}

</style>
