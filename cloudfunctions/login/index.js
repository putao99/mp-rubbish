// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  env: "rubbish-server-9cc2x"
})

const db = cloud.database()
/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async(event, context) => {
  try {
    const wxContext = cloud.getWXContext(),
      {
        OPENID,
        APPID,
        ENV
      } = wxContext;

    let data = {}
    Object.assign(data, {
      ...event,
      ...{
        _openid: OPENID,
        }
    })
    
    let res = await db.collection('user').where({
      _openid: OPENID,
    }).update({
      data
    })
    return res
  } catch (err) {
    throw new Error(err)
  }

}