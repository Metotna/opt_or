exports.install = function(Vue, options) {
  Vue.prototype.changeData = function(val) {};
  Vue.prototype.http = require('./http');
  Vue.prototype.orderdeal = function() {
    var Format = {
      '3': {
        '1': '七星彩'
      },
      '4': {
        '1': '直选三',
        '2': '组三',
        '3': '组六',
      },
      '5': {
        '1': '排列五',
      },
      '6': {
        '1': '普通',
        '2': '追加',
      },
      '7': {
        '1': '任选一',
        '2': '任选二',
        '3': '任选三',
        '4': '任选四',
        '5': '任选五',
        '6': '任选六',
        '7': '任选七',
        '8': '任选八',
        '9': '前二直选',
        '10': '前三直选',
        '11': '前二组选',
        '12': '前三组选',
      },
      '8': {
        '1': '任选一',
        '2': '任选二',
        '3': '任选三',
        '4': '任选四',
        '5': '任选五',
        '6': '任选六',
        '7': '任选七',
        '8': '任选八',
        '9': '前二直选',
        '10': '前三直选',
        '11': '前二组选',
        '12': '前三组选',
      },
      '9': {
        '1': '任选一',
        '2': '任选二',
        '3': '任选三',
        '4': '任选四',
        '5': '任选五',
        '6': '任选六',
        '7': '任选七',
        '8': '任选八',
        '9': '前二直选',
        '10': '前三直选',
        '11': '前二组选',
        '12': '前三组选',
      },
      '10': {
        '1': '任选一',
        '2': '任选二',
        '3': '任选三',
        '4': '任选四',
        '5': '任选五',
        '6': '任选六',
        '7': '任选七',
        '8': '任选八',
        '9': '前二直选',
        '10': '前三直选',
        '11': '前二组选',
        '12': '前三组选',
      },
      '11': {
        '1': '普通',
      },
      '12': {
        '1': '普通',
      },
      '13': {
        '1': '直选',
        '2': '组三',
        '3': '组六',
      }
    }
    var Firstsd = {
      '1': '单式',
      '2': '复式',
      '3': '包号',
      '4': '和值',
      '5': '胆拖',
    }
    var zqhhs = function(val) {
      var temp = val.split('=');
      switch (temp[0]) {
        case 'SPF':
          temp[1] = temp[1].replace(/3/g, '胜').replace(/1/g, '平').replace(/0/g, '负');
          break;
        case 'BQC':
          temp[1] = temp[1].replace(/3/g, '胜').replace(/1/g, '平').replace(/0/g, '负');
          break;
        case 'JQS':
          temp[1] = temp[1];
          break;
        case 'RSPF':
          temp[1] = temp[1].replace(/3/g, '让胜').replace(/1/g, '让平').replace(/0/g, '让负');
          break;
      }
      return temp[1];
    }
    return {
      detailsZ(val) {
        var tempval = val.split('|');
        var cot = tempval[1].split(',');
        if (tempval[0] == 'ZQHH') {
          var spst = '>';
        } else {
          var spst = '='
        }
        var tempary = [];
        for (var x in cot) {
          tempary[x] = cot[x].split(spst);
          switch (tempval[0]) {
            case 'SPF':
              tempary[x][1] = tempary[x][1].replace(/3/g, '胜').replace(/1/g, '平').replace(/0/g, '负');
              break;
            case 'BQC':
              tempary[x][1] = tempary[x][1].replace(/3/g, '胜').replace(/1/g, '平').replace(/0/g, '负');
              break;
            case 'JQS':
              tempary[x][1] = tempary[x][1];
              break;
            case 'ZQHH':
              tempary[x][1] = zqhhs(tempary[x][1]);
              break;
            case 'RSPF':
              tempary[x][1] = tempary[x][1].replace(/3/g, '让胜').replace(/1/g, '让平').replace(/0/g, '让负');
              break;
          }
        }
        return tempary
      },
      //详情过关方式
      /*数字彩拆分*/
      detailsS: function(val, id) {
        // console.log(val,id)
        var str = '';
        var str1 = '';
        var obj = {};
        var arry1 = [];
        var arry2 = [];
        arry1 = val.split(";")
        for (var j in arry1) {

          str = '';
          obj = {};
          var arry3 = [];
          arry3 = arry1[j].split(':');
          for (var k = 0; k < arry3.length - 2; k++) {
            var arry4 = [];
            arry4 = arry3[k].split(',')
            str = arry4.join(' ');
            str1 = Format[id][arry3[arry3.length - 2]] + Firstsd[arry3[arry3.length - 1]];
          }
          obj.bets = str;
          obj.play = str1;
          arry2.push(obj);
        }
        return arry2;
      }
    }
  };
  Vue.prototype.order = function() {

    var zqarry = {
      SPF: {
        '3': '胜',
        '1': '平',
        '0': '负',
      },
      RSPF: {
        '3': '让胜',
        '1': '让平',
        '0': '让负',
      },
      BQC: {
        '3-3': '胜胜',
        '3-1': '胜平',
        '3-0': '胜负',
        '1-3': '平胜',
        '1-1': '平平',
        '1-0': '平负',
        '0-3': '负胜',
        '0-1': '负平',
        '0-0': '负负',
      },
      JQS: {
        '0': '0球',
        '1': '1球',
        '2': '2球',
        '3': '3球',
        '4': '4球',
        '5': '5球',
        '6': '6球',
        '7': '7+球',
      },
      SF: {
        '3': '胜',
        '0': '负',
      },
      RFSF: {
        '3': '胜',
        '0': '负',
      },
      SFC: {
        '01': '1-5',
        '02': '6-10',
        '03': '11-15',
        '04': '16-20',
        '05': '21-25',
        '06': '26+',
        '11': '1-5',
        '12': '6-10',
        '13': '11-15',
        '14': '16-20',
        '15': '21-25',
        '16': '26+',
      },
      DXF: {
        '3': '大于',
        '0': '小于',
      },
    }
    var bj = function(o, s) {
      var t = '';
      t = zqarry[o][s[0]];
      return t;
    }
    var Format = {
      '3': {
        '1': '七星彩'
      },
      '4': {
        '1': '直选三',
        '2': '组三',
        '3': '组六',
      },
      '5': {
        '1': '排列五',
      },
      '6': {
        '1': '普通',
        '2': '追加',
      },
      '7': {
        '1': '前一',
        '2': '任选二',
        '3': '任选三',
        '4': '任选四',
        '5': '任选五',
        '6': '任选六',
        '7': '任选七',
        '8': '任选八',
        '9': '前二直选',
        '10': '前三直选',
        '11': '前二组选',
        '12': '前三组选',
      },
      '8': {
        '1': '前一',
        '2': '任选二',
        '3': '任选三',
        '4': '任选四',
        '5': '任选五',
        '6': '任选六',
        '7': '任选七',
        '8': '任选八',
        '9': '前二直选',
        '10': '前三直选',
        '11': '前二组选',
        '12': '前三组选',
      },
      '9': {
        '1': '前一',
        '2': '任选二',
        '3': '任选三',
        '4': '任选四',
        '5': '任选五',
        '6': '任选六',
        '7': '任选七',
        '8': '任选八',
        '9': '前二直选',
        '10': '前三直选',
        '11': '前二组选',
        '12': '前三组选',
      },
      '10': {
        '1': '前一',
        '2': '任选二',
        '3': '任选三',
        '4': '任选四',
        '5': '任选五',
        '6': '任选六',
        '7': '任选七',
        '8': '任选八',
        '9': '前二直选',
        '10': '前三直选',
        '11': '前二组选',
        '12': '前三组选',
      },
      '11': {
        '1': '普通',
      },
      '12': {
        '1': '普通',
      },
      '13': {
        '1': '直选',
        '2': '组三',
        '3': '组六',
      },
      '20': {
        '1': '前一',
        '2': '任选二',
        '3': '任选三',
        '4': '任选四',
        '5': '任选五',
        '6': '任选六',
        '7': '任选七',
        '8': '任选八',
        '9': '前二直选',
        '10': '前三直选',
        '11': '前二组选',
        '12': '前三组选',
      },
    }
    var Firstsd = {
      '1': '单式',
      '2': '复式',
      '3': '包号',
      '4': '和值',
      '5': '胆拖',
    }
    return {
      //详情过关方式
      Passway: function(i) {
        var arry = [];
        arry = i.split(",")
        var arry1 = [];
        for (var j = 0; j < arry.length; j++) {
          if (arry[j].length == 3) {
            arry1.push(arry[j]);
          }
        }
        return arry1;
      },
      ccodeslist: function(t) {
        s = t.ccodes;
        var arry = [];
        var arry1 = [];
        var arry2 = [];
        var arry3 = [];
        var obj = {};
        arry = s.split(',');
        for (var i = 0; i < arry.length; i++) {
          arry1 = arry[i].split('=');
          arry2 = arry1[1].split('_');
          switch (arry1[0]) {
            case "SPF":
              arry2[0] = bj('SPF', arry2);
              arry1[2] = arry1[0];
              arry1[0] = '胜平负'
              break;
            case "BQC":
              arry2[0] = bj('BQC', arry2);
              arry1[2] = arry1[0];
              arry1[0] = '半全场'
              break;
            case "JQS":
              arry2[0] = bj('JQS', arry2);
              arry1[2] = arry1[0];
              arry1[0] = '进球数'
              break;
            case "CBF":
              if (arry2[0] == '9:0') {
                arry2[0] = '胜其它'
              } else if (arry2[0] == '9:9') {
                arry2[0] = '平其它'
              } else if (arry2[0] == '0:9') {
                arry2[0] = '负其它'
              }
              arry1[2] = arry1[0];
              arry1[0] = '猜比分'
              break;
            case "RSPF":
              arry2[0] = bj('RSPF', arry2);
              arry1[2] = arry1[0];
              arry1[0] = '让胜平负' + '(' + t.lose + ')';
              break;
            case "SF":
              arry2[0] = bj('SF', arry2);
              arry1[2] = arry1[0];
              arry1[0] = '胜负'
              break;
            case "RFSF":
              arry2[0] = bj('RFSF', arry2);
              arry1[2] = arry1[0];
              arry1[0] = '让分胜负'
              break;
            case "SFC":
              arry2[0] = bj('SFC', arry2);
              arry1[2] = arry1[0];
              arry1[0] = '胜分差'
              break;
            case "DXF":
              arry2[0] = bj('DXF', arry2);
              arry1[2] = arry1[0];
              arry1[0] = '大小分'
              break;
          }
          obj = {
            bettype: arry1[0],
            betresult: arry2[0],
            winrate: arry2[1],
            bettypeID: arry1[2]
          }
          arry3.push(obj);
        }
        return arry3;
      },
      zjpd: function(l) {
        var objlist = {};
        l = l.bbets;
        for (var i = 0; i < l.length; i++) {
          var q = '';
          var w = '';
          var obj1 = {};
          if (!l[i].hs) {
            objlist[l[i].pid] = obj1;
            continue;
          }
          if (l[i].hs > l[i].gs) {
            obj1.SPF = '胜';
          } else if (l[i].hs == l[i].gs) {
            obj1.SPF = '平';
          } else if (l[i].hs < l[i].gs) {
            obj1.SPF = '负';
          }
          if (l[i].hs - (-l[i].lose) > l[i].gs) {
            obj1.RSPF = '让胜';
          } else if (l[i].hs - (-l[i].lose) == l[i].gs) {
            obj1.RSPF = '让平';
          } else if (l[i].hs - (-l[i].lose) < l[i].gs) {
            obj1.RSPF = '让负';
          }
          if (l[i].hhs > l[i].hgs) {
            q = '胜'
          } else if (l[i].hhs == l[i].hgs) {
            q = '平'
          } else if (l[i].hhs < l[i].hgs) {
            q = '负'
          }
          if (l[i].hs > l[i].gs) {
            w = '胜'
          } else if (l[i].hs == l[i].gs) {
            w = '平'
          } else if (l[i].hs < l[i].gs) {
            w = '负'
          }
          if (l[i].hs - (-l[i].gs) < 7) {
            obj1.JQS = l[i].hs - (-l[i].gs) + '球';
          } else {
            obj1.JQS = '7+球';
          }
          if (l[i].hs > 5 && l[i].gs > 2) {
            obj1.CBF = '胜其它';
          } else if (l[i].hs > 2 && l[i].gs > 5) {
            obj1.CBF = '负其它';
          } else if (l[i].hs == l[i].gs && l[i].hs > 3) {
            obj1.CBF = '平其他';
          } else {
            obj1.CBF = l[i].hs + ':' + l[i].gs;
          }
          obj1.BQC = q + w;
          objlist[l[i].pid] = obj1;
        }
        return objlist;
      },
      /*数字彩拆分*/
      NumberGame: function(list) {
        y = list.bec;
        var str = '';
        var str1 = '';
        var obj = {};
        var arry = [];
        var arry1 = [];
        var arry2 = [];
        arry = y.split("|")
        arry1 = arry[1].split(";")
        for (var j = 0; j < arry1.length - 1; j++) {
          str = '';
          obj = {};
          var arry3 = [];
          arry3 = arry1[j].split(':')
          for (var k = 0; k < arry3.length - 2; k++) {
            var arry4 = [];
            arry4 = arry3[k].split(',')
            for (var f = 0; f < arry4.length; f++) {
              str += arry4[f] + ',';
            }
            str1 = Format[list.id][arry3[arry3.length - 2]] + Firstsd[arry3[arry3.length - 1]];
          }
          obj.bets = str;
          obj.play = str1;
          arry2.push(obj);
        }
        return arry2;
      },
      //彩种玩法解析
      playanalysis: function(a, b) {
        console.log(Format[a], Firstsd[b])
      }
    }
  }
}
