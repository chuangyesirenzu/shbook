// app.js
App({
  //小程序一启动，就会执行
  onLaunch(){
 console.log('小程序开始启动啦')
 wx.cloud.init({
   env:'cloud1-8g4n8zxs8b7bd143'//云开发环境id
 })
}
})
