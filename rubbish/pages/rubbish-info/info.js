// pages/rubbish-info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 生活垃圾
    rubbish: [{
      label: '废旧衣物',
      checked: false
    }, {

      label: '废纸',
      checked: false
    }, {
      label: '废塑料',
      checked: false
    }, {
      label: '废玻璃',
      checked: false
    }, {
      label: '废金属',
      checked: false
    }, {
      label: '其他',
      checked: false
    }],

    // 废弃家电 
    garbage: [{
      label: '电脑',
      checked: false
    }, {
      label: '冰箱',
      checked: false
    }, {
      label: '洗衣机',
      checked: false
    }, {
      label: '空调',
      checked: false
    }, {
      label: '电视',
      checked: false
    }, {
      label: '其他',
      checked: false
    }],

    // 大件回收
    waste: [{
      label: '柜子',
      checked: false
    }, {
      label: '桌子',
      checked: false
    }, {
      label: '自行车',
      checked: false
    }, {
      label: '摩托车',
      checked: false
    }, {
      label: '茶几',
      checked: false
    }, {
      label: '沙发',
      checked: false
    }, {
      label: '床垫',
      checked: false
    }, {
      label: '床',
      checked: false
    }, {
      label: '其他',
      checked: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  checkRadio(event) {
    const {
      attr,
      key
    } = event.target.dataset
    if (!attr || (!key && key !== 0)) return

    var dataAttr = attr + '[' + key + ']'
    let original = this.data[attr][key],
      data = {
        label: original.label,
        checked: !original.checked
      }
    this.setData({
      [dataAttr]: data
    })
  }
})