import mysql from 'mysql';

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root'
})

connection.connect();

let sqlStr = 'select * from users where age > 20'
connection.query(sqlStr, (err, res, fields) => {
  if (err) throw err
  console.log(123, res)
  console.log('----------------')
  console.log(fields)
})

// let UserName = 'vito';
// let age = '34';
// let sqlStr = `select * from users where UserName=? or age=?`
// connection.query(sqlStr, [UserName,age], (err, res) => {
//   if (err) throw err;
//   console.log(res)
// })

// let newUser = {
//     ID: 1,
//     UserName: 'vito',
//     PassWord: '123',
//     Email: 'vito.z@qq.com',
//     Address: '上海浦东12',
//     Age: 18,
//     Gender: 1
//   }
// // let sqlStr = `update users set ? where id=?`;
// let sqlStr = `select * from users`

// let data

// connection.query(sqlStr, [
//   newUser,
//   newUser.ID
// ], (err, res) => {
//   if (err) throw err;
//   // console.log(res)
//   data = res
// })


// let newUser = {
//     UserName: 'vito123',
//     PassWord: '321',
//     Email: '1aaa@qq.com',
//     Address: '上海浦东12',
//     Age: 49,
//     Gender: 1
//   }
// let sqlStr = 'insert into users set ?'

// connection.query(sqlStr, [newUser], (err, res) => {
//   if (err) throw err
//   console.log(res)
// })
// let id = 7
// let sqlStr = 'delete from users where id=?'
// connection.query(sqlStr, [id], (err, res) => {
//   if(err) throw err
//   console.log(res)
// })

