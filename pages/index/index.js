// index.js
// 获取应用实例
var principal = 10000, rate = 0.03;

Page({
  data:{
    flag:true,
    res:0,
    getPrincipal:"",
    getRate:""
  },
  getPrincipal:function(e) {
    this.setData({
      getPrincipal:e.detail.value
    });
  },
  getRate:function(e) {
    this.setData({
      getRate:e.detail.value
    });
  },
  calc:function() {
    var Principal, Rate; 
    Principal = this.data.getPrincipal == "" ? 10000 : this.data.getPrincipal;
    Rate = this.data.getRate == "" ? 0.03 : this.data.getRate;
    for (var i = 0; i < 5; i++) {
      //console.log(Principal);
      Principal = Principal * (1 + Rate * 1.0);
    }
    //Principal = Principal * Math.pow((1 + Rate), 5);
    this.setData({
      flag:false,
      res:Principal
    });
  }
})