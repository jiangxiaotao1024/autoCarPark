var a = 1100
var b = 120
var xuanzhuan = 0
var dingdianx
var dingdiany
var dingdian1x
var dingdian1y
var dian0y
var dian0x
var dian00y
var dian00x
var dian000y
var dian000x
var diany
var dianx
var dian1y
var dian1x
var dian2x
var dian2y
var dian3x
var dian3y
var dianxx
var dianyy
var dian1xx
var dian1yy
var didianx
var didiany

var a1 = 1100
var b1 = 120
var xuanzhuan1 = 0
var dingdianx1
var dingdiany1
var dingdian1x1
var dingdian1y1
var dian0y1
var dian0x1
var dian00y1
var dian00x1
var dian000y1
var dian000x1
var diany1
var dianx1
var dian1y1
var dian1x1
var dian2x1
var dian2y1
var dian3x1
var dian3y1
var dianxx1
var dianyy1
var dian1xx1
var dian1yy1
var didianx1
var didiany1

var a2 = 1100
var b2 = 120
var xuanzhuan2 = 0
var dingdianx2
var dingdiany2
var dingdian1x2
var dingdian1y2
var dian0y2
var dian0x2
var dian00y2
var dian00x2
var dian000y2
var dian000x2
var diany2
var dianx2
var dian1y2
var dian1x2
var dian2x2
var dian2y2
var dian3x2
var dian3y2
var dianxx2
var dianyy2
var dian1xx2
var dian1yy2
var didianx2
var didiany2

var ku10 = 0
var ku11 = 1
var ku20 = 0
var ku21 = 1
var ku30 = 0
var ku31 = 1

var che1 = 0
var che2 = 0
var che3 = 0
var chewei1 = 0
var chewei2 = 0
var chewei3 = 0
var xian1 = 1
var xian2 = 1
var xian3 = 1
var ruku1 = 0
var ruku2 = 0
var ruku3 = 0

var che1zhanyong1
var che1zhanyong2
var che1zhanyong3
var che2zhanyong1
var che2zhanyong2
var che2zhanyong3
var che3zhanyong1
var che3zhanyong2
var che3zhanyong3
var che1zhanyong1panduan
var che1zhanyong2panduan
var che1zhanyong3panduan
var che2zhanyong1panduan
var che2zhanyong2panduan
var che2zhanyong3panduan
var che3zhanyong1panduan
var che3zhanyong2panduan
var che3zhanyong3panduan

var rukuchedao1 = 0
var rukuchedao2 = 0
var chukuchedao1 = 0
var chukuchedao2 = 0
var chukuchedao3 = 0

