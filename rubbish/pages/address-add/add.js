// pages/address-add/add.js
import {
  validatePhone
} from '../../utils/validate.js'
import { set } from '../../utils/storage.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '',
    isPass: false
  },
  onChangeAddress() {
    const that = this;
    wx.chooseLocation({
      success: function(res) {
        that.setData({
          address: res.address
        })
      },
    })
  },
  formSubmit: function(e) {
    const that = this,
      {
        address,
        addressDetail,
        name,
        isSave,
        phone,
        sex
      } = e.detail.value

    // 验证阶段
    let tip = ''
    let valiPhone = this.checkPhone(phone),
      valiAddress = this.checkEmpty(address),
      valiAddressDetail = this.checkEmpty(addressDetail),
      valiName = this.checkEmpty(name),
      valiSex = this.checkEmpty(sex)

    if (valiPhone) {
      tip = valiPhone
    } else if (valiAddress) {
      tip = valiAddress
    } else if (valiAddressDetail) {
      tip = valiAddressDetail
    } else if (valiName) {
      tip = valiName
    } else if (valiSex) {
      tip = valiSex
    }

    if (!tip) {
      // 显示确定弹窗
      wx.showModal({
        content: '保存本次编辑？',
        cancelText: '不保存',
        cancelColor: '#333',
        confirmText: '保存',
        confirmColor: '#3EC0C0',
        success(res) {
          if (res.confirm) {
            // 发送数据给后台，然后页面跳转
            const data = {
              address,
              address_detail: addressDetail,
              name,
              phone,
              sex
            }
            // 保存在服务器
            if (isSave[0]) {
              that.setAddress(data)
            }
            // 存储于localStorage
            set('ADDRESS', data)

            wx.switchTab({
              url: '/pages/home/home',
            })
          } else if (res.cancel) {
            return false
          }
        }
      })
    } else {
      wx.showToast({
        title: tip,
        icon: 'none',
        duration: 2000,
      });
    }
  },
  /**
   * @descriptions 检测数据是否为空(小区地址，详细地址，联系人，手机号，性别及是否保存在地址簿)
   */
  checkEmpty(value) {
    let str = ''
    if(!value) str = '请填入非空数据'
    return str
  },
  checkPhone(phone) {
    let str = ""
    if (!phone) {
      str = "请输入手机号"
    } else if (!validatePhone(phone)) {
      str = "手机号格式不正确"
    }
    return str
  },
  setAddress(data) {
    const that = this
    wx.cloud.callFunction({
      // 云函数名称
      name: 'setAddress',
      // 传给云函数的参数
      data,
      success: function(res) {
        console.log(res)
      },
      fail(err) {
        console.error(err.errMsg)
      }
    })
  },
})