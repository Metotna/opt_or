<template>
  <div style="height: 100%;">
    <div class="oper-cot">
      <div class="oc-top">活动运营查询</div>
      <div class="oc-seach">
        <div class="block block_left"><span>活动名称 </span>
          <el-input v-model="queryobj.name" placeholder="请输入活动名称关键字" style="width:200px;" size="small"></el-input>
        </div>
        <!--         <div class="block block_left "><span>奖励类型 </span>
          <el-select v-model="queryobj.award" placeholder="请选择" style="width:100px;" size="small">
            <el-option v-for="(item,index) in optionb" :key="index" :value="item">
            </el-option>
          </el-select>
        </div> -->
        <!--         <div class="block block_left"><span>彩种 </span>
          <el-select v-model="queryobj.types" placeholder="请选择" style="width:120px;" size="small">
            <el-option v-for="(item,index) in optiona" :key="index" :value="item">
            </el-option>
          </el-select>
        </div> -->
        <div class="block block_left block_time"> <span>起止时间 </span>
          <el-date-picker v-model="queryobj.timeslot" type="daterange" align="right" range-separator="至" placeholder="选择日期范围" :picker-options="pickerOptions" size="small" style="width:250px;">
          </el-date-picker>
        </div>
        <div style="display:inline-block">
          <el-button type="warning" class="r-bloc" @click='dgShow' size="mini">活动新增</el-button>
          <el-button type="primary" class="r-bloc" icon="search" disabled size="mini">查询</el-button>
        </div>
      </div>
      <div class="oc-olist">
        <el-table :data="datalist" border style="font-size: 14px;">
          <el-table-column type=index label="序号" width="50" style="text-align: center">
          </el-table-column>
          <el-table-column prop="aname" label="活动名称" width="100" style='border:none'>
          </el-table-column>
          <el-table-column prop="atype" label="奖励类型" width="100">
          </el-table-column>
          <el-table-column label="上线时段" width="300">
            <el-button-group slot-scope="scope">
              <span>{{scope.row.rule_stime}}-{{scope.row.rule_etime}}</span>
            </el-button-group>
          </el-table-column>
          <el-table-column label="活动时间" width="300">
            <el-button-group slot-scope="scope">
              <span>{{scope.row.showtime_s}}-{{scope.row.showtime_e}}</span>
            </el-button-group>
          </el-table-column>
                    <el-table-column  label="操作" width="150">
            <template slot-scope="scope" style="text-align:left">
              <el-button type="text" class='dglistbtn' size="small" @click='checkscope(scope.row)' style='color:#50bfff'>编辑</el-button>
              <el-button type="text" class='dglistbtn' size="small" @click='statuscg(scope,2)' v-if='scope.row.status==1'>上架</el-button>
              <el-button type="text" class='dglistbtn' size="small" @click='statuscg(scope,1)' v-if='scope.row.status==2'>下架</el-button>
              <el-button type="text" class='dglistbtn' size="small" @click='distribute(scope.row)' v-if='dgyhqdis(scope.row)' style='color:#13ce66'>派发</el-button>
              <el-button type="text" class='dglistbtn' size="small" @click='statuscg(scope,3)' v-if='scope.row.aid>10' style='color:#ff4949'>删除</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="types" label="彩种" width="50">
          </el-table-column>
          <el-table-column prop="desc" label="活动内容" width="100" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="imgurl" label="活动图片" width="80">
          </el-table-column>
          <el-table-column prop="url" label="活动详情" width="80">
          </el-table-column>
          <el-table-column prop="getnum" label="领取人数" width="80">
          </el-table-column>
          <el-table-column prop="usenum" label="使用人数" width="80">
          </el-table-column>
          <el-table-column prop="Cash" label="返金" width="60">
          </el-table-column>

        </el-table>
        <el-dialog title="派发界面" :visible.sync="dialogTableVisibleb" :close-on-click-modal='false' :show-close='false' :lock-scroll='false'>
          <el-input class="input-new-tag" v-model="disvalue" ref="saveTagInput" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm" placeholder="请输入用户手机号,输入完毕后按‘回车键’继续..."></el-input>
          <p style="margin-top:5px;" v-colors="'red'" v-if='disvaluefalg'>输入的手机号格式不正确！！！</p>
          <el-tag :key="tag" v-for="tag in disarray" :closable="true" :close-transition="false" @close="handleClose(tag)" style="margin:5px 5px 5px 0">{{tag|order-phone}}</el-tag>
          <!-- |order-phone -->
          <div style="width:100%; margin-top:10px">
                   
              <!-- <input type="file"  name="" @change='textcot' ref='filed'> -->
              <!-- <label for='uptext' class='el-button dis_btn el-button--info'>导入</label> -->
            <el-button @click='edgdis' class='dis_btn' type='warning' :disabled='dgdisfalg'>派发</el-button>
            <el-button @click='edgclose' class='dis_btn' type="danger">关闭</el-button>
            <!--   <el-button @click='degs' class='dis_btn' type="danger">关闭degs111</el-button>
                   <el-button @click='degsa' class='dis_btn' type="danger">degsa</el-button> -->
          </div>
          <!-- <p style="overflow:hidden">{{txt}}</p> -->
        </el-dialog>
        <div class="PagePilot">
          <pagepilots :pcount='countpage' :psize='pagesizes' :pnums='currentpage' @size-change='pagesizesc' @num-change='currentpagec'></pagepilots>
        </div>
      </div>
      <el-dialog title="活动详情" :visible.sync="dialogTableVisiblea" :close-on-click-modal='false' :show-close='false' :lock-scroll='false' class='oper_edg' center append-to-body>
        <operdialog @Cancelbtn='dgcancel' @OKbtn='dgokbtn' :dgobj='dgdata' ref='dgcot' :dgSaves='dgbtnflag' @on-result-change='changebt'></operdialog>
        <input type="file" id='upyhq' ref='fileyhq' style="display:none" @change='toUp'>
        <div slot="footer" class="dialog-footer" style="display: block;overflow:hidden">
          <el-button type='success' @click='adds(0)' class='dgleft' style="margin-right:15px;width:80px;" size="small">添加</el-button>
          <div style="display:inline-block;float:left">
          <label for="upyhq" class="el-button dgleft el-button--info el-button--small el_daoru"><span>导入优惠券</span></label>
          <a href='http://imgopt.778668.cn/%E4%BC%98%E6%83%A0%E5%88%B8%E6%A8%A1%E6%9D%BF.xlsx' class="el-button is-plain el-button--small el_down"><span>模板</span></a></div>
          <!-- <el-button type="info" plain disabled>信息按钮</el-button> -->
          <!--           <el-button type='info' @click='adds(4)' class='dgleft' style="margin-right:15px;width:100px;" size="small">导入优惠券</el-button> -->
          <el-button :disabled='dgbtnflag' type='primary' @click='adds(1)' class='dgright' size="small">保存<i class="el-icon-upload el-icon--right"></i></el-button>
          <el-button type='danger' @click='adds(2)' class='dgright' style="margin-right:15px;" size="small">取消</el-button>
        </div>
      </el-dialog>
    </div>
        <input type="file" ref='resetFile' style="display:none">
  </div>
