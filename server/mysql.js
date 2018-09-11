const mysql = require('mysql')

function getConnection(fn) {
  return new Promise((resolve, reject) => {
    fn(resolve, reject)
  })
}

class Mysql {
  constructor(user, password, database, host = 'localhost', port = '3306') {
    this.pool = mysql.createPool({
      host,
      user,
      password,
      database,
      port,
      acquireTimeout: 20000
    })
    this.results = null
    this.connect()
  }
  // 链接数据库
  async connect() {
    let connection = null
    let pool = this.pool
    let connect = this.connect
    try {
      connection = await getConnection((resolve, reject) => {
        pool.getConnection((err, connection) => {
          if (err) {
            reject(err)
          } else {
            resolve(connection)
          }
        })
      })
    } catch (err) {
      console.log('数据库连接错误')
      connect()
    }
    this.connection = connection
  }
  // 关闭数据库连接
  close() {
    this.pool.end()
  }
  // delete
  delete(table, condition, callback = function () {}, fake) {
    if (fake) {
      this.update(table, fake + ' = 1', condition, callback)
      return false
    }
    this.query('delete from ' + table + ' where ' + condition, callback)
  }
  // insert
  insert(table, columns, values, callback = function () {}) {
    this.query('insert into ' + table + '(' + columns + ') values(' + values + ')', callback)
  }
  // query语句
  async query(sql, callback = function () {}) {
    await this.connect()
    this.connection.query(sql, (err, rows, fields) => {
      if (!err) {
        this.results = rows
      }
      callback(err, rows, fields)
    })
    this.connection.release()
  }
  // select
  select(table, callback = function () {}, condition, columns = '*') {
    let cond = condition ? ' where ' + condition : ''
    this.query('select ' + columns + ' from ' + table + cond, callback)
  }
  // selectAll
  selectAll(table, callback = function () {}) {
    this.query('select * from ' + table, callback)
  }
  // update
  update(table, sets, condition, callback = function () {}) {
    let cond = condition ? ' where ' + condition : ''
    this.query('update ' + table + ' set ' + sets + cond, callback)
  }
}

export {Mysql}
