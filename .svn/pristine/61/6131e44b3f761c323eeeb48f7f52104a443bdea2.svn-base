<template>
  <div>
    <el-button type='warning'>这是主页</el-button>
<!--     <input type="file" ref='inputer'>
    <el-button type="success" plain @click='toUp'>成功按钮</el-button>
     <input type="file" ref='inputers' style="display:none"> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    toCheck() {
      console.log(this.$refs.inputer.files)
    },
    toUp() {
      var file = this.$refs.inputer.files;
      console.log(file)
      this.toCheck()
      console.log(file==true)
      this.$refs.inputer.files=this.$refs.inputers.files
      // var fileReader = new FileReader();
      // let _this=this;
      // fileReader.onload = function(ev) {
      //   try {
      //     var XLSX = require('xlsx');
      //     var data = ev.target.result,
      //       workbook = XLSX.read(data, {
      //         type: 'binary'
      //       }), // 以二进制流方式读取得到整份excel表格对象
      //       persons = []; // 存储获取到的数据
      //   } catch (e) {
      //     console.log('文件类型不正确');
      //     return;
      //   }
      //   // 表格的表格范围，可用于判断表头是否数量是否正确
      //   var fromTo = '';
      //   // 遍历每张表读取
      //   for (var sheet in workbook.Sheets) {
      //     if (workbook.Sheets.hasOwnProperty(sheet)) {
      //       fromTo = workbook.Sheets[sheet]['!ref'];
      //       // console.log(fromTo);
      //       console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]))
      //       persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
      //       break; // 如果只取第一张表，就取消注释这行
      //     }
      //   }    
      //   _this.upXlsxdis(persons)
      // }
      // // 以二进制方式打开文件
      // fileReader.readAsBinaryString(file);
    },
    upXlsxdis:async function(obj){
      obj.splice(0,1);
      // for(var x in obj){
      //   if(obj[x].type==2){
      //     obj[x].mode='抵扣' +obj[x].cfg_value + '元';
      //   }else{
      //      obj[x].mode='满' + obj[x].cfg_max + '减' + obj[x].cfg_value;
      //   }
      // }
      var Inn={
        errors:[],
        success:[]
      };
      for(var x in obj){
        obj[x].token=this.$store.state.userInfo.token;
        const result = await this.http.default.post('/act/coupon/edit', obj[x])
        if (result.status == 200) {
          delete obj[x].token;
          obj[x].id=result.data.aid;
          Inn.success.push(obj[x]);
        }else{
          Inn.errors.push(obj[x].index)
        }
      }
    }
  }
}

</script>
<style>


</style>