</template>
<script>
import pagepilots from '../components/pagePilots'
import operdialog from '../components/operdialog'
export default {
  data() {
    return {
      queryobj: {
        timeslot: '',
        name: '',
        types: '',
        award: ''
      },
      txt: '',
      fileList: [],
      dgbtnflag: true,
      dgdisfalg: true,
      dgdata: '',
      disarray: [],
      disvalue: '',
      disvaluefalg: false,
      loading: false,
      disid: '',
      countpage: 1, //总数
      pagesizes: 15, //每页数
      currentpage: 1, // 当前页数
      dialogTableVisiblea: false,
      dialogTableVisibleb: false,
      datalist: [],
      optiona: ['全部', '大乐透', '七星彩', '双色球', '竞彩足球', '竞彩篮球'],
      optionb: ['现金', '彩金', '金币', '优惠券'],
      pickerOptions: {
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
      }
    }
  },
  components: {
    pagepilots,
    operdialog
  },
  methods: {
    toUp() {
      var file = this.$refs.fileyhq.files[0];
      var fileReader = new FileReader();
      let _this = this;
      fileReader.onload = function(ev) {
        try {
          var XLSX = require('xlsx');
          var data = ev.target.result,
            workbook = XLSX.read(data, {
              type: 'binary'
            }), // 以二进制流方式读取得到整份excel表格对象
            persons = []; // 存储获取到的数据
        } catch (e) {
          this.$alert('导入的文件错误！', '提示', {
            confirmButtonText: '确定',
            callback: action => {}
          });
          this.$refs.fileyhq.files=this.$refs.resetFile.files;
          return;
        }
        // 表格的表格范围，可用于判断表头是否数量是否正确
        var fromTo = '';
        // 遍历每张表读取
        for (var sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            fromTo = workbook.Sheets[sheet]['!ref'];
            // console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]))
            persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            break; // 如果只取第一张表，就取消注释这行
          }
        }
        _this.upXlsxdis(persons);
        this.$refs.fileyhq.files=this.$refs.resetFile.files;
      }
      // 以二进制方式打开文件
      fileReader.readAsBinaryString(file);
    },
    upXlsxdis: async function(obj) {
      obj.splice(0, 1);
      if (obj.length > 0) {
        var Inn = {
          errors: [],
          success: []
        };
        for (var x in obj) {
          obj[x].token = this.$store.state.userInfo.token;
          const result = await this.http.default.post('/act/coupon/edit', obj[x])
          if (result.status == 200) {
            delete obj[x].token;
            obj[x].id = result.data.aid;
            Inn.success.push(obj[x]);
          } else {
            Inn.errors.push(obj[x].index)
          }
        }
        this.$refs.dgcot.dgtoLead(Inn)
      } else {
        this.$alert('导入的文件错误！', '提示', {
          confirmButtonText: '确定',
          callback: action => {}
        });
        return
      }
    },
    changebt(val) {
      this.dgbtnflag = val;
    },
    adds(a) {
      if (a == 0) this.$refs.dgcot.dgAddbtn();
      if (a == 1) this.$refs.dgcot.dgSavebtn();
      if (a == 2) this.$refs.dgcot.dgCancelbtn();

    },
    alertmsg(a) {
      this.$alert(a, '提示', {
        confirmButtonText: '确定',
        callback: action => {}
      });
    },
    pagesizesc(a) {
      this.pagesizes = a;
    },
    currentpagec(a) {
      this.currentpage = a;
    },
    dgyhqdis(val) {

      var temp = Date.parse(new Date());
      var tempa = Date.parse(new Date(val.showtime_s));
      var tempb = Date.parse(new Date(val.showtime_e));
      if (temp >= tempa && temp <= tempb && val.status == 2) {
        var a = true;
      } else {
        var a = false;
      }
      return a
    },
    statuscg: async function(a, b) {
      if (b == 3) {
        const result = await this.http.default.post('/act/change/status', {
          id: a.row.aid,
          token: this.$store.state.userInfo.token,
          status: b
        })
        if (result.status == 200) {
          this.alertmsg("已删除");
          this.datalist.splice(a.$index, 1);
        }
        return true;
      }

      var temp = Date.parse(new Date());
      var tempa = Date.parse(new Date(a.row.showtime_s));
      var tempb = Date.parse(new Date(a.row.showtime_e));

      if (temp >= tempa && temp <= tempb) {
        const result = await this.http.default.post('/act/change/status', {
          id: a.row.aid,
          token: this.$store.state.userInfo.token,
          status: b
        })
        if (result.status == 200) {
          this.alertmsg("操作成功！");
          this.dgpost();
          return true;
        }

      } else {
        this.alertmsg("活动时间选择有误！");
      }


    },
    edgdis: async function() {
      const tempjson = this.disarray.join(',');
      const result = await this.http.default.post('/act/optgift', {
        token: this.$store.state.userInfo.token,
        aid: this.disid,
        phones: tempjson
      })
      if (result.status == 200) {
        var list = result.data;
        var _temp = [];
        for (var x in list) {
          if (!list[x].status) {
            _temp.push(list[x].phone)
          }
        }
        if (_temp.length == 0) {
          this.dialogTableVisibleb = false;
          this.alertmsg("派发成功！");
        } else {
          var a = _temp.join(' ') + '已派发,其他的派发成功'
          this.dialogTableVisibleb = false;
          this.alertmsg(a);
        }
      } else {
        this.alertmsg(result.msg);
      }
    },
    handleClose(tag) {
      this.disarray.splice(this.disarray.indexOf(tag), 1);
    },
    handleInputConfirm() {
      let inputValue = this.disvalue;
      if (inputValue) {
        var a = /^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/;
        if (inputValue.length == 11 && inputValue.match(a) && inputValue) {
          this.disvaluefalg = false;
          this.disarray.push(inputValue);
          this.disvalue = '';

        } else {
          this.disvaluefalg = true;
        }
      }
      this.$refs.saveTagInput.$refs.input.focus();
    },
    edgclose() {
      this.dialogTableVisibleb = false;
    },
    distribute(val) {
      this.dialogTableVisibleb = true;
      this.disid = val.aid;
      this.disarray = [];
    },
    checkscope(val) {
      this.dgdata = val;
      this.dialogTableVisiblea = true;
    },
    dgokbtn() {
      this.dgcancel();
      this.dgpost();
    },
    dgcancel() {
      this.dialogTableVisiblea = false;
      this.dgdata = 1;
    },
    dgShow: function() {
      this.dgdata = '';
      this.dialogTableVisiblea = true;
    },
    dgpost: async function(a) {
      if (a == 1) { this.currentpage = 1; }
      const result = await this.http.default.post('/act/list', {
        token: this.$store.state.userInfo.token,
        pageNumber: this.currentpage,
        pageSize: this.pagesizes
      })
      if (result.status == 200) {
        this.datalist = result.data.list;
        this.countpage = result.data.totalCount;
      } else {
        this.datalist = [];
      }
    }
  },
  watch: {
    disarray: {
      handler: function(val) {
        if (val == '') {
          this.dgdisfalg = true;
        } else {
          this.dgdisfalg = false;
        }
      },
      deep: true
    },
    pagesizes: function(val, oldVal) {
      this.pageSize = val;
      this.dgpost(1);
    },
    currentpage: function(val, oldVal) {
      this.currentpage = val;
      this.dgpost();
    }
  },
  mounted() {
    this.dgpost();

  }
}

