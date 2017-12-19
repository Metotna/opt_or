<template>
  <div class="lists">
    <div class="listname">
      <div style="display:none">
        <input type="file" ref="files" id="file" @change="fileshandle" style="display:none">
        <input type="file" ref='resetFile' style="display:none">
      </div>
      <div class="imglists">
        <el-carousel :interval="2000" arrow="always" autoplay>
          <el-carousel-item v-for="(item,index) in newtable" :key="index" v-if="item.status==1">
            <img :src="item.picUrl" width="100%">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="list_quiry">
      <div class="backups">
        <span class='backspan'>Banner 列表</span>
        <!--         <el-button type="info" size="small" style="float:right;margin:1px 5px;" icon="caret-bottom" @click='quirylist=!quirylist' v-if='!quirylist'>展开</el-button>
        <el-button type="info" size="small" style="float:right;margin:1px 5px;" icon="caret-top" @click='quirylist=!quirylist' v-if='quirylist'>收起</el-button> -->
        <label for="file" style="float:right;margin:1px 5px;padding: 8px 9px;font-size: 13px; border-radius: 4px;background-color:#ff4949;color:#fff;cursor:pointer" title="1.图片必须小于200kB。2.图片比例不等于750:280 将自动居中裁剪。">
          新增<i class="el-icon-upload el-icon--right"></i>
        </label>
        <!-- <el-button type="primary" icon="search" disabled size="small" style="float:right;margin:1px 5px;">搜索</el-button> -->
      </div>
      <div class="list_table">
        <el-table :data="tableData" border stripe style="width: 100%;overflow:hidden;" >
          <el-table-column type="index" width="50" label="序号">
          </el-table-column>
          <el-table-column prop="id" width="50" label="ID">
          </el-table-column>
          <el-table-column prop="picUrl" label="图片" width="100">
            <template slot-scope="scope">
              <img :src='scope.row.picUrl' style="width:100%">
            </template>
          </el-table-column>
          <el-table-column prop="title" label="活动名称" width="100">
          </el-table-column>
          <el-table-column prop="startTime" label="开始时间" width="90">
          </el-table-column>
          <el-table-column prop="endTime" label="结束时间" width="90">
          </el-table-column>
          <el-table-column prop="actionUrl" label="链接" width="172" show-overflow-tooltip>
          </el-table-column>
          <el-table-column prop="browseCount" label="浏览数" width="70">
          </el-table-column>
          <el-table-column prop="partakeCount" label="参与数" width="70">
          </el-table-column>
          <el-table-column  label="操作" width="180">
            <template slot-scope="scope">
              <div class='opr_list'>
                <span type="text" @click='editorimg(scope.row)'>编辑</span>
                <span type="text" @click='sticksimg(scope.row,1)' style='color:rgb(247, 186, 42)'>置顶</span>
                <span type="text" @click='deleteopr(scope)' style='color:rgb(255, 73, 073)'>删除</span>
                <span type="text" @click='sticksimg(scope.row,2)' v-if='scope.row.status===1'>下架</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="PagePilot" style="padding-right:10px">
        <pagepilots :pcount='countpage' :psize='pagesizes' :pnums='currentpage' @size-change='pagesizesc' @num-change='currentpagec'></pagepilots>
      </div>
    </div>
    <div class="loading" v-if='loadflag'><img src="../assets/loading.gif" height="60" width="60" class="loadicon"></div>
    <el-dialog title="活动详情" :visible.sync="dialogTableVisible" :close-on-click-modal='false' :show-close='false' class='temp_brk'>
      <div class='alertcot'>
        <div class='ale-img'>
          <label class="ale_imgedit" title='图片更换' for="file" @click='listimgurl'>
            <i class="el-icon-edit"></i>
          </label>
          <img :src="picobj.picUrl" width="100%">
        </div>
        <div class="listb" style="width:100%">
          <span style="width:15%">活动名称：</span>
          <el-input v-model="picobj.title" placeholder="请输入活动名称" class='listb_chr' style="width:85%;"></el-input>
        </div>
        <div class="listb" style="width:100%">
          <span style="width:15%">起止时间：</span>
          <el-date-picker v-model="timeslot" type="daterange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions2" class='listb_chr' @change='gettime' style="width:85%;">
          </el-date-picker>
        </div>
        <div class="listb" style="width:100%">
          <span style="width:15%"> 活动链接：</span>
          <el-input v-model="picobj.actionUrl" placeholder="请输入活动链接" class='listb_chr' style="width:85%;"></el-input>
        </div>
        <div class="blocks" style="">
          <el-button :disabled='savefalg' type='primary' @click="savesbtn" style="float:right;margin-left:15px;">保存<i class="el-icon-upload el-icon--right"></i></el-button>
          <el-button type='danger' @click="cancelbtn" style="float:right">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import pagepilots from '@/components/pagePilots'
import CryptoJS from 'crypto-js'
import basect from '../intraware/base64.js'
const uplistURl = 'http://imgopt.778668.cn/';
// const uplistURl = 'http://owvj8sipw.bkt.clouddn.com/';

