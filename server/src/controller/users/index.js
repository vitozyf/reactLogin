import usersMedel from '../../model/usersModel.js'

export default {
  showIndex(req, res)  {
    usersMedel.getAllUsers((err, data) => {
      if (err) {
        res.send('错误页面')
      } else {
        res.send('成功')
        console.log(data)
      }
    })
  },
  //登录
  login(req, res) {
    let loginInfo = req.body
    console.log(123, loginInfo)
    res.send('ok')
  }
}