</script>
<style>
.el_daoru{
  margin-right: 15px; 
  width: 90px;
  height:33px !important;
  border-radius:none; 
  margin-right: 0px;
    border-top-left-radius:5px; 
  border-top-right-radius:0px; 
  border-bottom-left-radius:5px; 
  border-bottom-right-radius:0px; 
}
.el_down{
  margin-left: 0px !important;
  width: 60px;
  height:33px !important;
  border-top-left-radius:0px; 
  border-top-right-radius:5px; 
  border-bottom-left-radius:0px; 
  border-bottom-right-radius:5px; 
}
.block_time .el-date-editor .el-range-input {
  width: 35%;
}

.block_time .el-range-separator {
  width: 20px;
}

.oper_edg .el-dialog {
  width: 70%!important;
  margin-top: 5vh!important;
}

.oper_edg .el-dialog__header {
  background: #aac9cd;
  padding: 15px 15px 10px;
}

.oper_edg .el-dialog__body {
  padding: 10px 15px !important;
}

.oper_edg .el-dialog__footer {

  padding: 10px 15px 15px !important;
}


.dis_btn {
  margin-top: 10px;
}

.dgblocks {
  margin: 8px 0;
}

.oper-cot {
  border: 1px solid #ddd;
  width: 1564px;
  background-color: #fff;
}

