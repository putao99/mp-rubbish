// pages/home/home.js
const { STORAGE_PREV, get } = require('../../utils/storage.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
    tabClass: 'tip0',
    address: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getLocation()
    this.getAddress()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  getLocation() {
    var that = this;
    wx.getLocation({
      success: function(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
  },
  toggletab(e) {
    if (this.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      let idx = e.target.dataset.current
        this.setData({
          tabIndex: idx,
          tabClass: 'tip' + idx
        })
    }
  },
  getAddress() {
    get('ADDRESS', (res) => {
      this.setData({
        address: res
      })
    })
    
  }
})