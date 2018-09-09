const mysql = require('mysql')

class Mysql {
  constructor(user, password, database, host = 'localhost', port = '3306') {
    this.connection = mysql.createConnection({
      host, user, password, database, port
    })
    this.results = null
    this.connect()
  }
  // 链接数据库
  connect() {
    this.connection.connect()
  }
  // 关闭数据库连接
  close() {
    this.connection.end()
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
  query(sql, callback = function () {}) {
    this.connection.query(sql, (err, rows, fields) => {
      if (!err) {
        this.results = rows
      }
      callback(err, rows, fields)
    })
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
