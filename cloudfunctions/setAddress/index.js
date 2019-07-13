// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "rubbish-server-9cc2x"
})

const db = cloud.database()

// 云函数入口函数
exports.main = async(event, context) => {
  try {
    const wxContext = cloud.getWXContext(),
      {
        OPENID,
      } = wxContext;

    await db.collection('user').where({
      _openid: OPENID
    }).update({
      data: {
        address: db.command.push(event)
      }
    })

    return {
      code: '000001',
      message: '添加成功',
      result: null
    }
  } catch (err) {
    throw new Error(err)
  }
}