var a =1106
var timer
var b =100
var xuanzhuan =0
var diany
var dianx
var dian1y
var dian1x
var zuo
var you
var kuan1
var kuan2
var gao1
var gao2
var kuan
var gao
Page({
  data: {
    top:1106,
    left:100,
    xuanzhuan:0,
    diany: 506,
    dianx: 100,
    dian1y: 506,
    dian1x: 100,
  },
  onReady: function () {
    const context = wx.createCanvasContext('huabu')
    context.setLineWidth(5)
    context.moveTo(50, 603)
    context.lineTo(50, 400)
    context.arc(130, 400, 80, Math.PI, 2.5 * Math.PI)
    context.arc(130,530,50,1.5*Math.PI,0.5*Math.PI,1)
    context.lineTo(250,580)
    context.arc(300,530,50,0.5*Math.PI,1.5*Math.PI,1)
    context.lineTo(280,480)
    context.arc(280,450,30,0.5*Math.PI,Math.PI)
    context.lineTo(250,300)
    context.arc(200,300,50,0,1.5*Math.PI,1)
    context.lineTo(50,270)
    context.arc(50,220,50,0.5*Math.PI,1.5*Math.PI)
    context.lineTo(250,210)
    context.arc(250,160,50,0.5*Math.PI,1.5*Math.PI,1)
    context.lineTo(0,0)
    context.stroke()
    context.draw()
  },
  qianjin() {
    var that = this
    timer = setInterval(function (res) {
      zuo=0,
      you=0,
      a = a - Math.cos(xuanzhuan * 2 * Math.PI / 360)
      b = b +Math.sin(xuanzhuan * 2 * Math.PI / 360)
      diany = a + 40 - Math.sqrt(30*30 + 50 * 50) * Math.sin(Math.atan(-5/3) + (180 - xuanzhuan) * Math.PI / 180)
      dianx = b + 20 + Math.sqrt(30 * 30 + 50 * 50) * Math.cos(Math.atan(-5/3) + (180 - xuanzhuan) * Math.PI / 180)
      dian1y = a + 40 - Math.sqrt(30 * 30 + 50 * 50) * Math.sin(Math.atan(5/3) - xuanzhuan * Math.PI / 180)
      dian1x = b + 20 + Math.sqrt(30 * 30 + 50* 50) * Math.cos(Math.atan(5/3) - xuanzhuan * Math.PI / 180)
      kuan1=parseInt(dianx/2)
      gao1=parseInt(diany/2)
      if(dian1x/2%1==0)
      kuan2=dian1x/2
      else kuan2=parseInt(dian1x/2)+1
      if(dian1y/2%1==0)
      gao2=dian1y/2
      else gao2=parseInt(dian1y/2)+1
      kuan=kuan2-kuan1
      gao=gao2-gao1
      if(gao==0)
      gao=1
      if(kuan==0)
      kuan=1
      wx.canvasGetImageData({
        canvasId: 'huabu',
        y:gao1,
        x:kuan1,
        width:kuan,
        height:gao,
        success:that.shezhi.bind(that)
      })
      that.setData({ top: a, left: b, dianx: dianx, diany: diany, dian1x: dian1x, dian1y: dian1y })
    }, 10)
  },
  shezhi(res)
  {
    if(kuan>0)
   { 
     if(gao>0)
    {if(kuan>gao||kuan==gao)
     {for(var i=0;i<gao;i++)
   {
    for(var j=0;j<kuan;j++)
    {
      if(res.data[(i*kuan+j)*4+3]!=0)
      {
        if (j > ((kuan -1) / 2))
          you++
        if(j<((kuan-1)/2))
        zuo++
      }
    }
   }}
   if(kuan<gao)
   {
     for (var i = 0; i < gao; i++) {
       for (var j = 0; j < kuan; j++) {
         if (res.data[(i * kuan + j) * 4 + 3] != 0) {
           if (i > ((gao - 1) / 2))
            you++
           if (i < ((gao - 1) / 2))
             zuo++
         }
       }
     }
   }}
      
      if (gao < 0) 
      { gao=-gao
        if (kuan > gao || kuan == gao) {
          for (var i = 0; i < gao; i++) {
            for (var j = 0; j < kuan; j++) {
              if (res.data[(i * kuan + j) * 4 + 3] != 0) {
                if (j > ((kuan - 1) / 2))
                  you++
                if (j < ((kuan - 1) / 2))
                  zuo++
              }
            }
          }
        }
        if (kuan < gao) {
          for (var i = 0; i < gao; i++) {
            for (var j = 0; j < kuan; j++) {
              if (res.data[(i * kuan + j) * 4 + 3] != 0) {
                if (i > ((gao - 1) / 2))
                  zuo++
                if (i < ((gao - 1) / 2))
                  you++
              }
            }
          }
        }
      }
   }
    if (kuan<0) {
      kuan=-kuan
      if (gao > 0) {
        if (kuan > gao || kuan == gao) {
          for (var i = 0; i < gao; i++) {
            for (var j = 0; j < kuan; j++) {
              if (res.data[(i * kuan + j) * 4 + 3] != 0) {
                if (j > ((kuan - 1) / 2))
                 zuo++
                if (j < ((kuan - 1) / 2))
                  you++
              }
            }
          }
        }
        if (kuan < gao) {
          for (var i = 0; i < gao; i++) {
            for (var j = 0; j < kuan; j++) {
              if (res.data[(i * kuan + j) * 4 + 3] != 0) {
                if (i > ((gao - 1) / 2))
                  you++
                if (i < ((gao - 1) / 2))
                  zuo++
              }
            }
          }
        }
      }
      if (gao < 0) {
        gao = -gao
        if (kuan > gao || kuan == gao) {
          for (var i = 0; i < gao; i++) {
            for (var j = 0; j < kuan; j++) {
              if (res.data[(i * kuan + j) * 4 + 3] != 0) {
                if (j > ((kuan - 1) / 2))
                 zuo++
                if (j < ((kuan - 1) / 2))
                  you++
              }
            }
          }
        }
        if (kuan < gao) {
          for (var i = 0; i < gao; i++) {
            for (var j = 0; j < kuan; j++) {
              if (res.data[(i * kuan + j) * 4 + 3] != 0) {
                if (i > ((gao - 1) / 2))
                  zuo++
                if (i < ((gao - 1) / 2))
                  you++
              }
            }
          }
        }
      }
    }
   if(zuo>you)
   {
     xuanzhuan=xuanzhuan-2
   }
   if(you>zuo)
   {
     xuanzhuan=xuanzhuan+2
   }
   this.setData({xuanzhuan:xuanzhuan})
  }
})