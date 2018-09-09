import {Mysql} from './mysql'

let mysql = new Mysql('guyue1993', 'W13142gy', 'gamelife', 'cd-cdb-hlivjp4y.sql.tencentcdb.com', '63797')

const addPromise = function (fn = function () {}) {
  return new Promise((resolve, reject) => {
    fn(resolve, reject)
  })
}

const users = {
  // 插入用户数据
  addOneUser(values, condition) {
    return addPromise((resolve, reject) => {
      users.checkUserExist(condition).then((results) => {
        let rows = results[0].length
        if (rows > 0) {
          reject({
            'code': 1,
            'errorMsg': '用户已存在',
            'log': null
          })
          return false
        }
        mysql.insert('user', 'email, password', values, (err, results, fields) => {
          err ? reject({
            'code': 1000,
            'errorMsg': '用户插入语句错误',
            'log': err
          }) : resolve([results, fields])
        })
      }).catch((error) => {
        reject(error)
      })
    })
  },
  // 检查用户是否存在
  checkUserExist(condition) {
    return addPromise((resolve, reject) => {
      mysql.select('user', function (err, results, fields) {
        err ? reject({
          'code': 1000,
          'errorMsg': '用户查询语句错误',
          'log': err
        }) : resolve([results, fields])
      }, condition)
    })
  },
  // 获取所有用户信息
  getAllusers() {
    return addPromise((resolve, reject) => {
      mysql.selectAll('user', (err, rows, fields) => {
        err ? reject(err) : resolve([rows, fields])
      })
    })
  },
  // 登录
  login(condition) {
    return addPromise((resolve, reject) => {
      mysql.select('user', (err, results, fields) => {
        err ? reject({
          'code': 1000,
          'errorMsg': '用户查询语句错误',
          'log': err
        }) : resolve([results, fields])
      }, condition)
    })
  }
}

export {
  users
}
