// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '南昌',
    imgUrls:[
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    items:[

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('load');
    // 发起数据接口请求
    // 绑定this
    let that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d2ed7b41418505a5562ae1e/movie/newMovieList',
      success: function(res){
        console.log(res);
        that.setData({
          items: res.data.data.movieList
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('Ready');

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show');

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('hide');

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('unload');

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})