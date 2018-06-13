import usersMedel from '../../model/usersModel.js'
import querystring from 'querystring'
import md5 from 'blueimp-md5';
import config from '../../../config'

export default {
  showIndex(req, res)  {
    usersMedel.getAllUsers((err, data) => {
      if (err) {
        res.json('读取数据失败')
      } else {
        res.json({
          code: 0,
          data:data
         })
      }
    })
  },
  adduser (req, res) {
    let password = md5('123456', config.passwordKey)
    usersMedel.adduser('zyf', password, (err, data) => {
      if (err) {
        res.send('添加失败')
      } else {
        res.send('添加成功')
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
    console.log('注册', loginInfo, req)
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      console.log('注册2', data)
    })
  }
}