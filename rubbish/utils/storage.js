const STORAGE_PREV = 'RUBBISH-'
const get = (key, callback) => {
  wx.getStorage({
    key: STORAGE_PREV + key,
    success: function(res) {
      callback && callback(JSON.parse(res.data))
    },
  })
}
const set = (key, data) => {
  wx.setStorage({
    key: STORAGE_PREV + key,
    data: JSON.stringify(data)
  })
}

const remove = (key, callback) => {
  wx.removeStorage({
    key: STORAGE_PREV + key,
    success: function(res) {
      callback && callback()
    },
  })
}

const clear = () => wx.clearStorage()

module.exports = {
  STORAGE_PREV,
  get,
  set,
  remove,
  clear,
}