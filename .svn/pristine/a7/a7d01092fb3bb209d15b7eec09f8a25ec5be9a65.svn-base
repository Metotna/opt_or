<template>
  <div style="overflow:auto;max-height:450px">
    <div class='dgOf' style="padding:10px ">
      <div class="dgblock dgright" style="width:100%">
        <span style="width:15%">活动名称：</span>
        <el-input v-model="actobj.aname" placeholder="请输入活动名称关键字" style="width:85%;" size="small"></el-input>
      </div>
      <div class="dgblock">
        <span style="width:30%">活动类型：</span>
        <el-select v-model="dgType" placeholder="请选择" style="width:150px;" size="small">
          <el-option v-for="(item,index) in optiona" :key="index" :value="item"></el-option>
        </el-select>
      </div>
      <div class="dgblock">
        <span style="width:30%">用户活动：</span>
        <el-select v-model="actobj.visible" placeholder="请选择" style="width:150px;" size="small">
          <el-option v-for="(item,index) in statusoption" :key="index" :value="item.id" :label='item.name'></el-option>
        </el-select>
      </div>
      <div class="dgblock">
        <span style="width:30%">参与次数：</span>
        <el-input v-model="actobj.times" placeholder="请输入单参与次数" style="width:150px;" size="small"></el-input> 次/用户
      </div>
      <div class="dgblock">
        <span style="width:30%">派发额度：</span>
        <el-input v-model="rule_join_count" placeholder="请输入单参与次数" style="width:150px;" size="small">
        </el-input> 个/活动
      </div>
      <div class="dgblock dgright" style="width:100%">
        <span style="width:15%">上线时段：</span>
        <el-date-picker ref='tryss' v-model="dgTimesolta" type="datetimerange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions" style="width:400px;" size="small"></el-date-picker>
      </div>
      <div class="dgblock dgright" style="width:100%">
        <span style="width:15%">活动时间：</span>
        <el-date-picker v-model="dgTimesolta" disabled type="datetimerange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions" style="width:400px;" size="small"></el-date-picker>
      </div>
      <div class="dgblock" style="width:100%">
        <span style="width:15%">图片链接：</span>
        <el-input v-model="actobj.imgurl" placeholder="请输入活动图片URL" style="width:85%;" size="small"></el-input>
      </div>
      <div class="dgblock" style="width:100%">
        <span style="width:15%">详情链接：</span>
        <el-input v-model="actobj.url" placeholder="请输入活动内容详情URL" style="width:85%;" size="small"></el-input>
      </div>
      <div class="dgblock" style="width:100%">
        <div style="float:left;margin-right:4px;margin-top:10px;">活动内容：</div>
        <el-input v-model="actobj.desc" placeholder="请输入活动内容" style="width:85%;float:left" type="textarea" :autosize="{ minRows: 3, maxRows: 5}" size="small"></el-input>
      </div>
    </div>
    <div class="dgChild dgOf">
      <div class="dgYhq oc-olists" v-if='dgTypenums==4'>
        <el-table :data="tableData4" border style="width: 100%" class='dgtable' max-height='350'>
          <el-table-column fixed='left' type=index label='序号' width="60">
          </el-table-column>
          <el-table-column prop="cname" label="奖券名称" min-width="80">
          </el-table-column>
          <el-table-column prop="cointype" label="货币类型" width="80">
            <el-button-group slot-scope="scope">{{scope.row.cointype| opera-coin}} </el-button-group>
          </el-table-column>
          <el-table-column prop="type" label="优惠券类型" width="80">
            <el-button-group slot-scope="scope">{{scope.row.type| opera-type}} </el-button-group>
          </el-table-column>
          <el-table-column prop="mode" label="优惠方式" min-width="100">
          </el-table-column>
          <el-table-column prop="lottype" label="彩种" min-width="80" show-overflow-tooltip>
            <el-button-group slot-scope="scope">{{dglottype(scope.row.lottype)}}</el-button-group>
          </el-table-column>
          <el-table-column prop="timesolt" label="有效时限" min-width="200" show-overflow-tooltip>
            <el-button-group slot-scope="scope">{{scope.row.timesolt |yhq-timevalue(scope.row.timetype)}}</el-button-group>
          </el-table-column>
          <el-table-column fixed='right' label="领取数量" width="118">
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.number" :min="0" :max="1000" style='width:90px;' size="mini"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column fixed='right' label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData4)" type="text" size="mini">移除</el-button>
              <el-button @click.native.prevent="editRow(scope, tableData4)" type="text" size="mini">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="dgBz" v-if='dgTypenums==3'>
      </div>
    </div>
    <el-dialog title="优惠券" :visible.sync="dialogVisible" :close-on-click-modal='false' :show-close='false' :modal-append-to-body='false' class='dgchi_dg' append-to-body>
      <div class="dgChild dgOf">
        <div class="dgYhq" v-if='dgTypenums==4'>
          <div class="dgOf">
            <div class="dgblocks  dgchi_left"><span>奖券名称：</span>
              <el-input v-model="yhqobj.type_name" style="width:150px;" size="small"></el-input>
            </div>
            <div class="dgblocks dgchi_left"><span>货币类型：</span>
              <el-select v-model="yhqobj.cfg_coin" placeholder="请选择" style="width:150px;" size="small">
                <el-option v-for="(item,index) in cointypeoption" :key="index" :value="item.id" :label='item.name'>
                </el-option>
              </el-select>
            </div>
            <div class="dgblocks dgchi_left"><span>优惠券类：</span>
              <el-select v-model="dgYhqselect" placeholder="请选择" style="width:150px;" size="small">
                <el-option v-for="(item,index) in dgYhqoption" :key="index" :value="item">
                </el-option>
              </el-select>
            </div>
            <div class="dgblocks dgYhq_type dgchi_left" v-if='dgYhqselectfalg'><span>抵扣金额：</span>
              <el-input v-model="yhqobj.cfg_value" style="width:80px;" size="small"></el-input>
              <span> 元 </span>
            </div>
            <div class="dgblocks dgYhq_type dgchi_left dgchi_mj" v-if='!dgYhqselectfalg'><span>满减数额：</span> 满
              <el-input v-model="yhqobj.cfg_max" style="width:55px;" size="small"></el-input><span> 减</span>
              <el-input v-model="yhqobj.cfg_value" style="width:40px;" size="small"></el-input><span> 元</span>
            </div>
            <div class="dgblocks dgb_clear"><span>时间类型：</span>
              <el-select v-model="yhqobj.timeType" placeholder="请选择" style="width:250px;" size="small" @change='timetypechange'>
                <el-option v-for="(item,index) in dgtimeoption" :key="index" :value="item.id" :label='item.name'>
                </el-option>
              </el-select>
            </div>
            <div class="dgblocks" style="float:left;width:100%" v-if='yhqobj.timeType===1'>
              <span>有效时段：</span>
              <el-date-picker ref='dgTimeeffective' v-model="dgTimeeffective" type="datetimerange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions" style="width:80%;" size="small">
              </el-date-picker>
            </div>
            <div class="dgblocks" style="float:left;width:70%" v-if='yhqobj.timeType===2 || yhqobj.timeType===3'>
              <span>顺延天数：</span>
              <el-input v-model="yhqobj.timeValue" style="width:150px;" size="small"></el-input><span>（小时）</span>
            </div>
            <div class="dgblocks dgb_clear">
              <span style="line-height:36px;padding-right:4px">适用彩种：</span>
              <div class="dgYhq_choose">
                <el-checkbox :indeterminate="dgAlltypesfalg" v-model="dgAlltypes" @change="handleCheckAllChange" style="line-height: 36px;width:100%;" checked>全选</el-checkbox>
                <el-checkbox-group v-model="dgTypes" @change="handleCheckedCitiesChange">
                  <el-checkbox v-for="(item,index) in dgLottypes" :label="item.id" :key='index'>{{item.name}}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </div>
        </div>
        <div class="dgBz" v-if='dgTypenums==3'>
          <div class="dgOf">
            <div class="dgblocks"><span>彩种类型：</span>
              <el-select v-model="dgYhqselect" clearable placeholder="请选择" style="width:150px;">
                <el-option v-for="(item,index) in dgLottypes" :key="index" :value="item.name">
                </el-option>
              </el-select>
            </div>
            <div class="dgblocks" style="float:left;width:100%">
              <span>有效时段：</span>
              <el-date-picker ref='dgTimeeffective' v-model="dgTimeeffective" type="datetimerange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions" style="width:80%;">
              </el-date-picker>
            </div>
            <div class="dgblocks">
              <span>数额限量：</span>
              <el-input v-model="dgTypestatus" placeholder="请输入活动名称关键字" style="width:220px;"></el-input>
            </div>
            <div class="dgblocks">
              <span>场次单号：</span>
              <el-input v-model="dgTypestatus" placeholder="请输入活动名称关键字" style="width:220px;"></el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="dgBottom dgOf">
        <el-button type='primary' @click='dgchi_Savebtn' :disabled='savebtnfalg' class='dgright'>确定</el-button>
        <el-button type='danger' @click='dgchi_Cancelbtn' class='dgright' style="margin-right:15px;">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: ['dgobj', 'dgSaves'],
  data() {
    return {
      rule_join_count: '',
      savebtnfalg: true,
      dialogVisible: false,
      dgTimesolta: '',
      dgTimesoltb: '',
      dgTimeeffective: '',
      dgType: '优惠券',
      dgTypestatus: '是',
      dgTypenums: 4,
      endgsave: '',
      dgSave: this.dgSaves,
      dgTypes: [1, 4, 5, 6, 10],
      dgAlltypelist: '',
      dgAlltypes: '',
      dgAlltypesfalg: false,
      dgYhqselect: '满减券',
      dgYhqselectfalg: false,
      dgtimeoption: [{
        id: 1,
        name: '指定时段'
      }, {
        id: 2,
        name: '自领取顺延N小时结束'
      }, {
        id: 3,
        name: '自领取顺延N小时开始'
      }],
      dgLottypes: [{
        id: '-1',
        name: '无数据'
      }],
      optiona: ['每日签到', '彩票加奖', '彩票包中', '优惠券'],
      statusoption: [{ id: true, name: '是' }, { id: false, name: '否' }],
      cointypeoption: [{
        id: 'BET',
        name: '彩金'
      }, {
        id: 'CASH',
        name: '现金'
      }, {
        id: 'GCOIN',
        name: '金币'
      }],
      dgYhqoption: ['满减券', '抵扣券'],
      pickerOptions: {
        shortcuts: [{
          text: '一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [end, start]);
          }
        }, {
          text: '两周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 14);
            picker.$emit('pick', [end, start]);
          }
        }, {
          text: '一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [end, start]);
          }
        }, {
          text: '一年',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 365);
            picker.$emit('pick', [end, start]);
          }
        }]
      },
      tableData4: [],
      yhqobj: {
        id: '',
        cfg_coin: 'CASH',
        cfg_max: '',
        cfg_min: '',
        cfg_value: '',
        lottery: '',
        token: this.$store.state.userInfo.token,
        type: 3,
        type_name: '',
        timeType: 1,
        timeValue: ''
      },
      actobj: {
        aid: '',
        aname: '',
        atype: 'COUPON',
        desc: '',
        imgurl: '',
        showtime_s: '',
        showtime_e: '',
        times: 1,
        token: this.$store.state.userInfo.token,
        url: '',
        visible: false,
        rule_etime: '',
        rule_stime: '',
        rule_gift: '',
        rule_join_count: -1,
        rule_kv: ''
      },
      yhqlists: [],
      yhqnumber: "",
      tempyhqid: ''
    }
  },
  methods: {
    timetypechange(){
      this.dgTimeeffective='';
      this.yhqobj.timeValue='';
    },
    dglottype(a) {
      var temp = this.$store.state.lotterylist;
      if (typeof(temp) !== 'object') {
        temp = JSON.parse(temp)
      }
      var ta = [];
      var tb = a.split(',');
      if (tb.length < temp.length) {
        for (var m in temp) {
          for (var n in tb) {
            if (tb[n] == temp[m].id) {
              ta.push(temp[m].name)
            }
          }
        }
      } else {
        return '全部'
      }
      return ta.join(',')
    },
    dgdatapro() {
      for (var key in this.actobj) {
        if (this.dgobj != '') {
          this.actobj[key] = this.dgobj[key];
        } else {
          this.actobj[key] = '';
        }
      }
      this.actobj.rule_join_count >= 0 ? this.rule_join_count = this.actobj.rule_join_count : this.rule_join_count = '';
      if (!this.dgobj) {
        this.actobj.atype = 'COUPON';
        this.actobj.times = 1;
        this.actobj.rule_join_count = -1;
        this.actobj.visible = false;
        this.rule_join_count = '';
      } else {
        this.dgTimesolta = [this.dgobj.showtime_s, this.dgobj.showtime_e];
        this.dgyhqlistname(this.actobj.rule_gift);
      }
    },
    dgyhqlistname(val) {
      this.tableData4 = [];
      if (val) {
        var a = val.split(',');
        var b = [];
        var str = '';
        for (var x in a) {
          b[x] = a[x].split("|");
        }
        for (var i in b) {
          str = str + b[i][1];
          if (i < b.length - 1) {
            str = str + ',';
          }
        }
        this.dgyhqlist(str, b);
      }
    },
    // 优惠券列表
    dgyhqlist: async function(val, b) {
      const result = await this.http.default.post('/act/coupon/cfg/batch', {
        ids: val,
        token: this.$store.state.userInfo.token
      })
      if (result.status == 200) {
        this.yhqlists = result.data;
        var tempary = result.data;
        for (var x in tempary) {
          var temps = {
            id: tempary[x].id,
            cname: tempary[x].type_name,
            cointype: tempary[x].cfg_coin,
            type: tempary[x].type,
            number: b[x][2] * 1,
            timetype: tempary[x].timeType,
            timesolt: tempary[x].timeValue,
            lottype: tempary[x].lottery,
            cfgmax: tempary[x].cfg_max,
            cfgvalue: tempary[x].cfg_value,
            cfgmin: tempary[x].cfg_min,
          }
          if (temps.type == 2) {
            temps.mode = '抵扣' + tempary[x].cfg_value + '元';
          }
          if (temps.type == 3) {
            temps.mode = '满' + tempary[x].cfg_max + '减' + tempary[x].cfg_value;
          }
          this.tableData4.push(temps);
        }
      }
    },
    // YHQ 清空
    dgyhqclear() {
      this.yhqobj = {
        id: '',
        lottery: '',
        token: this.$store.state.userInfo.token,
        type: 3,
        type_name: '',
        timeType: 1,
        timeValue: '',
        cfg_coin: 'CASH',
        cfg_max: '',
        cfg_min: '',
        cfg_value: '',
      };
      this.rule_join_count = '';
      this.yhqnumber = '';
      this.tempyhqid = '';
    },
    //优惠券导入
    dgtoLead(obj){
      console.log(obj)
      for(var x in obj.success){
          var temp = {
            id: obj.success[x].id,
            cname: obj.success[x].type_name,
            cointype: obj.success[x].cfg_coin,
            type: (obj.success[x].type)*1,
            lottype: obj.success[x].lottery,
            timetype: obj.success[x].timeType,
            timesolt: obj.success[x].timeValue,
            cfgmax: obj.success[x].cfg_max,
            cfgvalue: obj.success[x].cfg_value,
            cfgmin: obj.success[x].cfg_min,
            number:obj.success[x].number
          }
        if(obj.success[x].type==2){
          temp.mode='抵扣' +obj.success[x].cfg_value + '元';
        }else{
           temp.mode='满' + obj.success[x].cfg_max + '减' + obj.success[x].cfg_value;
        }
        this.tableData4.push(temp);
      }
    if(obj.errors.length>0){
      a='序号为'+obj.errors.join(',')+'的优惠券导入失败！'
     this.$alert(a, '提示', {
        confirmButtonText: '确定',
        callback: action => {}}); 
    }

    },
    dgAddbtn() {
      this.dialogVisible = true;
      this.dgTimeeffective = '';
      this.dgyhqclear();
    },
    handleCheckAllChange(event) {
      this.dgTypes = event.target.checked ? this.dgAlltypelist : [];
      this.dgAlltypesfalg = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.dgAlltypes = checkedCount === this.dgLottypes.length;
      this.dgAlltypesfalg = checkedCount > 0 && checkedCount < this.dgLottypes.length;
    },
    dgCancelbtn() {
      this.$emit('Cancelbtn');
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    editRow(index, rows) {
      // const vals = this.yhqlists[index.$index];
      // console.log(index.row)
      var oldval = index.row;
      this.dialogVisible = true;
      this.dgTimeeffective = '';
      this.dgyhqclear();
      this.tempyhqid = oldval.id;
      this.yhqobj.type_name = oldval.cname;
      this.yhqobj.cfg_coin = oldval.cointype;
      this.yhqobj.cfg_max = oldval.cfgmax;
      this.yhqobj.cfg_min = oldval.cfgmin;
      this.yhqobj.cfg_value = oldval.cfgvalue;
      this.yhqobj.timeType = oldval.timetype;
      this.yhqobj.type = oldval.type;
      if (this.yhqobj.type == 3) this.dgYhqselect = this.dgYhqoption[0];
      if (this.yhqobj.type == 2) this.dgYhqselect = this.dgYhqoption[1];
      if (this.yhqobj.timeType == 1) {
        this.dgTimeeffective = this.edit_time(oldval.timesolt);
      } else {
        // console.log(this.yhqobj.timeValue)
        this.yhqobj.timeValue = oldval.timesolt;
         // console.log(this.yhqobj.timeValue)
      }
      this.yhqnumber = oldval.number;
      // console.log(this.yhqobj)
    },
    // yhq 时间解析 
    edit_time(val) {
      if (val) {
        var a = val.split('-');
        var b = [];
        for (var x in a) {
          b[x] = {
            y: a[x].substr(0, 4),
            m: (a[x].substr(4, 2)) * 1 - 1,
            d: a[x].substr(6, 2),
            hh: a[x].substr(8, 2),
            mm: a[x].substr(10, 2),
            ss: a[x].substr(12, 2),
          }
        }
        return [new Date(b[0].y, b[0].m, b[0].d, b[0].hh, b[0].mm, b[0].ss), new Date(b[1].y, b[1].m, b[1].d, b[1].hh, b[1].mm, b[1].ss)];
      }
    },
    // yhq 字符串
    dg_rule_gift() {
      if (this.dgTypenums == 4) {
        var str = '';
        for (var x in this.tableData4) {
          var temp = this.tableData4[x];
          var tempa = temp.timesolt;
          // tempa = tempa.replace(/-/g, '').replace(/:/g, '').replace(/ /g, '').replace('~', '-');
          if (temp.timetype == 1) {
            str = str + 'COUPON' + '|' + temp.id + '|' + temp.number + '|1|' + tempa;
          }
          if (temp.timetype == 2) {
            str = str + 'COUPON' + '|' + temp.id + '|' + temp.number + '|2|' + tempa;
          }
          if (temp.timetype == 3) {
            str = str + 'COUPON' + '|' + temp.id + '|' + temp.number + '|3|' + tempa;
          }
          if (x < this.tableData4.length - 1) {
            str = str + ','
          }
        }
        return str
      }
    },
    dgchi_Cancelbtn() {
      this.dialogVisible = false;
      this.dgyhqclear();
    },
    dgSavebtn: async function() {
      if (this.dgTimesolta) {
        this.actobj.rule_stime = new Date(this.dgTimesolta[0]).format("yyyy-MM-dd hh:mm:ss");
        this.actobj.rule_etime = new Date(this.dgTimesolta[1]).format("yyyy-MM-dd hh:mm:ss");
        this.actobj.showtime_s = new Date(this.dgTimesolta[0]).format("yyyy-MM-dd hh:mm:ss");
        this.actobj.showtime_e = new Date(this.dgTimesolta[1]).format("yyyy-MM-dd hh:mm:ss");
      }
      this.actobj.rule_gift = this.dg_rule_gift();
      this.actobj.token = this.$store.state.userInfo.token;
      if (this.rule_join_count) {
        this.rule_join_count < 0 ? this.actobj.rule_join_count = -1 : this.actobj.rule_join_count = this.rule_join_count;
      } else {
        this.actobj.rule_join_count = -1;
      }
      const result = await this.http.default.post('/act/edit', this.actobj)
      if (result.status == 200) {
        this.rule_join_count = '';
        this.$emit('OKbtn')
      } else {
        alert(result.msg)
      }
    },
    //  优惠券入库-A
    dgchi_Savebtn: async function() {
      this.yhqobj.cfg_min = this.yhqobj.cfg_max;
      const aid = await this.cfg_yhq(this.yhqobj);
      if (aid) {
        if (this.dgTypenums == 4) {
          var temp = {
            id: aid,
            cname: this.yhqobj.type_name,
            cointype: this.yhqobj.cfg_coin,
            type: this.yhqobj.type,
            lottype: this.yhqobj.lottery,
            timetype: this.yhqobj.timeType,
            timesolt: this.yhqobj.timeValue,
            cfgmax: this.yhqobj.cfg_max,
            cfgvalue: this.yhqobj.cfg_value,
            cfgmin: this.yhqobj.cfg_min,
          }
          if(this.yhqnumber){
            temp.number = this.yhqnumber;
          }else {
            temp.number = 1;
          }
          if (this.dgYhqselectfalg) {
            temp.mode = '抵扣' + this.yhqobj.cfg_value + '元';
          } else {
            temp.mode = '满' + this.yhqobj.cfg_max + '减' + this.yhqobj.cfg_value;
          }
          for (var i = 0; i < this.tableData4.length; i++) {
            if (this.tableData4[i].id == this.tempyhqid) {
              this.tableData4.splice(i, 1);
              break;
            }
          }
          this.tableData4.push(temp);
          this.dgchi_Cancelbtn();
        }
      }
    },
    //  优惠券入库-B
    cfg_yhq: async function(val) {
      val.token = this.$store.state.userInfo.token;
      const result = await this.http.default.post('/act/coupon/edit', val)
      if (result.status == 200) {
        return result.data.aid
      } else {
        alert(result.msg)
        return false
      }
    }
  },
  watch: {
    // 'yhqobj.timeType':function (val,oldval) {
    //   if(val!=oldval){
    //     this.dgTimeeffective='';
    //     this.yhqobj.timeValue='';
    //   }
    // },
    dgSave: function(val) {
      this.endgsave = val
    },
    endgsave: function(val) {
      this.$emit("on-result-change", val);
    },
    dgTimesolta: {
      handler: function(val) {
        if (this.dgTimesolta[0] == undefined || this.dgTimesolta[1] == undefined || val.aname == '' || val.times == '') {
          this.dgSave = true;
        } else {
          this.dgSave = false;
        }
      },
      deep: true
    },
    actobj: {
      handler: function(val) {
        if (this.dgTimesolta[0] == undefined || this.dgTimesolta[1] == undefined || val.aname == '' || val.times == '') {
          this.dgSave = true;
        } else {
          this.dgSave = false;
        }
      },
      deep: true
    },
    yhqobj: {
      handler: function(val) {
        this.yhqobj.lottery = this.dgTypes.join(',');
        if (val.lottery != '' && val.type_name != '' && val.timeValue != '' && val.cfg_value != '') {
          if (!this.dgYhqselectfalg && val.cfg_max != '') {
            this.savebtnfalg = false;
          } else if (this.dgYhqselectfalg) {
            this.savebtnfalg = false;
          }
        } else {
          this.savebtnfalg = true;
        }
      },
      deep: true
    },
    dgYhqselect: function(val) {
      if (val == '满减券') {
        this.dgYhqselectfalg = false;
        this.yhqobj.type = 3;
        this.yhqobj.timeValue = '';
      }
      if (val == '抵扣券') {
        this.dgYhqselectfalg = true;
        this.yhqobj.type = 2;
      }
      if (val == '加奖券') {
        // this.dgYhqselectfalg = true;
        this.yhqobj.type = 1;
      }
    },
    dgobj: function(val, oldval) {
      if (val != oldval) {
        this.dgdatapro();
      }
    },
    dgType: function(val) {
      switch (val) {
        case '每日签到':
          this.dgTypenums = 1;
          this.actobj.type = '';
          break;
        case '彩票加奖':
          this.dgTypenums = 2;
          this.actobj.type = '';
          break;
        case '彩票包中':
          this.dgTypenums = 3;
          this.actobj.type = '';
          break;
        case '优惠券':
          this.dgTypenums = 4;
          this.actobj.type = 'COUPON';
          break;
      }
    },
    dgTimeeffective: function(val) {
      if (val != '') {
        this.yhqobj.timeValue = new Date(val[0]).format("yyyyMMddhhmmss") + '-' + new Date(val[1]).format("yyyyMMddhhmmss");
      }
    }
  },
  mounted() {
    var a = [];
    if (this.$store.state.lotterylist) {
      for (var x in this.$store.state.lotterylist) {
        a[x] = this.$store.state.lotterylist[x].id
      }
      if (typeof(this.$store.state.lotterylist) === 'object') {
        this.dgLottypes = this.$store.state.lotterylist;
      } else {
        this.dgLottypes = JSON.parse(this.$store.state.lotterylist);
      }

    }
    this.rule_join_count = '';
    this.dgdatapro();
  }
}

