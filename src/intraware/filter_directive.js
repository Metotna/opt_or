import Vue from 'vue'
import store from '@/intraware/stores'
Vue.filter('my-filter', value => value + 1)
Vue.filter('order-numbera', function(val) {
  if (val != '') {
    var tempval;
    tempval = val.substring(0, 8);
    return tempval
  }
  return val
})
Vue.filter('order-result', function(val) {
  if (val != '' || val==0) {
    switch (val) {
      case 0:
        return '未中奖';
        break;
      case 1:
        return '中奖';
        break;
    }
  }
  return val
})
Vue.filter('order-numberb', function(val) {
  if (val != '') {
    var tempval;
    tempval = val.substring(8, 14);
    return tempval
  }
  return val
})
Vue.filter('order-play', function(val) {
  if (val != '') {
    var tempval;
    // tempval = val.slice(3);
    tempval = val.split('|');
    return tempval[2].replace('*', '串')
  }
  return val
})
Vue.filter('order-phone', function(val) {
  if (val != '') {
    var tempval;
    tempval = val.substring(0, 3) + '-' + val.substring(3, 7) + '-' + val.substring(7, 11);
    return tempval
  }
  return val
})
Vue.filter('order-status', function(val) {
  var optionstatus = [{
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
  ];
  for (var x in optionstatus) {
    if (optionstatus[x].id == val) {
      return optionstatus[x].name;
    }
  }
  return '待支付';
})
Vue.filter('order-type', function(val) {
  if (val != undefined) {
    switch (val) {
      case 0:
        return '普通';
        break;
      case 1:
        return '追期';
        break;
      case 2:
        return '包中';
        break;
    }
  }
  return '普通'
})
Vue.filter('banner-currencyType', function(val) {
  var optionstatus = [{
    id: 0,
    name: '全部'
  }, {
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
  }];
  for (var x in optionstatus) {
    if (optionstatus[x].id == val) {
      return optionstatus[x].name;
    }
  }
  return '未定义';
})
Vue.filter('banner-actionType', function(val) {
  var optionstatus = [

    {
      id: 1,
      name: '每日签到'
    }, {
      id: 2,
      name: '包中'
    }, {
      id: 3,
      name: '满减'
    }, {
      id: 4,
      name: '抵用券'
    }
  ];
  for (var x in optionstatus) {
    if (optionstatus[x].id == val) {
      return optionstatus[x].name;
    }
  }
  return '未定义';
})
Vue.filter('lottype-ch', function(val) {
  if (val != '') {
    if (val.length == 13) {
      return '全部'
    } else {
      return val.join(',')
    }
    // var obj = JSON.parse(val)
    // console.log(Vue)
    // var list=this.$store.state.lotterylist;
    // if(val.length=list.length){
    //   return '全部'
    // }
  }
  return val
})
Vue.filter('opera-coin', function(val) {
  if (val != '') {
    switch (val) {
      case 'BET':
        return '彩金';
        break;
      case 'CASH':
        return '现金';
        break;
      case 'GCOIN':
        return '金币';
        break;
    }
  }
  return val
})
Vue.filter('opera-type', function(val) {
  if (val != '') {
    switch (val) {
      case 1:
        return '加奖券';
        break;
      case 2:
        return '抵扣券';
        break;
      case 3:
        return '满减券';
        break;
    }
  }
  return val
})

Vue.filter('yhq-timevalue', function(vala, valb) {
  if (vala != '') {
    if (valb == 1) {
      var tempval = vala.split('-');
      for (var x in tempval) {
        var a = tempval[x];
        tempval[x] = a.substring(0, 4) + '-' + a.substring(4, 6) + '-' + a.substring(6, 8) + ' ' + a.substring(8, 10) + ':' + a.substring(10, 12) + ':' + a.substring(12, 14);
      }
      return tempval[0] + '~' + tempval[1];
    } 
    if (valb ==2 ) {
      return '自领取顺延' + vala + '小时结束';
    }
    if (valb ==3 ) {
      return '自领取顺延' + vala + '小时开始';
    }

  }
  return vala
})

Vue.filter('valPercent', function(val) {
  if (val != '' || val==0) {
    val=parseInt(val*1000)
    val =parseInt(val/10)+'.'+(val-parseInt(val/10)*10)+'%'
    return val
  }
  return '0.0%'
})
Vue.directive('colors', {
  // bind: function() {},
  // update: function() {},
  // componentUpdated: function() {},
  // unbind: function() {},
  inserted: function(el, binding) {
    // 聚焦元素
    el.style.color = binding.value;
  }
})


