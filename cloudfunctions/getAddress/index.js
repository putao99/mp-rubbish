// 云函数入口文件
const cloud = require('wx-server-sdk')
const consola = require('consola')

cloud.init({
  env: "rubbish-server-9cc2x"
})

const db = cloud.database(),
  log = consola.withTag('GetAddress-Server')

// 云函数入口函数
exports.main = async(event, context) => {
  try {
    const wxContext = cloud.getWXContext(),
      {
        OPENID,
      } = wxContext;

    let res = await db.collection('user').where({
      _openid: OPENID,
    }).get()

    const address = res ? res.data[0].address : []

    log.info('获取地址成功', address)

    return {
      address
    }
  } catch (err) {
    throw new Error(err)
  }
}