.oc-top {
  background-color: #CBEDF1;
  padding: 0 10px;
  height: 30px;
  line-height: 30px;
}

.oc-olist {
  padding: 0 15px 5px 15px;
  overflow-x: hidden;
}

.PagePilot {
  float: right;
  margin: 10px 0;
  overflow: hidden;
}

.oc-seach {
  padding: 10px 15px 5px 15px;
  overflow: hidden;
}

.block {
  margin-bottom: 5px !important;
  float: left;
}

.block_left {
  margin-left: 10px!important;
}

.block span {
  font-size: 15px;
}

.r-bloc {
  float: right;
  margin: 0px 0 5px 10px !important;
}

/*.oc-olist .el-table {
  max-height: 450px!important;
}*/

.oc-olist .el-table .cell {
  padding: 0px 9px!important;
  max-height: 25px!important;
  line-height: 30px!important;
}

.oc-olist .el-table__row td:nth-child(1) {
  text-align: center;
}

.oc-olist .el-table__row td {
  padding: 0 !important;
  height: 30px!important;
  line-height: 30px!important;
}

.oc-olist .el-table th {
  background-color: #eef1f6!important;
  height: 30px !important;
}

.el-dialog--small {
  width: 68%!important;
}

.dglistbtn {
  margin-left: 5px !important;
  float: left;
}

</style>
