// pages/address-list/list.js

const { isEmptyObject } = require('../../utils/util.js')
import { set } from '../../utils/storage.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getAddress(this.trimAddres)
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
  getAddress(handler) {
    const that = this
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getAddress',
      // 传给云函数的参数
      success: function(res) {
        if(isEmptyObject(res.result)) return
        let data = handler.call(that, res.result.address)
        that.setData(data)
      },
      fail(err) {
        console.error(err.errMsg)
      }
    })
  },
  trimAddres(address) {
    address.forEach((v, i) => {
      v.address = v.address.length > 12 ? v.address.slice(0, 12) + '...' : v.address
    })
    return {
      addressList: address
    }
  },
  checkAddress(event) {
    const data = event.currentTarget.dataset.address
    // 存储于localStorage
    set('ADDRESS', data)

    wx.switchTab({
      url: '/pages/home/home'
    })
  }
})