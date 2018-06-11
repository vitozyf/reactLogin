import usersMedel from '../../model/usersModel.js'
import querystring from 'querystring'

export default {
  showIndex(req, res)  {
    usersMedel.getAllUsers((err, data) => {
      if (err) {
        res.send('错误页面')
      } else {
        res.send('成功')
      }
    })
  },
  //登录
  login(req, res) {
    let loginInfo = req.body
    console.log(123, loginInfo)
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      console.log(234, data, querystring.parse(data))
    })
    res.send('ok')
  }
}