export default {
  data() {
    return {
      quirylist: false,
      countpage: 1, //总数
      pagesizes: 30, //每页数
      currentpage: 1, // 当前页数
      timeslot: '',
      picobj: {
        id: '',
        actionUrl: '',
        picUrl: '',
        title: '',
        stime: '',
        etime: ''
      },
      savefalg: true,
      tableData: [],
      newtable: [],
      dialogTableVisible: false,
      loadflag: false,
      tempchange: false,
      pickerOptions2: {
        shortcuts: [{
          text: '起今一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [end, start]);
          }
        }, {
          text: '起今一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [end, start]);
          }
        }, {
          text: '起今三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() + 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [end, start]);
          }
        }]
      }
    }
  },
  methods: {
    listimgurl() {
      // console.log(this.loadflag)
      this.tempchange = true;
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
    cleardata() {
      this.picobj = {
        id: '',
        actionUrl: '',
        picUrl: '',
        title: '',
        stime: '',
        etime: ''
      }
      this.timeslot = '';
    },
    cancelbtn() {
      this.dialogTableVisible = false;
      this.cleardata();
    },
    savesbtn() {
      this.loadflag = true;
      this.picsave(this.picobj);

    },
    editorimg(a) {
      this.cleardata();
      this.dialogTableVisible = true;
      for (var key in this.picobj) {
        this.picobj[key] = a[key]
      }
      this.picobj.stime = a.startTime;
      this.picobj.etime = a.endTime;
      this.timeslot = [a.startTime, a.endTime];
    },
    gettime(ele) {
      if (ele == undefined) {
        this.picobj.stime = '';
        this.picobj.etime = '';
        return
      }
      if (ele != '') {
        this.picobj.stime = ele.substring(0, 10);
        this.picobj.etime = ele.substring(13);
      }
    },
    eldata(a) {
      this.newtable = [];
      for (var x in a) {
        if (x > 5) {
          return true;
        }
        this.newtable[x] = {
          picUrl: '',
          status: ''
        };
        this.newtable[x].picUrl = a[x].picUrl;
        this.newtable[x].status = a[x].status;
      }
    },
    fileshandle() {
      if (this.$refs.files == undefined) return false;
      var file = this.$refs.files.files[0]; //获取file对象 
      if (!file) return false;
      if (!/image\/\w+/.test(file.type)) {
        this.alertmsg("请上传一张图片！");
        return false;
      }
      if (file.size > 1024 * 100) {
        this.alertmsg("请上传小于100KB的图片！");
        return false;
      }
      this.picurl(file);
      this.loadflag = true;
      this.$refs.files.files = this.$refs.resetFile.files;
    },
    sticksimg: async function(a, b) {
      if (b == 1) {
        var _temp = '/open/service/banner/online';
      } else {
        var _temp = '/open/service/banner/offline';
      }
      const result = await this.http.default.post(_temp, {
        token: this.$store.state.userInfo.token,
        id: a.id
      })
      if (result.status == 200) {
        this.alertmsg('操作成功!')
        this.piclist();
      } else {
        this.alertmsg(result.msg)
      }
    },
    deleteopr(a) {

      this.$confirm('此操作将永久删除该条记录, 是否继续?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => { this.deleteimg(a) }).catch(() => {});
    },
    deleteimg: async function(a) {
      const result = await this.http.default.post('/open/service/banner/remove', {
        token: this.$store.state.userInfo.token,
        id: a.row.id
      })
      if (result.status == 200) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.tableData.splice(a.$index, 1)
      } else {
        this.$message({ type: 'error', message: result.msg });
      }
    },
    genUpToken: function(a, b, c) {
      var put_policy = JSON.stringify(c);
      var encoded = basect.base64encode(basect.utf16to8(put_policy));
      var hash = CryptoJS.HmacSHA1(encoded, b);
      var encoded_signed = hash.toString(CryptoJS.enc.Base64);
      var upload_token = a + ":" + basect.safe64(encoded_signed) + ":" + encoded;
      return upload_token;
    },
    picurl: async function(a) {
      var tempn = String(Date.parse(new Date()) / 1000);
      tempn = tempn.substring(3, 10);
      var putPolicy = {
        scope: 'sc-opt',
        isPrefixalScope: 1,
        saveKey: tempn + '.jpg',
        deadline: Date.parse('2888-12-12') / 1000,
        fileType: 1,
        returnBody: '{"name": $(key),"hash": $(etag)}'
      };
      var uptoken = this.genUpToken('yN2Cap59vAi2p8nu-mm6cztjuMQw6FOpWfiKV9YV', 'IE7gPHBuCMdfKCb6-TjjbxCadGJCO6kQXFoloAVA', putPolicy);
      const result = await this.http.default.imgpost('http://up-z2.qiniu.com', {
        token: uptoken,
        file: a
      })
      if (result) {
        if (this.tempchange) {
          this.picobj.picUrl = uplistURl + result.name + '?imageView2/1/w/750/h/280/q/75|imageslim';
          this.tempchange = false;
        } else {
          this.dialogTableVisible = true;
          this.cleardata();
          this.lotteryType = '全部';
          this.picobj.lotteryType = 0;
          this.picobj.picUrl = uplistURl + result.name + '?imageView2/1/w/750/h/280/q/75|imageslim';
        }
      } else {
        this.alertmsg(result.msg)
      }
      this.loadflag = false;
    },
    piclist: async function(a) {
      if (a == 1) { this.currentpage = 1; }
      const result = await this.http.default.post('/open/service/banner/list', {
        token: this.$store.state.userInfo.token,
        pageNumber: this.currentpage,
        pageSize: this.pagesizes
      })
      if (result.status == 200) {
        this.tableData = result.data.list;
        this.countpage = result.data.totalCount;
        if (this.currentpage !== 1) {
          this.uplist();
        } else {
          this.newtable = [];
          this.eldata(result.data.list)
        }
      } else {
        this.tableData = [];

      }
    },
    uplist: async function() {
      const result = await this.http.default.post('/open/service/banner/list', {
        token: this.$store.state.userInfo.token,
        pageNumber: 1,
        pageSize: 5
      })
      if (result.status == 200) {
        this.newtable = [];
        this.eldata(result.data.list)
      }
    },
    picsave: async function(a) {
      a.token = this.$store.state.userInfo.token;
      const result = await this.http.default.post('/open/service/banner/save', a)
      if (result.status == 200) {
        this.piclist();
        this.cancelbtn();
        this.loadflag = false;
      }
      this.loadflag = false;
      var obj = document.getElementById('file');
      obj.outerHTML = obj.outerHTML;
    }
  },
  mounted() {
    this.piclist();
    this.uplist();
    this.eldata();
  },
  components: {
    pagepilots
  },
  watch: {
    timeslot: function(val, oldVal) {
      if (val == '') this.savefalg = true;
      else { this.savefalg = false; }
    },
    pagesizes: function(val, oldVal) {
      this.pageSize = val;
      this.piclist();
    },
    currentpage: function(val, oldVal) {
      this.currentpage = val;
      this.piclist();
    }
  }
}

