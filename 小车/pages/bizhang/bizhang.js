var a = 1106
var timer
var timer1
var b = 100
var xuanzhuan = 0
var timerzhuan
var diany
var dianx
var dian1y
var dian1x
var qianjin=0
var houtui=0
Page({
  data: {
    top: 1106,
    left: 100,
    xuanzhuan: 0,
    diany:1096,
    dianx:100,
    dian1y:1096,
    dian1x:140
  },
  onReady: function () {
    const context = wx.createCanvasContext('huabu')
    context.moveTo(0,300)
    context.lineTo(300,10)
    context.moveTo(10,10)
    context.lineTo(375,100)
    context.moveTo(350,0)
    context.lineTo(350,550)
    context.stroke()
    context.draw()
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
      diany = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
      dianx = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
      dian1y = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(3) - xuanzhuan * Math.PI / 180)
      dian1x = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(3) - xuanzhuan * Math.PI / 180)
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y:diany/2,
        x: dianx/2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            clearInterval(timer)
        }
      })
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian1y/2,
        x:dian1x/2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            clearInterval(timer)
        }
      })
      that.setData({hou:0,qian:1, top: a, left: b, dianx:dianx,diany:diany,dian1x:dian1x,dian1y:dian1y})
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
    qianjin=0
    houtui=1
    timer1 = setInterval(function (res) {
      a = a + Math.cos(xuanzhuan * 2 * Math.PI / 360)
      b = b - Math.sin(xuanzhuan * 2 * Math.PI / 360)
      diany = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
      dianx = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
      dian1y = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(3) - xuanzhuan * Math.PI / 180)
      dian1x = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(3) - xuanzhuan * Math.PI / 180)
      that.setData({top: a, left: b ,dianx:dianx,diany:diany,dian1x:dian1x,dian1y:dian1y})
    }, 10)
  },
  youzhuan() {
    var that = this
    timerzhuan = setInterval(function () {
      if (qianjin == 1)
        {xuanzhuan = xuanzhuan + 1
        diany = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
        dianx = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
        dian1y = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(3) - xuanzhuan * Math.PI / 180)
        dian1x = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(3) - xuanzhuan * Math.PI / 180)
        that.setData({ xuanzhuan: xuanzhuan, dianx: dianx, diany: diany, dian1y: dian1y, dian1x: dian1x })}
      if (houtui == 1)
        {xuanzhuan = xuanzhuan - 1
        diany = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
        dianx = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
        dian1y = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(3) - xuanzhuan * Math.PI / 180)
        dian1x = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(3) - xuanzhuan * Math.PI / 180)
        that.setData({ xuanzhuan: xuanzhuan, dianx: dianx, diany: diany, dian1y: dian1y, dian1x: dian1x })}
    }, 10)
  },
  tingzhuan() {
    clearInterval(timerzhuan)
  },
  zuozhuan() {
    var that = this
    timerzhuan = setInterval(function () {
      if (qianjin == 1)
        {xuanzhuan = xuanzhuan - 1
        diany = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
        dianx = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
        dian1y = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(3) - xuanzhuan * Math.PI / 180)
        dian1x = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(3) - xuanzhuan * Math.PI / 180)
        that.setData({ xuanzhuan: xuanzhuan, dianx: dianx, diany: diany, dian1y: dian1y, dian1x: dian1x })}
      if (houtui == 1)
        {xuanzhuan = xuanzhuan + 1
        diany = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
        dianx = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(-3) + (180 - xuanzhuan) * Math.PI / 180)
        dian1y = a + 50 - Math.sqrt(20 * 20 + 60 * 60) * Math.sin(Math.atan(3) - xuanzhuan * Math.PI / 180)
        dian1x = b + 20 + Math.sqrt(20 * 20 + 60 * 60) * Math.cos(Math.atan(3) - xuanzhuan * Math.PI / 180)
        that.setData({ xuanzhuan: xuanzhuan, dianx: dianx, diany: diany, dian1y: dian1y, dian1x: dian1x })}
    }, 10)
  }
})