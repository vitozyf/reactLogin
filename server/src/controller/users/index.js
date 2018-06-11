import usersMedel from '../../model/usersModel.js'
import querystring from 'querystring'

export default {
  showIndex(req, res)  {
    usersMedel.getAllUsers((err, data) => {
      if (err) {
        res.send('读取数据失败')
      } else {
        console.log(data)
        res.send('读取数据成功')
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
  },
  signin (req, res) {
     let loginInfo = req.body
    console.log('注册', loginInfo)
  }
}