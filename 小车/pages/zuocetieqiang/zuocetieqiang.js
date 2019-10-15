var a =1106
var b = 100
var xuanzhuan = 0
var diany 
var dianx
var dian1y
var dian1x
Page({
  data: {
    top:1106,
    left: 100,
    xuanzhuan: 0,
    diany: 1076,
    dianx: 70,
    dian1y: 1076,
    dian1x: 170,
  },
  onReady: function () {
    const context = wx.createCanvasContext('huabu')
    context.setLineWidth(1)
    context.moveTo(100,603)
    context.lineTo(100,500)
    context.arc(200,500,100,Math.PI,1.5*Math.PI)
    context.lineTo(250,400)
    context.arc(250, 300, 100, 0.5 * Math.PI, -0.5 * Math.PI,1)
    context.lineTo(200,200)
    context.arc(200, 100, 100, 0.5*Math.PI, 1.5 * Math.PI)
    context.stroke()
    context.draw()
  },
  qianjin()
  { var that=this
    a = a - Math.cos(xuanzhuan * 2 * Math.PI / 360)
    b = b + Math.sin(xuanzhuan * 2 * Math.PI / 360)
    diany = a + 40 - Math.sqrt(50 * 50 + 70 * 70) * Math.sin(Math.atan(-7 / 5) + (180 - xuanzhuan) * Math.PI / 180)
    dianx = b + 20 + Math.sqrt(50 * 50 + 70 * 70) * Math.cos(Math.atan(-7 / 5) + (180 - xuanzhuan) * Math.PI / 180)
    dian1y = a + 40 - Math.sqrt(50 * 50 + 70 * 70) * Math.sin(Math.atan(7 / 5) - xuanzhuan * Math.PI / 180)
    dian1x = b + 20 + Math.sqrt(50 * 50 + 70 * 70) * Math.cos(Math.atan(7 / 5) - xuanzhuan * Math.PI / 180)
    wx.canvasGetImageData({
        canvasId: 'huabu',
        y: dian1y / 2,
        x: dian1x / 2,
        width: 1,
        height: 1,
        success(res) {
          if (res.data[3] != 0)
            that.zuozhuan()
          else
            that.youzhuan()
        }
      })
      that.setData({ top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y })
  },
  youzhuan() {
      xuanzhuan = xuanzhuan + 1
      diany = a + 40 - Math.sqrt(50 * 50 + 70 * 70) * Math.sin(Math.atan(-7 / 5) + (180 - xuanzhuan) * Math.PI / 180)
      dianx = b + 20 + Math.sqrt(50 * 50 + 70 * 70) * Math.cos(Math.atan(-7 / 5) + (180 - xuanzhuan) * Math.PI / 180)
      dian1y = a + 40 - Math.sqrt(50 * 50 + 70 * 70) * Math.sin(Math.atan(7 / 5) - xuanzhuan * Math.PI / 180)
      dian1x = b + 20 + Math.sqrt(50 * 50 + 70 * 70) * Math.cos(Math.atan(7 / 5) - xuanzhuan * Math.PI / 180)
      this.setData({ xuanzhuan: xuanzhuan, dianx: dianx, diany: diany, dian1y: dian1y, dian1x: dian1x})
      this.qianjin()
  },
  zuozhuan() {
      xuanzhuan = xuanzhuan - 1
      diany = a + 40 - Math.sqrt(50 * 50 + 70 * 70) * Math.sin(Math.atan(-7 / 5) + (180 - xuanzhuan) * Math.PI / 180)
      dianx = b + 20 + Math.sqrt(50 * 50 + 70 * 70) * Math.cos(Math.atan(-7 / 5) + (180 - xuanzhuan) * Math.PI / 180)
      dian1y = a + 40 - Math.sqrt(50 * 50 + 70 * 70) * Math.sin(Math.atan(7 / 5) - xuanzhuan * Math.PI / 180)
      dian1x = b + 20 + Math.sqrt(50 * 50 + 70 * 70) * Math.cos(Math.atan(7 / 5) - xuanzhuan * Math.PI / 180)
      this.setData({ xuanzhuan: xuanzhuan, dianx: dianx, diany: diany, dian1y: dian1y, dian1x: dian1x})
      this.qianjin()
  }
})