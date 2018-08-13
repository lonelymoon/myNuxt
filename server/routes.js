(function () {
  const router = require('koa-router')()
  const koaBody = require('koa-body')

  // 登录
  router.post('/api/login', function (ctx, next) {
    next()
    let {data} = ctx.request.body
    ctx.body = 'hello, ' + data
  })

  module.exports = { koaBody, router }
})()