</script>
<style spcoed>
.dgchi_mj .el-input__inner {
  padding: 0 3px!important;
  text-align: center;
}

.dgchi_dg .el-dialog__header {
  background: #f0f0f0;
}

.dgchi_left {
  width: 50%;
  float: left;
}

.el-dialog__wrapper {}

.dgright {
  float: right !important;
}

.dgleft {
  float: left !important;
}

.dgOf {
  overflow: hidden;
}

.dgBottom {
  margin: 5px 0;
}

.dgblock {
  width: 50%;
  float: left;
  margin: 5px 0;
}

.dgb_clear {
  clear: both;
}

.dgblocks {
  margin: 0 0 10px 0;
}

.dgChild {
  padding: 10px 6px;
}

.dgYhq_chi {
  display: block;
  width: 100%;
}

.dgYhq_choose {
  display: inline-block;
  width: 85%;
}

.dgYhq_choose label {
  margin: 2px 10px 2px 0 !important;
}

.dgYhq_type input {
  text-align: center;
}

.el-table .cell {
  line-height: 30px !important;
}

.dgtable .cell {
  padding: 1px 9px !important;
  max-height: 32px !important;
}

.dgtable .el-table {
  max-height: 1000px!important;
}

.dgbtn {
  padding: 0px 5px !important;
}

.dgchi_dg .el-dialog {
  top: 30px !important;
  margin-bottom: 0 !important;
}
.oc-olists .el-table .cell {
  padding: 0px 9px!important;
  max-height: 30px!important;
  line-height: 30px!important;
}

.oc-olists .el-table__row td:nth-child(1) {
  text-align: center;
}

.oc-olists .el-table__row td {
  padding: 0 !important;
  height: 30px!important;
  line-height: 30px!important;
}

.oc-olists .el-table th {
  background-color: #eef1f6!important;
  height: 30px !important;
}


</style>
