import {Mysql} from './mysql'
import moment from 'moment'

let mysql = new Mysql('guyue1993', 'W13142gy', 'gamelife', 'cd-cdb-hlivjp4y.sql.tencentcdb.com', '63797')

const addPromise = function (fn = function () {}) {
  return new Promise((resolve, reject) => {
    fn(resolve, reject)
  })
}

const users = {
  // 插入用户数据
  addOneUser(type, params) {
    return addPromise((resolve, reject) => {
      users.checkUserExist(`${type} = '${params[0]}'`).then((results) => {
        let rows = results[0].length
        // 如果已存在用户
        if (rows > 0) {
          reject({
            'code': 1,
            'errorMsg': '用户已存在',
            'log': null
          })
          return false
        }
        // 记录注册时间
        let now = moment().utc(8).format('YYYY-MM-DD HH:mm:ss')
        // 生成随机用户paramId
        let paramId = (Math.random() * 10000 >> 0) + '' + new Date().getTime() + '' + (Math.random() * 1000000 >> 0)
        // 生成对应数据项和字段
        let word = type + ', password, joinTime, paramId'
        let values = `'${params[0]}', '${params[1]}', '${now}', '${paramId}'`
        // 执行插入操作
        mysql.insert('user', word, values, (err, results, fields) => {
          err ? reject({
            'code': 1000,
            'errorMsg': '用户插入语句错误',
            'log': err
          }) : resolve([results, fields])
        })
        // end
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
  login(type, params) {
    // 获取当前时间
    let now = moment().utc(8).format('YYYY-MM-DD HH:mm:ss')
    return addPromise((resolve, reject) => {
      mysql.select('user', (err, results, fields) => {
        let updateSets = `lcount = lcount + 1, lastTime = '${now}'`
        // 更新用户登录数据
        mysql.update('user', updateSets, `${type} = '${params[0]}'`, (error) => {
          err ? reject({
            'code': 1000,
            'errorMsg': '用户查询语句错误',
            'log': err || error
          }) : resolve([results, fields])
        })
      }, `${type} = '${params[0]}' and password = '${params[1]}'`)
    })
  }
}

export {
  users
}
