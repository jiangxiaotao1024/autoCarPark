var a = 1106
var timer//前进定时器
var timer1//后退定时器
var b = 100
var xuanzhuan = 0
var timerzhuan//旋转定时器
var qianjin=0
var houtui=0
Page({
  data: {
    y: 1000,
    x: 200,
    top: 1106,
    left: 100,
    top1: 1106,
    left1: 80,
    xuanzhuan:0
  },
  qianjin() {
    var that = this
    clearInterval(timer)
    clearInterval(timer1)
    qianjin=1
    houtui=0
    timer = setInterval(function (res) {
      a = a - Math.cos(xuanzhuan * 2 * Math.PI / 360)
      b = b + Math.sin(xuanzhuan * 2 * Math.PI / 360)
      that.setData({ top: a, left: b, top1: a - 20, left1: b - 20 })
    }, 10)
  },
  tingzhi() {
    clearInterval(timer)
    clearInterval(timer1)
    qianjin=0
    houtui=0
  },
  houtui() {
    var that = this
    clearInterval(timer)
    clearInterval(timer1)
    houtui=1
    qianjin=0
    timer1 = setInterval(function (res) {
      a = a + Math.cos(xuanzhuan * 2 * Math.PI / 360)
      b = b - Math.sin(xuanzhuan * 2 * Math.PI / 360)
      that.setData({ top: a, left: b })
    }, 10)
  },
  youzhuan() {
    var that = this
    timerzhuan = setInterval(function () {
      if(qianjin==1)
      xuanzhuan = xuanzhuan + 1
      if(houtui==1)
      xuanzhuan=xuanzhuan-1
      that.setData({ xuanzhuan: xuanzhuan })
    }, 10)
  },
  tingzhuan() {
    clearInterval(timerzhuan)
  },
  zuozhuan() {
    var that = this
    timerzhuan = setInterval(function () {
      if (qianjin == 1)
        xuanzhuan = xuanzhuan -1
      if (houtui == 1)
        xuanzhuan = xuanzhuan + 1
      that.setData({ xuanzhuan: xuanzhuan })
    }, 10)
  }
})