var wengding1=0
var wengding2=0
var wengding3=0
Page({
  data: {
    top: 1100,
    left: 120,
    xuanzhuan: 0,
    dingdianx: 120,
    dingdiany: 1100,
    dingdian1x: 160,
    dingdian1y: 1100,
    dian0y: 1085,
    dian0x: 110,
    dian00y: 1085,
    dian00x: 170,
    dian000y: 1085,
    dian000x: 140,
    diany: 1150,
    dianx: 110,
    dian1y: 1150,
    dian1x: 170,
    dian2y: 1200,
    dian2x: 120,
    dian3y: 1200,
    dian3x: 160,
    dianxx: 110,
    dianyy: 1170,
    dian1xx: 170,
    dian1yy: 1170,
    didiany: 1210,
    didianx: 140,
    dian00xian: 0,
    dian0xian: 0,
    dian0xian: 0,
    dian2xian: 0,
    dian11xian: 0,
    didianxian: 0,
    dian1xian: 0,

    top1: 1100,
    left1: 120,
    xuanzhuan1: 0,
    dingdianx1: 120,
    dingdiany1: 1100,
    dingdian1x1: 160,
    dingdian1y1: 1100,
    dian0y1: 1085,
    dian0x1: 110,
    dian00y1: 1085,
    dian00x1: 170,
    dian000y1: 1085,
    dian000x1: 140,
    diany1: 1150,
    dianx1: 110,
    dian1y1: 1150,
    dian1x1: 170,
    dian2y1: 1200,
    dian2x1: 120,
    dian3y1: 1200,
    dian3x1: 160,
    dianxx1: 110,
    dianyy1: 1170,
    dian1xx1: 170,
    dian1yy1: 1170,
    didiany1: 1210,
    didianx1: 140,
    dian00xian1: 0,
    dian0xian1: 0,
    dian0xian1: 0,
    dian2xian1: 0,
    dian11xian1: 0,
    didianxian1: 0,
    dian1xian1: 0,


    top2: 1100,
    left2: 120,
    xuanzhuan2: 0,
    dingdianx2: 120,
    dingdiany2: 1100,
    dingdian1x2: 160,
    dingdian1y2: 1100,
    dian0y2: 1085,
    dian0x2: 110,
    dian00y2: 1085,
    dian00x2: 170,
    dian000y2: 1085,
    dian000x2: 140,
    diany2: 1150,
    dianx2: 110,
    dian1y2: 1150,
    dian1x2: 170,
    dian2y2: 1200,
    dian2x2: 120,
    dian3y2: 1200,
    dian3x2: 110,
    dianyy2: 1170,
    dian1xx2: 170,
    dian1yy2: 1170,
    didiany2: 1210,
    didianx2: 140,
    dian00xian2: 0,
    dian0xian2: 0,
    dian0xian2: 0,
    dian2xian2: 0,
    dian11xian2: 0,
    didianxian2: 0,
    dian1xian2: 0
  },
  onLoad: function (options) {
    this.huabu()
  },
  huabu() {
    const context = wx.createCanvasContext('huabu')
    context.setLineWidth(1)
    context.moveTo(90, 603)
    context.lineTo(90, 400)
    context.lineTo(150, 400)
    context.lineTo(150, 370)
    context.lineTo(90, 370)
    context.moveTo(150, 370)
    context.lineTo(150, 340)
    context.lineTo(90, 340)
    context.moveTo(150, 340)
    context.lineTo(150, 310)
    context.lineTo(90, 310)
    context.lineTo(90, 10)
    context.moveTo(50, 603)
    context.lineTo(50, 10)
    if (ku11 == 1) {
      context.moveTo(50, 320)
      context.lineTo(90, 320)
    }
    if (ku10 == 1) {
      context.moveTo(50, 400)
      context.lineTo(90, 400)
    }
    if (ku21 == 1) {
      context.moveTo(50, 290)
      context.lineTo(90, 290)
    }
    if (ku20 == 1) {
      context.moveTo(50, 370)
      context.lineTo(90, 370)
    }
    if (ku31 == 1) {
      context.moveTo(50, 260)
      context.lineTo(90, 260)
    }
    if (ku30 == 1) {
      context.moveTo(50, 340)
      context.lineTo(90, 340)
    }
    context.moveTo(50, 10)
    context.lineTo(90, 10)
    if (rukuchedao2 == 1) {
      context.moveTo(50, 465)
      context.lineTo(90, 465)
    }
    if (rukuchedao1 == 1) {
      context.moveTo(50, 530)
      context.lineTo(90, 530)
    }
    if (chukuchedao3 == 1) {
      context.moveTo(50, 75)
      context.lineTo(90, 75)
    }
    if (chukuchedao2 == 1) {
      context.moveTo(50, 140)
      context.lineTo(90, 140)
    }
    if (chukuchedao1 == 1) {
      context.moveTo(50, 205)
      context.lineTo(90, 205)
    }
    context.stroke()
    context.draw()
  },

  gengxin() {
    dingdiany = a + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(-5 / 2) + (180 - xuanzhuan) * Math.PI / 180)
    dingdianx = b + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(-5 / 2) + (180 - xuanzhuan) * Math.PI / 180)
    dingdian1y = a + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(50 / 20) - xuanzhuan * Math.PI / 180)
    dingdian1x = b + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(50 / 20) - xuanzhuan * Math.PI / 180)
    dian0y = a + 50 - Math.sqrt(30 * 30 + 65 * 65) * Math.sin(Math.atan(-65 / 30) + (180 - xuanzhuan) * Math.PI / 180)
    dian0x = b + 20 + Math.sqrt(30 * 30 + 65 * 65) * Math.cos(Math.atan(-65 / 30) + (180 - xuanzhuan) * Math.PI / 180)
    dian00y = a + 50 - Math.sqrt(30 * 30 + 65 * 65) * Math.sin(Math.atan(65 / 30) - xuanzhuan * Math.PI / 180)
    dian00x = b + 20 + Math.sqrt(30 * 30 + 65 * 65) * Math.cos(Math.atan(65 / 30) - xuanzhuan * Math.PI / 180)
    dian000y = a + 50 - 65 * Math.sin((90 - xuanzhuan) * Math.PI / 180)
    dian000x = b + 20 + 65 * Math.cos((90 - xuanzhuan) * Math.PI / 180)
    diany = a + 50 - Math.sqrt(30 * 30 + 0 * 0) * Math.sin(Math.atan(-0 / 3) + (180 - xuanzhuan) * Math.PI / 180)
    dianx = b + 20 + Math.sqrt(30 * 30 + 0 * 0) * Math.cos(Math.atan(-0 / 3) + (180 - xuanzhuan) * Math.PI / 180)
    dian1y = a + 50 - Math.sqrt(30 * 30 + 0 * 0) * Math.sin(Math.atan(0 / 3) - xuanzhuan * Math.PI / 180)
    dian1x = b + 20 + Math.sqrt(30 * 30 + 0 * 0) * Math.cos(Math.atan(0 / 3) - xuanzhuan * Math.PI / 180)
    dian2y = a + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(5 / 2) + (180 - xuanzhuan) * Math.PI / 180)
    dian2x = b + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(5 / 2) + (180 - xuanzhuan) * Math.PI / 180)
    dian3y = a + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(-5 / 2) - xuanzhuan * Math.PI / 180)
    dian3x = b + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(-5 / 2) - xuanzhuan * Math.PI / 180)
    dianyy = a + 50 - Math.sqrt(30 * 30 + 20 * 20) * Math.sin(Math.atan(2 / 3) + (180 - xuanzhuan) * Math.PI / 180)
    dianxx = b + 20 + Math.sqrt(30 * 30 + 20 * 20) * Math.cos(Math.atan(2 / 3) + (180 - xuanzhuan) * Math.PI / 180)
    dian1yy = a + 50 - Math.sqrt(30 * 30 + 20 * 20) * Math.sin(Math.atan(-2 / 3) - xuanzhuan * Math.PI / 180)
    dian1xx = b + 20 + Math.sqrt(30 * 30 + 20 * 20) * Math.cos(Math.atan(-2 / 3) - xuanzhuan * Math.PI / 180)
    didiany = a + 50 - 60 * Math.sin((90 + 180 - xuanzhuan) * Math.PI / 180)
    didianx = b + 20 + 60 * Math.cos((90 + 180 - xuanzhuan) * Math.PI / 180)
  },
  kaishi1() {
    this.setData({ dian000xian: 1, dian0xian: 1 })
    if (ruku1 == 0) {
      ruku1 = 1
      this.qianjinpanduan1()
    }
    else { }
  },
  qianjinpanduan1() {
    var that = this
    dian000y = a + 50 - 65 * Math.sin((90 - xuanzhuan) * Math.PI / 180)
    didiany = a + 50 - 60 * Math.sin((90 + 180 - xuanzhuan) * Math.PI / 180)
    che1zhanyong1panduan = 0
    che1zhanyong2panduan = 0
    che1zhanyong3panduan = 0
    for (var i = dian000y; i <= didiany; i++) {
      if (i < 800 && i >= 640)
        che1zhanyong1panduan++
      if (i < 740 && i >= 580)
        che1zhanyong2panduan++
      if (i < 680 && i >= 520)
        che1zhanyong3panduan++
    }
    if (che1zhanyong1panduan == 0)
      che1zhanyong1 = 0
    else che1zhanyong1 = 1
    if (che1zhanyong2panduan == 0)
      che1zhanyong2 = 0
    else che1zhanyong2 = 1
    if (che1zhanyong3panduan == 0)
      che1zhanyong3 = 0
    else che1zhanyong3 = 1
    if (didiany > 798 && didiany < 802) {
      rukuchedao2 = 0
      that.huabu()
    }
    if (didiany > 928 && didiany < 932) {
      rukuchedao1 = 0
      that.huabu()
    }
    if (dian000y > 798 && dian000y < 802) {
      that.huabu()
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y / 2,
        x: dian000x / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1()
            }, 10)
          else if (chewei1 == 0 && xian1 == 1) {
            xian1 = 0
            chewei1 = 1
            che1 = 1
            that.qianjin1()
            setTimeout(res => {
              ku10 = 1
              that.huabu()
            }, 100)
          }
          else that.qianjin1()
        }
      })
    }
    else if (dian000y > 738 && dian000y < 742) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y / 2,
        x: dian000x / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1()
            }, 10)
          else if (chewei2 == 0 && xian1 == 1) {
            xian1 = 0
            chewei2 = 1
            che1 = 2
            that.qianjin1()
            setTimeout(res => {
              ku20 = 1
              that.huabu()
            }, 100)
          }
          else that.qianjin1()
        }
      })
    }
    else if (dian000y > 678 && dian000y < 682) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y / 2,
        x: dian000x / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1()
            }, 10)
          else if (chewei3 == 0 && xian1 == 1) {
            chewei3 = 1
            che1 = 3
            that.qianjin1()
            setTimeout(res => {
              ku30 = 1
              that.huabu()
            }, 100)
          }
          else that.qianjin1()
        }
      })
    }
    else if (dian000y > 1058 && dian000y < 1062) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y / 2,
        x: dian000x / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1()
            }, 10)
          else {
            that.qianjin1()
            setTimeout(res => {
              rukuchedao1 = 1
              that.huabu()
            }, 100)
          }
        }
      })
    }
    else if (dian000y > 928 && dian000y < 932) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y / 2,
        x: dian000x / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1()
            }, 10)
          else {
            that.qianjin1()
            setTimeout(res => {
              rukuchedao2 = 1
              that.huabu()
            }, 100)
          }
        }
      })
    }
    else {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y / 2,
        x: dian000x / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            that.qianjinpanduan2()
          else
            that.qianjin1()
        }
      })
    }
  },
  qianjin1() {
    var that = this
    a = a - Math.cos(xuanzhuan * 2 * Math.PI / 360)
    b = b + Math.sin(xuanzhuan * 2 * Math.PI / 360)
    that.gengxin()
    if(wengding1==0)
    {wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian0y / 2,
      x: dian0x / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          {that.you1()
          wengding1=1}
        else
          that.zuo1()
      }
    })}
    else
    {wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian0y / 2,
      x: dian0x / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.you1()
        else
          that.qianjin11()
      }
    })}
    setTimeout(res => {
      that.setData({ xuanzhuan: xuanzhuan, top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y, dian2y: dian2y, dian2x: dian2x, dian0x: dian0x, dian0y: dian0y, dian00x: dian00x, dian00y: dian00y, dian000x: dian000x, dian000y: dian000y, dian3x: dian3x, dian3y: dian3y, dingdianx: dingdianx, dingdiany: dingdiany, dingdian1x: dingdian1x, dingdian1y: dingdian1y, dianxx: dianxx, dianyy: dianyy, dian1xx: dian1xx, dian1yy: dian1yy, didianx: didianx, didiany: didiany })
    }, 10)
  },
  qianjin11() {
    a = a - Math.cos(xuanzhuan * 2 * Math.PI / 360)
    b = b + Math.sin(xuanzhuan * 2 * Math.PI / 360)
    this.gengxin()
    setTimeout(res => {
      this.setData({ xuanzhuan: xuanzhuan, top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y, dian2y: dian2y, dian2x: dian2x, dian0x: dian0x, dian0y: dian0y, dian00x: dian00x, dian00y: dian00y, dian000x: dian000x, dian000y: dian000y, dian3x: dian3x, dian3y: dian3y, dingdianx: dingdianx, dingdiany: dingdiany, dingdian1x: dingdian1x, dingdian1y: dingdian1y, dianxx: dianxx, dianyy: dianyy, dian1xx: dian1xx, dian1yy: dian1yy, didianx: didianx, didiany: didiany })
      this.qianjinpanduan1()
    }, 10)
  },
  you1() {
    xuanzhuan = xuanzhuan + 1
    this.gengxin()
    setTimeout(res => {
      this.setData({ xuanzhuan: xuanzhuan, top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y, dian2y: dian2y, dian2x: dian2x, dian0x: dian0x, dian0y: dian0y, dian00x: dian00x, dian00y: dian00y, dian000x: dian000x, dian000y: dian000y, dian3x: dian3x, dian3y: dian3y, dingdianx: dingdianx, dingdiany: dingdiany, dingdian1x: dingdian1x, dingdian1y: dingdian1y, dianxx: dianxx, dianyy: dianyy, dian1xx: dian1xx, dian1yy: dian1yy, didianx: didianx, didiany: didiany })
    }, 10)
    this.qianjinpanduan1()
  },
  zuo1() {
    xuanzhuan = xuanzhuan - 1
    this.gengxin()
    setTimeout(res => {
      this.setData({ xuanzhuan: xuanzhuan, top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y, dian2y: dian2y, dian2x: dian2x, dian0x: dian0x, dian0y: dian0y, dian00x: dian00x, dian00y: dian00y, dian000x: dian000x, dian000y: dian000y, dian3x: dian3x, dian3y: dian3y, dingdianx: dingdianx, dingdiany: dingdiany, dingdian1x: dingdian1x, dingdian1y: dingdian1y, dianxx: dianxx, dianyy: dianyy, dian1xx: dian1xx, dian1yy: dian1yy, didianx: didianx, didiany: didiany })
    }, 10)
    this.qianjinpanduan1()
  },
  qianjinpanduan2() {
    var that = this
    this.setData({ dian0xian: 0, dian000xian: 0, dingdianxian: 1, dian11xian: 1, dian2xian: 1, didianxian: 1 })
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: didiany / 2,
      x: didianx / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.tingche2()
        else
          that.qianjinpanduan21()
      }
    })
  },
  tingche2() {
    che1zhanyong1 = 0
    che1zhanyong2 = 0
    che1zhanyong3 = 0
    ruku1 = 2
    if (che1 == 1) {
      ku10 = 0
      ku11 = 0
    }
    else if (che1 == 2) {
      ku20 = 0
      ku21 = 0
    }
    else if (che1 == 3) {
      ku30 = 0
      ku31 = 0
    }
    this.huabu()
  },
  qianjinpanduan21() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian2y / 2,
      x: dian2x / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.zuo2()
        else
          that.qianjinpanduan22()
      }
    })
  },
  qianjinpanduan22() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian1yy / 2,
      x: dian1xx / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin2()
        else
          that.qianjinpanduan23()
      }
    })
  },
  qianjinpanduan23() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dingdiany / 2,
      x: dingdianx / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin2()
        else
          that.zuo2()
      }
    })
  },
  qianjin2() {
    var that = this
    a = a + Math.cos(xuanzhuan * 2 * Math.PI / 360)
    b = b - Math.sin(xuanzhuan * 2 * Math.PI / 360)
    that.gengxin()
    setTimeout(res => {
      that.setData({ xuanzhuan: xuanzhuan, top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y, dian2y: dian2y, dian2x: dian2x, dian0x: dian0x, dian0y: dian0y, dian00x: dian00x, dian00y: dian00y, dian000x: dian000x, dian000y: dian000y, dian3x: dian3x, dian3y: dian3y, dingdianx: dingdianx, dingdiany: dingdiany, dingdian1x: dingdian1x, dingdian1y: dingdian1y, dianxx: dianxx, dianyy: dianyy, dian1xx: dian1xx, dian1yy: dian1yy, didianx: didianx, didiany: didiany })
    })
    that.qianjinpanduan2()
  },
  you2() {
    xuanzhuan = xuanzhuan + 1
    this.gengxin()
    setTimeout(res => {
      this.setData({ xuanzhuan: xuanzhuan, top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y, dian2y: dian2y, dian2x: dian2x, dian0x: dian0x, dian0y: dian0y, dian00x: dian00x, dian00y: dian00y, dian000x: dian000x, dian000y: dian000y, dian3x: dian3x, dian3y: dian3y, dingdianx: dingdianx, dingdiany: dingdiany, dingdian1x: dingdian1x, dingdian1y: dingdian1y, dianxx: dianxx, dianyy: dianyy, dian1xx: dian1xx, dian1yy: dian1yy, didianx: didianx, didiany: didiany })
    }, 10)
    this.qianjinpanduan2()
  },
  zuo2() {
    xuanzhuan = xuanzhuan - 1
    this.gengxin()
    setTimeout(res => {
      this.setData({ xuanzhuan: xuanzhuan, top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y, dian2y: dian2y, dian2x: dian2x, dian0x: dian0x, dian0y: dian0y, dian00x: dian00x, dian00y: dian00y, dian000x: dian000x, dian000y: dian000y, dian3x: dian3x, dian3y: dian3y, dingdianx: dingdianx, dingdiany: dingdiany, dingdian1x: dingdian1x, dingdian1y: dingdian1y, dianxx: dianxx, dianyy: dianyy, dian1xx: dian1xx, dian1yy: dian1yy, didianx: didianx, didiany: didiany })
    }, 10)
    this.qianjinpanduan2()
  },
  jieshu1() {
    this.setData({ dingdianxian: 0, didianxian: 0, dian11xian: 0, dian1xian: 1, dian000xian: 1, dian0xian: 1 })
    if (ruku1 == 2) {
      ruku1 = 3
      this.chuku()
    }
    else { }
  },
  chuku() {
    if (che1 == 1) {
      if (che2zhanyong1 == 1 || che3zhanyong1 == 1) {
        ku10 = 1
        this.huabu()
        setTimeout(res => {
          this.chuku()
        }, 10)
      }
      else {
        ku10 = 1
        this.huabu()
        this.qianjinpanduan3()
      }
    }
    else if (che1 == 2) {
      if ((che2zhanyong2 == 1 || che3zhanyong2 == 1) && ku10 == 0) {
        ku20 = 1
        this.huabu()
        setTimeout(res => {
          this.chuku()
        }, 10)
      }
      else if (k10 == 1)
        setTimeout(res => {
          this.chuku()
        }, 10)
      else {
        ku20 = 1
        this.huabu()
        this.qianjinpanduan3()
      }
    }
    else if (che1 == 3) {
      if ((che2zhanyong3 == 1 || che3zhanyong3 == 1) && ku20 == 0) {
        ku30 = 1
        this.huabu()
        setTimeout(res => {
          this.chuku()
        }, 10)
      }
      else if (ku20 == 1)
        setTimeout(res => {
          this.chuku()
        }, 10)
      else {
        ku30 = 1
        this.huabu()
        this.qianjinpanduan3()
      }
    }
  },
  qianjinpanduan3() {
    var that = this
    che1zhanyong1panduan = 0
    che1zhanyong2panduan = 0
    che1zhanyong3panduan = 0
    for (var i = dian000y; i <= didiany; i++) {
      if (i < 800 && i >= 640)
        che1zhanyong1panduan++
      if (i < 740 && i >= 580)
        che1zhanyong2panduan++
      if (i < 680 && i >= 520)
        che1zhanyong3panduan++
    }
    if (che1zhanyong1panduan == 0)
      che1zhanyong1 = 0
    else che1zhanyong1 = 1
    if (che1zhanyong2panduan == 0)
      che1zhanyong2 = 0
    else che1zhanyong2 = 1
    if (che1zhanyong3panduan == 0)
      che1zhanyong3 = 0
    else che1zhanyong3 = 1
    if (didiany > 278 && didiany < 282) {
      chukuchedao1 = 0
      that.huabu()
    }
    if (didiany > 148 && didiany < 152) {
      chukuchedao2 = 0
      that.huabu()
    }
    if (didiany > 18 && didiany < 22) {
      chukuchedao3 = 0
      that.huabu()
    }
    if (dian000y > 798 && dian000y < 802) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y / 2,
        x: dian000x / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan3()
            }, 10)
          else that.qianjinpanduan31()
        }
      })
    }
    else if (dian000y > 738 && dian000y < 742) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y / 2,
        x: dian000x / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan3()
            }, 10)
          else that.qianjinpanduan31()
        }
      })
    }
    else if (dian000y > 678 && dian000y < 682) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y / 2,
        x: dian000x / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan3()
            }, 10)
          else that.qianjinpanduan31()
        }
      })
    }
    else if (dian000y > 638 && dian000y < 642) {
      if (che1 == 1) {
        ku10 = 0
        that.huabu()
        setTimeout(res => {
          ku11 = 1
          that.huabu()
        }, 100)
        che1 = 1
        chewei1 = 0
        that.qianjinpanduan31()
      }
      else {
        if (ku11 == 1) {
          ku11 = 0
          that.huabu()
          setTimeout(res => {
            ku11 = 1
            that.huabu()
          }, 100)
          that.qianjinpanduan31()
        }
        else {
          that.qianjinpanduan31()
        }
      }
    }
    else if (dian000y > 578 && dian000y < 582) {
      if (che1 == 2) {
        ku20 = 0
        that.huabu()
        setTimeout(res => {
          ku21 = 1
          that.huabu()
        }, 100)
        che1 = 0
        chewei2 = 0
        that.qianjinpanduan31()
      }
      else {
        if (ku21 == 1) {
          ku21 = 0
          that.huabu()
          setTimeout(res => {
            ku21 = 1
            that.huabu()
          }, 100)
          that.qianjinpanduan31()
        }
        else that.qianjinpanduan31()
      }
    }
    else if (dian000y > 518 && dian000y < 522) {
      if (che1 == 3) {
        ku30 = 0
        that.huabu()
        setTimeout(res => {
          ku31 = 1
          that.huabu()
        }, 100)
        che1 = 0
        chewei3 = 0
        that.qianjinpanduan31()
      }
      else {
        if (ku31 == 1) {
          ku31 = 0
          that.huabu()
          setTimeout(res => {
            ku31 = 1
            that.huabu()
          }, 100)
          that.qianjinpanduan31()
        }
        else that.qianjinpanduan31()
      }
    }
    else if (dian000y > 408 && dian000y < 412) {
      if (chukuchedao1 == 0) {
        that.qianjinpanduan31()
        setTimeout(res => {
          chukuchedao1 = 1
          that.huabu()
        }, 100)
      }
      else setTimeout(res => {
        that.qianjinpanduan3()
      }, 10)
    }
    else if (dian000y > 278 && dian000y < 282) {
      if (chukuchedao2 == 0) {
        that.qianjinpanduan31()
        setTimeout(res => {
          chukuchedao2 = 1
          that.huabu()
        }, 100)
      }
      else setTimeout(res => {
        that.qianjinpanduan3()
      }, 10)
    }
    else if (dian000y > 148 && dian000y < 152) {
      if (chukuchedao3 == 0) {
        that.qianjinpanduan31()
        setTimeout(res => {
          chukuchedao3 = 1
          that.huabu()
        }, 100)
      }
      else setTimeout(res => {
        that.qianjinpanduan3()
      }, 10)
    }
    else if (dian000y > 18 && dian000y < 22) {

    }
    else that.qianjinpanduan31()
  },
  qianjinpanduan31() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian2x / 2,
      x: dian2y / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin3()
        else
          that.qianjinpanduan32()
      }
    })
  },
  qianjinpanduan32() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian1y / 2,
      x: dian1x / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin3()
        else {
          if (xuanzhuan < -10)
            that.you3()
          else
            that.qianjinpanduan33()
        }
      }
    })
  },
  qianjinpanduan33() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian0y / 2,
      x: dian0x / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.you3()
        else
          that.qianjin3()
      }
    })
  },
  qianjin3() {
    var that = this
    a = a - Math.cos(xuanzhuan * 2 * Math.PI / 360)
    b = b + Math.sin(xuanzhuan * 2 * Math.PI / 360)
    that.gengxin()
    setTimeout(res => {
      that.setData({ xuanzhuan: xuanzhuan, top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y, dian2y: dian2y, dian2x: dian2x, dian0x: dian0x, dian0y: dian0y, dian00x: dian00x, dian00y: dian00y, dian000x: dian000x, dian000y: dian000y, dian3x: dian3x, dian3y: dian3y, dingdianx: dingdianx, dingdiany: dingdiany, dingdian1x: dingdian1x, dingdian1y: dingdian1y, dianxx: dianxx, dianyy: dianyy, dian1xx: dian1xx, dian1yy: dian1yy, didianx: didianx, didiany: didiany })
    }, 10)
    that.qianjinpanduan3()
  },
  you3() {
    xuanzhuan = xuanzhuan + 1
    this.gengxin()
    setTimeout(res => {
      this.setData({ xuanzhuan: xuanzhuan, top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y, dian2y: dian2y, dian2x: dian2x, dian0x: dian0x, dian0y: dian0y, dian00x: dian00x, dian00y: dian00y, dian000x: dian000x, dian000y: dian000y, dian3x: dian3x, dian3y: dian3y, dingdianx: dingdianx, dingdiany: dingdiany, dingdian1x: dingdian1x, dingdian1y: dingdian1y, dianxx: dianxx, dianyy: dianyy, dian1xx: dian1xx, dian1yy: dian1yy, didianx: didianx, didiany: didiany })
    }, 10)
    this.qianjinpanduan3()
  },
  zuo3() {
    xuanzhuan = xuanzhuan - 1
    this.gengxin()
    setTimeout(res => {
      this.setData({ xuanzhuan: xuanzhuan, top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y, dian2y: dian2y, dian2x: dian2x, dian0x: dian0x, dian0y: dian0y, dian00x: dian00x, dian00y: dian00y, dian000x: dian000x, dian000y: dian000y, dian3x: dian3x, dian3y: dian3y, dingdianx: dingdianx, dingdiany: dingdiany, dingdian1x: dingdian1x, dingdian1y: dingdian1y, dianxx: dianxx, dianyy: dianyy, dian1xx: dian1xx, dian1yy: dian1yy, didianx: didianx, didiany: didiany })
    }, 10)
    this.qianjinpanduan3()
  },




  gengxin1() {
    dingdiany1 = a1 + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(-5 / 2) + (180 - xuanzhuan1) * Math.PI / 180)
    dingdianx1 = b1 + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(-5 / 2) + (180 - xuanzhuan1) * Math.PI / 180)
    dingdian1y1 = a1 + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(50 / 20) - xuanzhuan1 * Math.PI / 180)
    dingdian1x1 = b1 + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(50 / 20) - xuanzhuan1 * Math.PI / 180)
    dian0y1 = a1 + 50 - Math.sqrt(30 * 30 + 65 * 65) * Math.sin(Math.atan(-65 / 30) + (180 - xuanzhuan1) * Math.PI / 180)
    dian0x1 = b1 + 20 + Math.sqrt(30 * 30 + 65 * 65) * Math.cos(Math.atan(-65 / 30) + (180 - xuanzhuan1) * Math.PI / 180)
    dian00y1 = a1 + 50 - Math.sqrt(30 * 30 + 65 * 65) * Math.sin(Math.atan(65 / 30) - xuanzhuan1 * Math.PI / 180)
    dian00x1 = b1 + 20 + Math.sqrt(30 * 30 + 65 * 65) * Math.cos(Math.atan(65 / 30) - xuanzhuan1 * Math.PI / 180)
    dian000y1 = a1 + 50 - 65 * Math.sin((90 - xuanzhuan1) * Math.PI / 180)
    dian000x1 = b1 + 20 + 65 * Math.cos((90 - xuanzhuan1) * Math.PI / 180)
    diany1 = a1 + 50 - Math.sqrt(30 * 30 + 0 * 0) * Math.sin(Math.atan(-0 / 3) + (180 - xuanzhuan1) * Math.PI / 180)
    dianx1 = b1 + 20 + Math.sqrt(30 * 30 + 0 * 0) * Math.cos(Math.atan(-0 / 3) + (180 - xuanzhuan1) * Math.PI / 180)
    dian1y1 = a1 + 50 - Math.sqrt(30 * 30 + 0 * 0) * Math.sin(Math.atan(0 / 3) - xuanzhuan1 * Math.PI / 180)
    dian1x1 = b1 + 20 + Math.sqrt(30 * 30 + 0 * 0) * Math.cos(Math.atan(0 / 3) - xuanzhuan1 * Math.PI / 180)
    dian2y1 = a1 + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(5 / 2) + (180 - xuanzhuan1) * Math.PI / 180)
    dian2x1 = b1 + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(5 / 2) + (180 - xuanzhuan1) * Math.PI / 180)
    dian3y1 = a1 + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(-5 / 2) - xuanzhuan1 * Math.PI / 180)
    dian3x1 = b1 + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(-5 / 2) - xuanzhuan1 * Math.PI / 180)
    dianyy1 = a1 + 50 - Math.sqrt(30 * 30 + 20 * 20) * Math.sin(Math.atan(2 / 3) + (180 - xuanzhuan1) * Math.PI / 180)
    dianxx1 = b1 + 20 + Math.sqrt(30 * 30 + 20 * 20) * Math.cos(Math.atan(2 / 3) + (180 - xuanzhuan1) * Math.PI / 180)
    dian1yy1 = a1 + 50 - Math.sqrt(30 * 30 + 20 * 20) * Math.sin(Math.atan(-2 / 3) - xuanzhuan1 * Math.PI / 180)
    dian1xx1 = b1 + 20 + Math.sqrt(30 * 30 + 20 * 20) * Math.cos(Math.atan(-2 / 3) - xuanzhuan1 * Math.PI / 180)
    didiany1 = a1 + 50 - 60 * Math.sin((90 + 180 - xuanzhuan1) * Math.PI / 180)
    didianx1 = b1 + 20 + 60 * Math.cos((90 + 180 - xuanzhuan1) * Math.PI / 180)
  },
  kaishi2() {
    this.setData({ dian000xian1: 1, dian0xian1: 1 })
    if (ruku2 == 0) {
      ruku2 = 1
      this.qianjinpanduan1a1()
    }
    else { }
  },
  qianjinpanduan1a1() {
    var that = this
    dian000y1 = a1 + 50 - 65 * Math.sin((90 - xuanzhuan1) * Math.PI / 180)
    didiany1 = a1 + 50 - 60 * Math.sin((90 + 180 - xuanzhuan1) * Math.PI / 180)
    che2zhanyong1panduan = 0
    che2zhanyong2panduan = 0
    che2zhanyong3panduan = 0
    for (var i = dian000y1; i <= didiany1; i++) {
      if (i < 800 && i >= 640)
        che2zhanyong1panduan++
      if (i < 740 && i >= 580)
        che2zhanyong2panduan++
      if (i < 680 && i >= 520)
        che2zhanyong3panduan++
    }
    if (che2zhanyong1panduan == 0)
      che2zhanyong1 = 0
    else che2zhanyong1 = 1
    if (che2zhanyong2panduan == 0)
      che2zhanyong2 = 0
    else che2zhanyong2 = 1
    if (che2zhanyong3panduan == 0)
      che2zhanyong3 = 0
    else che2zhanyong3 = 1
    if (didiany1 > 798 && didiany1 < 802) {
      rukuchedao2 = 0
      that.huabu()
    }
    if (didiany1 > 928 && didiany1 < 932) {
      rukuchedao1 = 0
      that.huabu()
    }
    if (dian000y1 > 798 && dian000y1 < 802) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y1 / 2,
        x: dian000x1 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1a1()
            }, 10)
          else if (chewei1 == 0 && xian2 == 1) {
            xian2 = 0
            chewei1 = 2
            che2 = 1
            that.qianjin1a1()
            setTimeout(res => {
              ku10 = 1
              that.huabu()
            }, 1000)
          }
          else that.qianjin1a1()
        }
      })
    }
    else if (dian000y1 > 738 && dian000y1 < 742) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y1 / 2,
        x: dian000x1 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1a1()
            }, 10)
          else if (chewei2 == 0 && xian2 == 1) {
            xian2 = 0
            chewei2 = 2
            che2 = 2
            that.qianjin1a1()
            setTimeout(res => {
              ku20 = 1
              that.huabu()
            }, 1000)
          }
          else that.qianjin1a1()
        }
      })
    }
    else if (dian000y1 > 678 && dian000y1 < 682) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y1 / 2,
        x: dian000x1 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1a1()
            }, 10)
          else if (chewei3 == 0 && xian2 == 1) {
            chewei3 = 2
            che2 = 3
            that.qianjin1a1()
            setTimeout(res => {
              ku30 = 1
              that.huabu()
            }, 1000)
          }
          else that.qianjin1a1()
        }
      })
    }
    else if (dian000y1 > 1058 && dian000y1 < 1062) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y1 / 2,
        x: dian000x1 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1a1()
            }, 10)
          else {
            that.qianjin1a1()
            setTimeout(res => {
              rukuchedao1 = 1
              that.huabu()
            }, 100)
          }
        }
      })
    }
    else if (dian000y1 > 928 && dian000y1 < 932) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y1 / 2,
        x: dian000x1 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1a1()
            }, 10)
          else {
            that.qianjin1a1()
            setTimeout(res => {
              rukuchedao2 = 1
              that.huabu()
            }, 100)
          }
        }
      })
    }
    else wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian000y1 / 2,
      x: dian000x1 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjinpanduan2a1()
        else
          that.qianjin1a1()
      }
    })
  },
  qianjin1a1() {
    var that = this
    a1 = a1 - Math.cos(xuanzhuan1 * 2 * Math.PI / 360)
    b1 = b1 + Math.sin(xuanzhuan1 * 2 * Math.PI / 360)
    that.gengxin1()
    if(wengding2==0)
    {wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian0y1 / 2,
      x: dian0x1 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          {that.you1a1()
          wengding2=1}
        else
          that.zuo1a1()
      }
    })}
    else 
    {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian0y1 / 2,
        x: dian0x1 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            that.you1a1()
          else
            that.qianjin11a1()
        }
      })
    }
    setTimeout(res => {
      that.setData({ xuanzhuan1: xuanzhuan1, top1: a1, left1: b1, dianx1: dianx1, diany1: diany1, dian1x1: dian1x1, dian1y1: dian1y1, dian2y1: dian2y1, dian2x1: dian2x1, dian0x1: dian0x1, dian0y1: dian0y1, dian00x1: dian00x1, dian00y1: dian00y1, dian000x1: dian000x1, dian000y1: dian000y1, dian3x1: dian3x1, dian3y1: dian3y1, dingdianx1: dingdianx1, dingdiany1: dingdiany1, dingdian1x1: dingdian1x1, dingdian1y1: dingdian1y1, dianxx1: dianxx1, dianyy1: dianyy1, dian1xx1: dian1xx1, dian1yy1: dian1yy1, didianx1: didianx1, didiany1: didiany1 })
    }, 10)
  },
  qianjin11a1() {
    a1 = a1 - Math.cos(xuanzhuan1 * 2 * Math.PI / 360)
    b1 = b1 + Math.sin(xuanzhuan1 * 2 * Math.PI / 360)
    this.gengxin1()
    setTimeout(res => {
      this.setData({ xuanzhuan1: xuanzhuan1, top1: a1, left1: b1, dianx1: dianx1, diany1: diany1, dian1x1: dian1x1, dian1y1: dian1y1, dian2y1: dian2y1, dian2x1: dian2x1, dian0x1: dian0x1, dian0y1: dian0y1, dian00x1: dian00x1, dian00y1: dian00y1, dian000x1: dian000x1, dian000y1: dian000y1, dian3x1: dian3x1, dian3y1: dian3y1, dingdianx1: dingdianx1, dingdiany1: dingdiany1, dingdian1x1: dingdian1x1, dingdian1y1: dingdian1y1, dianxx1: dianxx1, dianyy1: dianyy1, dian1xx1: dian1xx1, dian1yy1: dian1yy1, didianx1: didianx1, didiany1: didiany1 })
      this.qianjinpanduan1a1()
    }, 10)
  },
  you1a1() {
    xuanzhuan1 = xuanzhuan1 + 1
    this.gengxin1()
    setTimeout(res => {
      this.setData({ xuanzhuan1: xuanzhuan1, top1: a1, left1: b1, dianx1: dianx1, diany1: diany1, dian1x1: dian1x1, dian1y1: dian1y1, dian2y1: dian2y1, dian2x1: dian2x1, dian0x1: dian0x1, dian0y1: dian0y1, dian00x1: dian00x1, dian00y1: dian00y1, dian000x1: dian000x1, dian000y1: dian000y1, dian3x1: dian3x1, dian3y1: dian3y1, dingdianx1: dingdianx1, dingdiany1: dingdiany1, dingdian1x1: dingdian1x1, dingdian1y1: dingdian1y1, dianxx1: dianxx1, dianyy1: dianyy1, dian1xx1: dian1xx1, dian1yy1: dian1yy1, didianx1: didianx1, didiany1: didiany1 })
    }, 10)
    this.qianjinpanduan1a1()
  },
  zuo1a1() {
    xuanzhuan1 = xuanzhuan1 - 1
    this.gengxin1()
    setTimeout(res => {
      this.setData({ xuanzhuan1: xuanzhuan1, top1: a1, left1: b1, dianx1: dianx1, diany1: diany1, dian1x1: dian1x1, dian1y1: dian1y1, dian2y1: dian2y1, dian2x1: dian2x1, dian0x1: dian0x1, dian0y1: dian0y1, dian00x1: dian00x1, dian00y1: dian00y1, dian000x1: dian000x1, dian000y1: dian000y1, dian3x1: dian3x1, dian3y1: dian3y1, dingdianx1: dingdianx1, dingdiany1: dingdiany1, dingdian1x1: dingdian1x1, dingdian1y1: dingdian1y1, dianxx1: dianxx1, dianyy1: dianyy1, dian1xx1: dian1xx1, dian1yy1: dian1yy1, didianx1: didianx1, didiany1: didiany1 })
    }, 10)
    this.qianjinpanduan1a1()
  },
  qianjinpanduan2a1() {
    var that = this
    this.setData({ dian0xian1: 0, dian000xian1: 0, dingdianxian1: 1, dian11xian1: 1, dian2xian1: 1, didianxian1: 1 })
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: didiany1 / 2,
      x: didianx1 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.tingche2a1()
        else
          that.qianjinpanduan21a1()
      }
    })
  },
  tingche2a1() {
    che2zhanyong1 = 0
    che2zhanyong2 = 0
    che2zhanyong3 = 0
    ruku2 = 2
    if (che2 == 1) {
      ku10 = 0
      ku11 = 0
      this.setData({ yanshi1: 0 })
    }
    else if (che2 == 2) {
      ku20 = 0
      ku21 = 0
    }
    else if (che2 == 3) {
      ku30 = 0
      ku31 = 0
    }
    this.huabu()
  },
  qianjinpanduan21a1() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian2y1 / 2,
      x: dian2x1 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.zuo2a1()
        else
          that.qianjinpanduan22a1()
      }
    })
  },
  qianjinpanduan22a1() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian1yy1 / 2,
      x: dian1xx1 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin2a1()
        else
          that.qianjinpanduan23a1()
      }
    })
  },
  qianjinpanduan23a1() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dingdiany1 / 2,
      x: dingdianx1 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin2a1()
        else
          that.zuo2a1()
      }
    })
  },
  qianjin2a1() {
    var that = this
    a1 = a1 + Math.cos(xuanzhuan1 * 2 * Math.PI / 360)
    b1 = b1 - Math.sin(xuanzhuan1 * 2 * Math.PI / 360)
    that.gengxin1()
    setTimeout(res => {
      that.setData({ xuanzhuan1: xuanzhuan1, top1: a1, left1: b1, dianx1: dianx1, diany1: diany1, dian1x1: dian1x1, dian1y1: dian1y1, dian2y1: dian2y1, dian2x1: dian2x1, dian0x1: dian0x1, dian0y1: dian0y1, dian00x1: dian00x1, dian00y1: dian00y1, dian000x1: dian000x1, dian000y1: dian000y1, dian3x1: dian3x1, dian3y1: dian3y1, dingdianx1: dingdianx1, dingdiany1: dingdiany1, dingdian1x1: dingdian1x1, dingdian1y1: dingdian1y1, dianxx1: dianxx1, dianyy1: dianyy1, dian1xx1: dian1xx1, dian1yy1: dian1yy1, didianx1: didianx1, didiany1: didiany1 })
    }, 10)
    that.qianjinpanduan2a1()
  },
  you2a1() {
    xuanzhuan1 = xuanzhuan1 + 1
    this.gengxin1()
    setTimeout(res => {
      this.setData({ xuanzhuan1: xuanzhuan1, top1: a1, left1: b1, dianx1: dianx1, diany1: diany1, dian1x1: dian1x1, dian1y1: dian1y1, dian2y1: dian2y1, dian2x1: dian2x1, dian0x1: dian0x1, dian0y1: dian0y1, dian00x1: dian00x1, dian00y1: dian00y1, dian000x1: dian000x1, dian000y1: dian000y1, dian3x1: dian3x1, dian3y1: dian3y1, dingdianx1: dingdianx1, dingdiany1: dingdiany1, dingdian1x1: dingdian1x1, dingdian1y1: dingdian1y1, dianxx1: dianxx1, dianyy1: dianyy1, dian1xx1: dian1xx1, dian1yy1: dian1yy1, didianx1: didianx1, didiany1: didiany1 })
    }, 10)
    this.qianjinpanduan2a1()
  },
  zuo2a1() {
    xuanzhuan1 = xuanzhuan1 - 1
    this.gengxin1()
    setTimeout(res => {
      this.setData({ xuanzhuan1: xuanzhuan1, top1: a1, left1: b1, dianx1: dianx1, diany1: diany1, dian1x1: dian1x1, dian1y1: dian1y1, dian2y1: dian2y1, dian2x1: dian2x1, dian0x1: dian0x1, dian0y1: dian0y1, dian00x1: dian00x1, dian00y1: dian00y1, dian000x1: dian000x1, dian000y1: dian000y1, dian3x1: dian3x1, dian3y1: dian3y1, dingdianx1: dingdianx1, dingdiany1: dingdiany1, dingdian1x1: dingdian1x1, dingdian1y1: dingdian1y1, dianxx1: dianxx1, dianyy1: dianyy1, dian1xx1: dian1xx1, dian1yy1: dian1yy1, didianx1: didianx1, didiany1: didiany1 })
    }, 10)
    this.qianjinpanduan2a1()
  },
  jieshu2() {
    this.setData({ dingdianxian1: 0, didianxian1: 0, dian11xian1: 0, dian1xian1: 1, dian000xian1: 1, dian0xian1: 1 })
    if (ruku2 == 2) {
      ruku2 = 3
      this.chuku1()
    }
    else { }
  },
  chuku1() {
    if (che2 == 1) {
      if (che1zhanyong1 == 1 || che3zhanyong1 == 1) {
        ku10 = 1
        this.huabu()
        setTimeout(res => {
          this.chuku1()
        }, 10)
      }
      else {
        ku10 = 1
        this.huabu()
        this.qianjinpanduan3a1()
      }
    }
    else if (che2 == 2) {
      if ((che1zhanyong2 == 1 || che3zhanyong2 == 1) && ku10 == 0) {
        ku20 = 1
        this.huabu()
        setTimeout(res => {
          this.chuku1()
        }, 10)
      }
      else if (ku10 == 1)
        setTimeout(res => {
          this.chuku1()
        }, 10)
      else {
        ku20 = 1
        this.huabu()
        this.qianjinpanduan3a1()
      }
    }
    else if (che2 == 3) {
      if ((che1zhanyong3 == 1 || che3zhanyong3 == 1) && ku20 == 0) {
        ku30 = 1
        this.huabu()
        setTimeout(res => {
          this.chuku1()
        }, 10)
      }
      else if (ku20 == 1)
        setTimeout(res => {
          this.chuku1()
        }, 10)
      else {
        ku30 = 1
        this.huabu()
        this.qianjinpanduan3a1()
      }
    }
  },
  qianjinpanduan3a1() {
    var that = this
    che2zhanyong1panduan = 0
    che2zhanyong2panduan = 0
    che2zhanyong3panduan = 0
    for (var i = dian000y1; i <= didiany1; i++) {
      if (i < 800 && i >= 640)
        che2zhanyong1panduan++
      if (i < 740 && i >= 580)
        che2zhanyong2panduan++
      if (i < 680 && i >= 520)
        che2zhanyong3panduan++
    }
    if (che2zhanyong1panduan == 0)
      che2zhanyong1 = 0
    else che2zhanyong1 = 1
    if (che2zhanyong2panduan == 0)
      che2zhanyong2 = 0
    else che2zhanyong2 = 1
    if (che2zhanyong3panduan == 0)
      che2zhanyong3 = 0
    else che2zhanyong3 = 1
    if (didiany1 > 278 && didiany1 < 282) {
      chukuchedao1 = 0
      that.huabu()
    }
    if (didiany1 > 148 && didiany1 < 152) {
      chukuchedao2 = 0
      that.huabu()
    }
    if (didiany1 > 18 && didiany1 < 22) {
      chukuchedao3 = 0
      that.huabu()
    }
    if (dian000y1 > 798 && dian000y1 < 802) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y1 / 2,
        x: dian000x1 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan3a1()
            }, 10)
          else that.qianjinpanduan31a1()
        }
      })
    }
    else if (dian000y1 > 738 && dian000y1 < 742) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y1 / 2,
        x: dian000x1 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan3a1()
            }, 10)
          else that.qianjinpanduan31a1()
        }
      })
    }
    else if (dian000y1 > 678 && dian000y1 < 682) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y1 / 2,
        x: dian000x1 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan3a1()
            }, 10)
          else that.qianjinpanduan31a1()
        }
      })
    }
    else if (dian000y1 > 638 && dian000y1 < 642) {
      if (che2 == 1) {
        ku10 = 0
        that.huabu()
        setTimeout(res => {
          ku11 = 1
          that.huabu()
        }, 100)
        che2 = 1
        chewei1 = 0
        that.qianjinpanduan31a1()
      }
      else {
        if (ku11 == 1) {
          ku11 = 0
          that.huabu()
          setTimeout(res => {
            ku11 = 1
            that.huabu()
          }, 100)
          that.qianjinpanduan31a1()
        }
        else that.qianjinpanduan31a1()
      }
    }
    else if (dian000y1 > 578 && dian000y1 < 582) {
      if (che2 == 2) {
        ku20 = 0
        that.huabu()
        setTimeout(res => {
          ku21 = 1
          that.huabu()
        }, 100)
        che2 = 0
        chewei2 = 0
        that.qianjinpanduan31a1()
      }
      else {
        if (ku21 == 1) {
          ku21 = 0
          that.huabu()
          setTimeout(res => {
            ku21 = 1
            that.huabu()
          }, 100)
          that.qianjinpanduan31a1()
        }
        else that.qianjinpanduan31a1()
      }
    }
    else if (dian000y1 > 518 && dian000y1 < 522) {
      if (che2 == 3) {
        ku30 = 0
        that.huabu()
        setTimeout(res => {
          ku31 = 1
          that.huabu()
        }, 100)
        che2 = 0
        chewei3 = 0
        that.qianjinpanduan31a1()
      }
      else {
        if (ku31 == 1) {
          ku31 = 0
          that.huabu()
          setTimeout(res => {
            ku31 = 1
            that.huabu()
          }, 100)
          that.qianjinpanduan31a1()
        }
        else that.qianjinpanduan31a1()
      }
    }
    else if (dian000y1 > 408 && dian000y1 < 412) {
      if (chukuchedao1 == 0) {
        that.qianjinpanduan31a1()
        setTimeout(res => {
          chukuchedao1 = 1
          that.huabu()
        }, 100)
      }
      else setTimeout(res => {
        that.qianjinpanduan3a1()
      }, 10)
    }
    else if (dian000y1 > 278 && dian000y1 < 282) {
      if (chukuchedao2 == 0) {
        that.qianjinpanduan31a1()
        setTimeout(res => {
          chukuchedao2 = 1
          that.huabu()
        }, 100)
      }
      else setTimeout(res => {
        that.qianjinpanduan3a1()
      }, 10)
    }
    else if (dian000y1 > 148 && dian000y1 < 152) {
      if (chukuchedao3 == 0) {
        that.qianjinpanduan31a1()
        setTimeout(res => {
          chukuchedao3 = 1
          that.huabu()
        }, 100)
      }
      else setTimeout(res => {
        that.qianjinpanduan3a1()
      }, 10)
    }
    else if (dian000y1 > 18 && dian000y1 < 22) {

    }
    else that.qianjinpanduan31a1()
  },
  qianjinpanduan31a1() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian2x1 / 2,
      x: dian2y1 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin3a1()
        else
          that.qianjinpanduan32a1()
      }
    })
  },
  qianjinpanduan32a1() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian1y1 / 2,
      x: dian1x1 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin3a1()
        else {
          if (xuanzhuan1 < -10)
            that.you3a1()
          else
            that.qianjinpanduan33a1()
        }
      }
    })
  },
  qianjinpanduan33a1() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian0y1 / 2,
      x: dian0x1 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.you3a1()
        else
          that.qianjin3a1()
      }
    })
  },
  qianjin3a1() {
    var that = this
    a1 = a1 - Math.cos(xuanzhuan1 * 2 * Math.PI / 360)
    b1 = b1 + Math.sin(xuanzhuan1 * 2 * Math.PI / 360)
    that.gengxin1()
    setTimeout(res => {
      that.setData({ xuanzhuan1: xuanzhuan1, top1: a1, left1: b1, dianx1: dianx1, diany1: diany1, dian1x1: dian1x1, dian1y1: dian1y1, dian2y1: dian2y1, dian2x1: dian2x1, dian0x1: dian0x1, dian0y1: dian0y1, dian00x1: dian00x1, dian00y1: dian00y1, dian000x1: dian000x1, dian000y1: dian000y1, dian3x1: dian3x1, dian3y1: dian3y1, dingdianx1: dingdianx1, dingdiany1: dingdiany1, dingdian1x1: dingdian1x1, dingdian1y1: dingdian1y1, dianxx1: dianxx1, dianyy1: dianyy1, dian1xx1: dian1xx1, dian1yy1: dian1yy1, didianx1: didianx1, didiany1: didiany1 })
    }, 10)
    that.qianjinpanduan3a1()
  },
  you3a1() {
    xuanzhuan1 = xuanzhuan1 + 1
    this.gengxin1()
    setTimeout(res => {
      this.setData({ xuanzhuan1: xuanzhuan1, top1: a1, left1: b1, dianx1: dianx1, diany1: diany1, dian1x1: dian1x1, dian1y1: dian1y1, dian2y1: dian2y1, dian2x1: dian2x1, dian0x1: dian0x1, dian0y1: dian0y1, dian00x1: dian00x1, dian00y1: dian00y1, dian000x1: dian000x1, dian000y1: dian000y1, dian3x1: dian3x1, dian3y1: dian3y1, dingdianx1: dingdianx1, dingdiany1: dingdiany1, dingdian1x1: dingdian1x1, dingdian1y1: dingdian1y1, dianxx1: dianxx1, dianyy1: dianyy1, dian1xx1: dian1xx1, dian1yy1: dian1yy1, didianx1: didianx1, didiany1: didiany1 })
    }, 10)
    this.qianjinpanduan3a1()
  },
  zuo3a1() {
    xuanzhuan1 = xuanzhuan1 - 1
    this.gengxin1()
    setTimeout(res => {
      this.setData({ xuanzhuan1: xuanzhuan1, top1: a1, left1: b1, dianx1: dianx1, diany1: diany1, dian1x1: dian1x1, dian1y1: dian1y1, dian2y1: dian2y1, dian2x1: dian2x1, dian0x1: dian0x1, dian0y1: dian0y1, dian00x1: dian00x1, dian00y1: dian00y1, dian000x1: dian000x1, dian000y1: dian000y1, dian3x1: dian3x1, dian3y1: dian3y1, dingdianx1: dingdianx1, dingdiany1: dingdiany1, dingdian1x1: dingdian1x1, dingdian1y1: dingdian1y1, dianxx1: dianxx1, dianyy1: dianyy1, dian1xx1: dian1xx1, dian1yy1: dian1yy1, didianx1: didianx1, didiany1: didiany1 })
    }, 10)
    this.qianjinpanduan3a1()
  },





  gengxin2() {
    dingdiany2 = a2 + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(-5 / 2) + (180 - xuanzhuan2) * Math.PI / 180)
    dingdianx2 = b2 + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(-5 / 2) + (180 - xuanzhuan2) * Math.PI / 180)
    dingdian1y2 = a2 + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(50 / 20) - xuanzhuan2 * Math.PI / 180)
    dingdian1x2 = b2 + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(50 / 20) - xuanzhuan2 * Math.PI / 180)
    dian0y2 = a2 + 50 - Math.sqrt(30 * 30 + 65 * 65) * Math.sin(Math.atan(-65 / 30) + (180 - xuanzhuan2) * Math.PI / 180)
    dian0x2 = b2 + 20 + Math.sqrt(30 * 30 + 65 * 65) * Math.cos(Math.atan(-65 / 30) + (180 - xuanzhuan2) * Math.PI / 180)
    dian00y2 = a2 + 50 - Math.sqrt(30 * 30 + 65 * 65) * Math.sin(Math.atan(65 / 30) - xuanzhuan2 * Math.PI / 180)
    dian00x2 = b2 + 20 + Math.sqrt(30 * 30 + 65 * 65) * Math.cos(Math.atan(65 / 30) - xuanzhuan2 * Math.PI / 180)
    dian000y2 = a2 + 50 - 65 * Math.sin((90 - xuanzhuan2) * Math.PI / 180)
    dian000x2 = b2 + 20 + 65 * Math.cos((90 - xuanzhuan2) * Math.PI / 180)
    diany2 = a2 + 50 - Math.sqrt(30 * 30 + 0 * 0) * Math.sin(Math.atan(-0 / 3) + (180 - xuanzhuan2) * Math.PI / 180)
    dianx2 = b2 + 20 + Math.sqrt(30 * 30 + 0 * 0) * Math.cos(Math.atan(-0 / 3) + (180 - xuanzhuan2) * Math.PI / 180)
    dian1y2 = a2 + 50 - Math.sqrt(30 * 30 + 0 * 0) * Math.sin(Math.atan(0 / 3) - xuanzhuan2 * Math.PI / 180)
    dian1x2 = b2 + 20 + Math.sqrt(30 * 30 + 0 * 0) * Math.cos(Math.atan(0 / 3) - xuanzhuan2 * Math.PI / 180)
    dian2y2 = a2 + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(5 / 2) + (180 - xuanzhuan2) * Math.PI / 180)
    dian2x2 = b2 + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(5 / 2) + (180 - xuanzhuan2) * Math.PI / 180)
    dian3y2 = a2 + 50 - Math.sqrt(20 * 20 + 50 * 50) * Math.sin(Math.atan(-5 / 2) - xuanzhuan2 * Math.PI / 180)
    dian3x2 = b2 + 20 + Math.sqrt(20 * 20 + 50 * 50) * Math.cos(Math.atan(-5 / 2) - xuanzhuan2 * Math.PI / 180)
    dianyy2 = a2 + 50 - Math.sqrt(30 * 30 + 20 * 20) * Math.sin(Math.atan(2 / 3) + (180 - xuanzhuan2) * Math.PI / 180)
    dianxx2 = b2 + 20 + Math.sqrt(30 * 30 + 20 * 20) * Math.cos(Math.atan(2 / 3) + (180 - xuanzhuan2) * Math.PI / 180)
    dian1yy2 = a2 + 50 - Math.sqrt(30 * 30 + 20 * 20) * Math.sin(Math.atan(-2 / 3) - xuanzhuan2 * Math.PI / 180)
    dian1xx2 = b2 + 20 + Math.sqrt(30 * 30 + 20 * 20) * Math.cos(Math.atan(-2 / 3) - xuanzhuan2 * Math.PI / 180)
    didiany2 = a2 + 50 - 60 * Math.sin((90 + 180 - xuanzhuan2) * Math.PI / 180)
    didianx2 = b2 + 20 + 60 * Math.cos((90 + 180 - xuanzhuan2) * Math.PI / 180)
  },
  kaishi3() {
    this.setData({ dian000xian2: 1, dian0xian2: 1 })
    if (ruku3 == 0) {
      ruku3 = 1
      this.qianjinpanduan1a2()
    }
    else { }
  },
  qianjinpanduan1a2() {
    var that = this
    dian000y2 = a2 + 50 - 65 * Math.sin((90 - xuanzhuan2) * Math.PI / 180)
    didiany = a + 50 - 60 * Math.sin((90 + 180 - xuanzhuan) * Math.PI / 180)
    che3zhanyong1panduan = 0
    che3zhanyong2panduan = 0
    che3zhanyong3panduan = 0
    for (var i = dian000y2; i <= didiany2; i++) {
      if (i < 800 && i >= 640)
        che3zhanyong1panduan++
      if (i < 740 && i >= 580)
        che3zhanyong2panduan++
      if (i < 680 && i >= 520)
        che3zhanyong3panduan++
    }
    if (che3zhanyong1panduan == 0)
      che3zhanyong1 = 0
    else che3zhanyong1 = 1
    if (che3zhanyong2panduan == 0)
      che3zhanyong2 = 0
    else che3zhanyong2 = 1
    if (che3zhanyong3panduan == 0)
      che3zhanyong3 = 0
    else che3zhanyong3 = 1
    if (didiany2 > 798 && didiany2 < 802) {
      rukuchedao2 = 0
      that.huabu()
    }
    if (didiany2 > 928 && didiany2 < 932) {
      rukuchedao1 = 0
      that.huabu()
    }
    if (dian000y2 > 798 && dian000y2 < 802) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y2 / 2,
        x: dian000x2 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1a2()
            }, 10)
          else if (chewei1 == 0 && xian3 == 1) {
            xian3 = 0
            chewei1 = 3
            che3 = 1
            that.qianjin1a2()
            setTimeout(res => {
              ku10 = 1
              that.huabu()
            }, 1000)
          }
          else that.qianjin1a2()
        }
      })
    }
    else if (dian000y2 > 738 && dian000y2 < 742) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y2 / 2,
        x: dian000x2 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1a2()
            }, 10)
          else if (chewei2 == 0 && xian3 == 1) {
            xian3 = 0
            chewei2 = 3
            che3 = 2
            that.qianjin1a2()
            setTimeout(res => {
              ku20 = 1
              that.huabu()
            }, 1000)
          }
          else that.qianjin1a2()
        }
      })
    }
    else if (dian000y2 > 678 && dian000y2 < 682) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y2 / 2,
        x: dian000x2 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1a2()
            }, 10)
          else if (chewei3 == 0 && xian3 == 1) {
            chewei3 = 3
            che3 = 3
            that.qianjin1a2()
            setTimeout(res => {
              ku30 = 1
              that.huabu()
            }, 1000)
          }
          else that.qianjin1a2()
        }
      })
    }
    else if (dian000y2 > 1058 && dian000y2 < 1062) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y2 / 2,
        x: dian000x2 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1a2()
            }, 10)
          else {
            that.qianjin1a2()
            setTimeout(res => {
              rukuchedao1 = 1
              that.huabu()
            }, 100)
          }
        }
      })
    }
    else if (dian000y2 > 928 && dian000y2 < 932) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y2 / 2,
        x: dian000x2 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan1a2()
            }, 10)
          else {
            that.qianjin1a2()
            setTimeout(res => {
              rukuchedao2 = 1
              that.huabu()
            }, 100)
          }
        }
      })
    }
    else wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian000y2 / 2,
      x: dian000x2 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjinpanduan2a2()
        else
          that.qianjin1a2()
      }
    })
  },
  qianjin1a2() {
    var that = this
    a2 = a2 - Math.cos(xuanzhuan2 * 2 * Math.PI / 360)
    b2 = b2 + Math.sin(xuanzhuan2 * 2 * Math.PI / 360)
    that.gengxin2()
    if(wengding3==0)
    {wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian0y2 / 2,
      x: dian0x2 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          {that.you1a2()
          wengding3=1}
        else
          that.zuo1a2()
      }
    })}
    else 
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian0y2 / 2,
      x: dian0x2 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0) 
          that.you1a2() 
        else
          that.qianjin11a2()
      }
    })
    setTimeout(res => {
      that.setData({ xuanzhuan2: xuanzhuan2, top2: a2, left2: b2, dianx2: dianx2, diany2: diany2, dian1x2: dian1x2, dian1y2: dian1y2, dian2y2: dian2y2, dian2x2: dian2x2, dian0x2: dian0x2, dian0y2: dian0y2, dian00x2: dian00x2, dian00y2: dian00y2, dian000x2: dian000x2, dian000y2: dian000y2, dian3x2: dian3x2, dian3y2: dian3y2, dingdianx2: dingdianx2, dingdiany2: dingdiany2, dingdian1x2: dingdian1x2, dingdian1y2: dingdian1y2, dianxx2: dianxx2, dianyy2: dianyy2, dian1xx2: dian1xx2, dian1yy2: dian1yy2, didianx2: didianx2, didiany2: didiany2 })
    }, 10)
  },
  qianjin11a2() {
    a2 = a2 - Math.cos(xuanzhuan2 * 2 * Math.PI / 360)
    b2 = b2 + Math.sin(xuanzhuan2 * 2 * Math.PI / 360)
    this.gengxin2()
    setTimeout(res => {
      this.setData({ xuanzhuan2: xuanzhuan2, top2: a2, left2: b2, dianx2: dianx2, diany2: diany2, dian1x2: dian1x2, dian1y2: dian1y2, dian2y2: dian2y2, dian2x2: dian2x2, dian0x2: dian0x2, dian0y2: dian0y2, dian00x2: dian00x2, dian00y2: dian00y2, dian000x2: dian000x2, dian000y2: dian000y2, dian3x2: dian3x2, dian3y2: dian3y2, dingdianx2: dingdianx2, dingdiany2: dingdiany2, dingdian1x2: dingdian1x2, dingdian1y2: dingdian1y2, dianxx2: dianxx2, dianyy2: dianyy2, dian1xx2: dian1xx2, dian1yy2: dian1yy2, didianx2: didianx2, didiany2: didiany2 })
      this.qianjinpanduan1a2()
    }, 10)
  },
  you1a2() {
    xuanzhuan2 = xuanzhuan2 + 1
    this.gengxin2()
    setTimeout(res => {
      this.setData({ xuanzhuan2: xuanzhuan2, top2: a2, left2: b2, dianx2: dianx2, diany2: diany2, dian1x2: dian1x2, dian1y2: dian1y2, dian2y2: dian2y2, dian2x2: dian2x2, dian0x2: dian0x2, dian0y2: dian0y2, dian00x2: dian00x2, dian00y2: dian00y2, dian000x2: dian000x2, dian000y2: dian000y2, dian3x2: dian3x2, dian3y2: dian3y2, dingdianx2: dingdianx2, dingdiany2: dingdiany2, dingdian1x2: dingdian1x2, dingdian1y2: dingdian1y2, dianxx2: dianxx2, dianyy2: dianyy2, dian1xx2: dian1xx2, dian1yy2: dian1yy2, didianx2: didianx2, didiany2: didiany2 })
    }, 10)
    this.qianjinpanduan1a2()
  },
  zuo1a2() {
    xuanzhuan2 = xuanzhuan2 - 1
    this.gengxin2()
    setTimeout(res => {
      this.setData({ xuanzhuan2: xuanzhuan2, top2: a2, left2: b2, dianx2: dianx2, diany2: diany2, dian1x2: dian1x2, dian1y2: dian1y2, dian2y2: dian2y2, dian2x2: dian2x2, dian0x2: dian0x2, dian0y2: dian0y2, dian00x2: dian00x2, dian00y2: dian00y2, dian000x2: dian000x2, dian000y2: dian000y2, dian3x2: dian3x2, dian3y2: dian3y2, dingdianx2: dingdianx2, dingdiany2: dingdiany2, dingdian1x2: dingdian1x2, dingdian1y2: dingdian1y2, dianxx2: dianxx2, dianyy2: dianyy2, dian1xx2: dian1xx2, dian1yy2: dian1yy2, didianx2: didianx2, didiany2: didiany2 })
    }, 10)
    this.qianjinpanduan1a2()
  },
  qianjinpanduan2a2() {
    var that = this
    this.setData({ dian0xian2: 0, dian000xian2: 0, dingdianxian2: 1, dian11xian2: 1, dian2xian2: 1, didianxian2: 1 })
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: didiany2 / 2,
      x: didianx2 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.tingche2a2()
        else
          that.qianjinpanduan21a2()
      }
    })
  },
  tingche2a2() {
    che3zhanyong1 = 0
    che3zhanyong2 = 0
    che3zhanyong3 = 0
    ruku3 = 2
    if (che3 == 1) {
      ku10 = 0
      ku11 = 0
    }
    else if (che3 == 2) {
      ku20 = 0
      ku21 = 0
    }
    else if (che3 == 3) {
      ku30 = 0
      ku31 = 0
    }
    this.huabu()
  },
  qianjinpanduan21a2() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian2y2 / 2,
      x: dian2x2 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.zuo2a2()
        else
          that.qianjinpanduan22a2()
      }
    })
  },
  qianjinpanduan22a2() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian1yy2 / 2,
      x: dian1xx2 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin2a2()
        else
          that.qianjinpanduan23a2()
      }
    })
  },
  qianjinpanduan23a2() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dingdiany2 / 2,
      x: dingdianx2 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin2a2()
        else
          that.zuo2a2()
      }
    })
  },
  qianjin2a2() {
    var that = this
    a2 = a2 + Math.cos(xuanzhuan2 * 2 * Math.PI / 360)
    b2 = b2 - Math.sin(xuanzhuan2 * 2 * Math.PI / 360)
    that.gengxin2()
    setTimeout(res => {
      that.setData({ xuanzhuan2: xuanzhuan2, top2: a2, left2: b2, dianx2: dianx2, diany2: diany2, dian1x2: dian1x2, dian1y2: dian1y2, dian2y2: dian2y2, dian2x2: dian2x2, dian0x2: dian0x2, dian0y2: dian0y2, dian00x2: dian00x2, dian00y2: dian00y2, dian000x2: dian000x2, dian000y2: dian000y2, dian3x2: dian3x2, dian3y2: dian3y2, dingdianx2: dingdianx2, dingdiany2: dingdiany2, dingdian1x2: dingdian1x2, dingdian1y2: dingdian1y2, dianxx2: dianxx2, dianyy2: dianyy2, dian1xx2: dian1xx2, dian1yy2: dian1yy2, didianx2: didianx2, didiany2: didiany2 })
    }, 10)
    that.qianjinpanduan2a2()
  },
  you2a2() {
    xuanzhuan2 = xuanzhuan2 + 1
    this.gengxin2()
    setTimeout(res => {
      this.setData({ xuanzhuan2: xuanzhuan2, top2: a2, left2: b2, dianx2: dianx2, diany2: diany2, dian1x2: dian1x2, dian1y2: dian1y2, dian2y2: dian2y2, dian2x2: dian2x2, dian0x2: dian0x2, dian0y2: dian0y2, dian00x2: dian00x2, dian00y2: dian00y2, dian000x2: dian000x2, dian000y2: dian000y2, dian3x2: dian3x2, dian3y2: dian3y2, dingdianx2: dingdianx2, dingdiany2: dingdiany2, dingdian1x2: dingdian1x2, dingdian1y2: dingdian1y2, dianxx2: dianxx2, dianyy2: dianyy2, dian1xx2: dian1xx2, dian1yy2: dian1yy2, didianx2: didianx2, didiany2: didiany2 })
    }, 10)
    this.qianjinpanduan2a2()
  },
  zuo2a2() {
    xuanzhuan2 = xuanzhuan2 - 1
    this.gengxin2()
    setTimeout(res => {
      this.setData({ xuanzhuan2: xuanzhuan2, top2: a2, left2: b2, dianx2: dianx2, diany2: diany2, dian1x2: dian1x2, dian1y2: dian1y2, dian2y2: dian2y2, dian2x2: dian2x2, dian0x2: dian0x2, dian0y2: dian0y2, dian00x2: dian00x2, dian00y2: dian00y2, dian000x2: dian000x2, dian000y2: dian000y2, dian3x2: dian3x2, dian3y2: dian3y2, dingdianx2: dingdianx2, dingdiany2: dingdiany2, dingdian1x2: dingdian1x2, dingdian1y2: dingdian1y2, dianxx2: dianxx2, dianyy2: dianyy2, dian1xx2: dian1xx2, dian1yy2: dian1yy2, didianx2: didianx2, didiany2: didiany2 })
    }, 10)
    this.qianjinpanduan2a2()
  },
  jieshu3() {
    this.setData({ dingdianxian2: 0, didianxian2: 0, dian11xian2: 0, dian1xian2: 1, dian000xian2: 1, dian0xian2: 1 })
    if (ruku3 == 2) {
      ruku3 = 3
      this.chuku2()
    }
    else { }
  },
  chuku2() {
    if (che3 == 1) {
      if (che1zhanyong1 == 1 || che2zhanyong1 == 1) {
        ku10 = 1
        this.huabu()
        setTimeout(res => {
          this.chuku2()
        }, 10)
      }
      else {
        ku10 = 1
        this.huabu()
        this.qianjinpanduan3a2()
      }
    }
    else if (che3 == 2) {
      if ((che1zhanyong2 == 1 || che2zhanyong2 == 1) && ku10 == 0) {
        ku20 = 1
        this.huabu()
        setTimeout(res => {
          this.chuku2()
        }, 10)
      }
      else if (ku10 == 1)
        setTimeout(res => {
          this.chuku2()
        }, 10)
      else {
        ku20 = 1
        this.huabu()
        this.qianjinpanduan3a2()
      }
    }
    else if (che3 == 3) {
      if ((che1zhanyong3 == 1 || che2zhanyong3 == 1) && ku20 == 0) {
        ku30 = 1
        this.huabu()
        setTimeout(res => {
          this.chuku2()
        }, 10)
      }
      else if (ku20 == 1)
        setTimeout(res => {
          this.chuku2()
        }, 10)
      else {
        ku30 = 1
        this.huabu()
        this.qianjinpanduan3a2()
      }
    }
  },
  qianjinpanduan3a2() {
    var that = this
    che3zhanyong1panduan = 0
    che3zhanyong2panduan = 0
    che3zhanyong3panduan = 0
    for (var i = dian000y2; i <= didiany2; i++) {
      if (i < 800 && i >= 640)
        che3zhanyong1panduan++
      if (i < 740 && i >= 580)
        che3zhanyong2panduan++
      if (i < 680 && i >= 520)
        che3zhanyong3panduan++
    }
    if (che3zhanyong1panduan == 0)
      che3zhanyong1 = 0
    else che3zhanyong1 = 1
    if (che3zhanyong2panduan == 0)
      che3zhanyong2 = 0
    else che3zhanyong2 = 1
    if (che3zhanyong3panduan == 0)
      che3zhanyong3 = 0
    else che3zhanyong3 = 1
    if (didiany2 > 278 && didiany2 < 282) {
      chukuchedao1 = 0
      that.huabu()
    }
    if (didiany2 > 148 && didiany2 < 152) {
      chukuchedao2 = 0
      that.huabu()
    }
    if (didiany2 > 18 && didiany2 < 22) {
      chukuchedao3 = 0
      that.huabu()
    }
    if (dian000y2 > 798 && dian000y2 < 802) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y2 / 2,
        x: dian000x2 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan3a2()
            }, 10)
          else that.qianjinpanduan31a2()
        }
      })
    }
    else if (dian000y2 > 738 && dian000y2 < 742) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y2 / 2,
        x: dian000x2 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan3a2()
            }, 10)
          else that.qianjinpanduan31a2()
        }
      })
    }
    else if (dian000y2 > 678 && dian000y2 < 682) {
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian000y2 / 2,
        x: dian000x2 / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            setTimeout(res => {
              that.qianjinpanduan3a2()
            }, 10)
          else that.qianjinpanduan31a2()
        }
      })
    }
    else if (dian000y2 > 638 && dian000y2 < 642) {
      if (che3 == 1) {
        ku10 = 0
        that.huabu()
        setTimeout(res => {
          ku11 = 1
          that.huabu()
        }, 100)
        che3 = 0
        chewei1 = 0
        that.qianjinpanduan31a2()
      }
      else {
        if (ku11 == 1) {
          ku11 = 0
          that.huabu()
          setTimeout(res => {
            ku11 = 1
            that.huabu()
          }, 100)
          that.qianjinpanduan31a2()
        }
        else that.qianjinpanduan31a2()
      }
    }
    else if (dian000y2 > 578 && dian000y2 < 582) {
      if (che3 == 2) {
        ku20 = 0
        that.huabu()
        setTimeout(res => {
          ku21 = 1
          that.huabu()
        }, 100)
        che3 = 0
        chewei2 = 0
        that.qianjinpanduan31a2()
      }
      else {
        if (ku21 == 1) {
          ku21 = 0
          that.huabu()
          setTimeout(res => {
            ku21 = 1
            that.huabu()
          }, 100)
          that.qianjinpanduan31a2()
        }
        else that.qianjinpanduan31a2()
      }
    }
    else if (dian000y2 > 518 && dian000y2 < 522) {
      if (che3 == 3) {
        ku30 = 0
        that.huabu()
        setTimeout(res => {
          ku31 = 1
          that.huabu()
        }, 100)
        che3 = 0
        chewei3 = 0
        that.qianjinpanduan31a2()
      }
      else {
        if (ku31 == 1) {
          ku31 = 0
          that.huabu()
          setTimeout(res => {
            ku31 = 1
            that.huabu()
          }, 100)
          that.qianjinpanduan31a2()
        }
        else that.qianjinpanduan31a2()
      }
    }
    else if (dian000y2 > 408 && dian000y2 < 412) {
      if (chukuchedao1 == 0) {
        that.qianjinpanduan31a2()
        setTimeout(res => {
          chukuchedao1 = 1
          that.huabu()
        }, 100)
      }
      else setTimeout(res => {
        that.qianjinpanduan3a2()
      }, 10)
    }
    else if (dian000y2 > 278 && dian000y2 < 282) {
      if (chukuchedao2 == 0) {
        that.qianjinpanduan31a2()
        setTimeout(res => {
          chukuchedao2 = 1
          that.huabu()
        }, 100)
      }
      else setTimeout(res => {
        that.qianjinpanduan3a2()
      }, 10)
    }
    else if (dian000y2 > 148 && dian000y2 < 152) {
      if (chukuchedao3 == 0) {
        that.qianjinpanduan31a2()
        setTimeout(res => {
          chukuchedao3 = 1
          that.huabu()
        }, 100)
      }
      else setTimeout(res => {
        that.qianjinpanduan3a2()
      }, 10)
    }
    else if (dian000y2 > 18 && dian000y2 < 22) {

    }
    else that.qianjinpanduan31a2()
  },
  qianjinpanduan31a2() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian2x2 / 2,
      x: dian2y2 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin3a2()
        else
          that.qianjinpanduan32a2()
      }
    })
  },
  qianjinpanduan32a2() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian1y2 / 2,
      x: dian1x2 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.qianjin3a2()
        else {
          if (xuanzhuan2 < -10)
            that.you3a2()
          else
            that.qianjinpanduan33a2()
        }
      }
    })
  },
  qianjinpanduan33a2() {
    var that = this
    wx.canvasGetImageData({
      canvasId: 'huabu',
      y: dian0y2 / 2,
      x: dian0x2 / 2,
      width: 1,
      height: 1,
      success(res) {
        if (res.data[3] != 0)
          that.you3a2()
        else
          that.qianjin3a2()
      }
    })
  },
  qianjin3a2() {
    var that = this
    a2 = a2 - Math.cos(xuanzhuan2 * 2 * Math.PI / 360)
    b2 = b2 + Math.sin(xuanzhuan2 * 2 * Math.PI / 360)
    that.gengxin2()
    setTimeout(res => {
      that.setData({ xuanzhuan2: xuanzhuan2, top2: a2, left2: b2, dianx2: dianx2, diany2: diany2, dian1x2: dian1x2, dian1y2: dian1y2, dian2y2: dian2y2, dian2x2: dian2x2, dian0x2: dian0x2, dian0y2: dian0y2, dian00x2: dian00x2, dian00y2: dian00y2, dian000x2: dian000x2, dian000y2: dian000y2, dian3x2: dian3x2, dian3y2: dian3y2, dingdianx2: dingdianx2, dingdiany2: dingdiany2, dingdian1x2: dingdian1x2, dingdian1y2: dingdian1y2, dianxx2: dianxx2, dianyy2: dianyy2, dian1xx2: dian1xx2, dian1yy2: dian1yy2, didianx2: didianx2, didiany2: didiany2 })
    }, 10)
    that.qianjinpanduan3a2()
  },
  you3a2() {
    xuanzhuan2 = xuanzhuan2 + 1
    this.gengxin2()
    setTimeout(res => {
      this.setData({ xuanzhuan2: xuanzhuan2, top2: a2, left2: b2, dianx2: dianx2, diany2: diany2, dian1x2: dian1x2, dian1y2: dian1y2, dian2y2: dian2y2, dian2x2: dian2x2, dian0x2: dian0x2, dian0y2: dian0y2, dian00x2: dian00x2, dian00y2: dian00y2, dian000x2: dian000x2, dian000y2: dian000y2, dian3x2: dian3x2, dian3y2: dian3y2, dingdianx2: dingdianx2, dingdiany2: dingdiany2, dingdian1x2: dingdian1x2, dingdian1y2: dingdian1y2, dianxx2: dianxx2, dianyy2: dianyy2, dian1xx2: dian1xx2, dian1yy2: dian1yy2, didianx2: didianx2, didiany2: didiany2 })
    }, 10)
    this.qianjinpanduan3a2()
  },
  zuo3a2() {
    xuanzhuan2 = xuanzhuan2 - 1
    this.gengxin2()
    setTimeout(res => {
      this.setData({ xuanzhuan2: xuanzhuan2, top2: a2, left2: b2, dianx2: dianx2, diany2: diany2, dian1x2: dian1x2, dian1y2: dian1y2, dian2y2: dian2y2, dian2x2: dian2x2, dian0x2: dian0x2, dian0y2: dian0y2, dian00x2: dian00x2, dian00y2: dian00y2, dian000x2: dian000x2, dian000y2: dian000y2, dian3x2: dian3x2, dian3y2: dian3y2, dingdianx2: dingdianx2, dingdiany2: dingdiany2, dingdian1x2: dingdian1x2, dingdian1y2: dingdian1y2, dianxx2: dianxx2, dianyy2: dianyy2, dian1xx2: dian1xx2, dian1yy2: dian1yy2, didianx2: didianx2, didiany2: didiany2 })
    }, 10)
    this.qianjinpanduan3a2()
  }
})