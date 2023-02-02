// pages/bianji/bianji.js
Page({
  data:{
  },
  //获取输入内容
getvalue(event){
  console.log(event.detail.value)
  this.setData({
    inputvalue:event.detail.value
  })
},
//获取输入价格
getmoney(event){
  console.log(event.detail.value)
  this.setData({
    inputmoney:event.detail.value
  })
},
 //返回页面跳转
goback() {
  wx.switchTab({
    url: '/pages/home/home'  
  })
},
pic() {
  wx.showModal({
    title: '是否允许获取相册权限', //提示的标题
    success: function(res) {
      if(res.confirm) {
        console.log('用户点击了确定')
      }
      if(res.cancel) {
        console.log('用户点击了取消')
        wx.navigateTo({
          url: '/pages/bianji/bianji'  
        })
      }
    }
  })
},
//商品属性下拉框
productproperties() {
  wx.showActionSheet({
    itemList: ['PDF','专业书','选修书','通选书','其他杂书','其他'], //文字数组
    itemColor: 'red', //文字颜色
    success: (res) => {
      switch(res.tapIndex) {
        case 0:
          console.log('用户点击了PDF')
          break;
        case 1:
          console.log('用户点击了专业书')
          break;	
          case 2:
          console.log('用户点击了选修书')
          break;	
          case 3:
          console.log('用户点击了通选书')
          break;	
          case 4:
          console.log('用户点击了其他杂书')
          break;	
          case 5:
          console.log('用户点击了其他')
          break;	
      }
    }
  })
},
//选择校区下拉框
xiaoqu() {
  wx.showActionSheet({
    itemList: ['五山校区','大学城校区','国际校区'], //文字数组
    itemColor: 'red', //文字颜色
    success: (res) => {
      switch(res.tapIndex) {
        case 0:
          console.log('用户点击了五山校区')
          break;
        case 1:
          console.log('用户点击了大学城校区')
          break;	
          case 2:
          console.log('用户点击了国际校区')
          break;	
        }
      }
    })
  },
  //买卖类型下拉框
  bmstyle(){
    wx.showActionSheet({
      itemList: ['买家','卖家'], //文字数组
      itemColor: 'red', //文字颜色
      success: (res) => {
        switch(res.tapIndex) {
          case 0:
            console.log('用户点击了买家')
            break;
          case 1:
            console.log('用户点击了卖家')
            break;	
          }
        }
      })
    },
    //存为草稿
    caogao() {
      wx.showModal({
        title: '是否存为草稿', //提示的标题
        content: '可至草稿箱查看', //提示的内容
        success: function(res) {
          if(res.confirm) {
            console.log('用户点击了确定')
            wx.switchTab({
              url: '/pages/me/me'  
            })
           }
          if(res.cancel) {
            console.log('用户点击了取消')
            wx.navigateTo({
              url: '/pages/bianji/bianji'  
            })
          }
        }
      })
    },
    //发布
    fabu() {
      wx.showModal({
        title: '是否发布', //提示的标题
        success: function(res) {
          if(res.confirm) {
            console.log('用户点击了确定')
            wx.switchTab({
              url: '/pages/home/home'  
            })
          }
          if(res.cancel) {
            console.log('用户点击了取消')
            wx.navigateTo({
              url: '/pages/bianji/bianji'  
            })
          }
        }
      })
    }
})