</script>
<style>
.list_table {
  padding: 12px;
  width: 100%;
}

.list_quiry {
  margin: 10px 0;
  border: 1px solid #ddd;
  overflow: auto;  width: 1000px;
  background-color: #fff;
}

.opr_list {
  line-height: 25px;
}

.opr_list span {
  float: left;
  margin: 0 3px;
  line-height: 25px;
  display: inline-block;
  cursor: pointer;
}

.listb {
  width: 50%;
  float: left;
}

.listb span:first-child {
  line-height: 36px;
  padding-left: 10px;
  float: left;
}

.listb .listb_chr {
  float: left;
  width: 70%;
}

.blocks {
  width: 100%;
  float: right;
  margin: 10px 0;
}

.img-cot {
  width: 60%;
  height: 100%;
  background-color: #000;
  opacity: .8;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
}

.ale-img {
  width: 100%;
  overflow: hidden;
  padding-bottom: 35%;
  height: 0;
  margin: 0 0 15px 0;
  position: relative;
}

.ale_imgedit {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  background-color: #409eff;
  border-radius: 50%;
  border: 1px solid #fff;
  color: #fff;
}

.imgedit {
  position: absolute;
  right: 0;
  bottom: 0;
}

.imgdelet {
  position: absolute;
  right: 0;
  top: 0;
}

.magnify {
  position: fixed;
  top: 150px;
  width: 96%;
  z-index: 999;
  overflow: hidden;
  z-index: 15;
}

.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 45px;
  left: 0px;
  z-index: 99999;
  background-color: #f0f0f0;
  opacity: .5;
}

.loading .loadicon {
  font-size: 50px;
  margin: 30%;
}

.lists {
 width: 1000px;
}

.backups {
  padding: 0 20px;
  width: 100%;
  height: 32px;
  background-color: #CBEDF1;
  margin-right: 4%;
}

.backups .backspan {
  line-height: 32px;
}

.list_table .el-table .cell {
  padding: 0px 9px !important;
  max-height: 25px !important;
  line-height: 30px !important;
}

.list_table  .el-table__row td:nth-child(1) {
  text-align: center !important;
  ;
}

.list_table .el-table__row td {
  padding: 0 !important;
  height: 30px !important;
  line-height: 30px !important;
}

.list_table .el-table__row td:last-child {
  text-align: center !important;
}

.PagePilot {
  float: right;
  margin: 10px 0;
  overflow: hidden;
}



/*滚动图*/

.imglists {
  margin: 15px auto;
  width: 800px;
}

.el-input.is-disabled .el-input__inner {
  color: #000 !important;
}

.gray {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}

.alertcot .listb {
  margin: 5px 0;
}

.el-dialog__body {
  overflow: auto;
}

.listcot_des {
  line-height: 25px
}

.el-dialog--small {
  width: 50%!important;
}

.temp_brk .el-dialog {
  width: 70%!important;
}

</style>
