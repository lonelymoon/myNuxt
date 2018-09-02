(function () {
  const router = require('koa-router')()
  const koaBody = require('koa-body')

  /**
   * 登录
   * @api {POST} /api/login 登录验证
   * @apiDescription 对上传的用户数据进行校验
   * @apiGroup User
   * @apiName login
   *
   * @apiParam (登录) {String} account 登录帐号
   * @apiParam (登录) {String} password 登录密码
   *
   * @apiParamExample {Object} 数据格式:
   * { account: 'user001', password: '12345678' }
   *
   * @apiSuccessExample {json} 正确返回值:
   * {
   *    "success": true,
   *    "msg": "登录成功",
   *    "result": {}
   * }
   *
   * @apiErrorExample {json} 错误返回值:
   * {
   *    "success": false,
   *    "msg": "登录失败",
   *    "error": {
   *      "code": 1,
   *      "errorMsg": "账号密码不匹配"
   *    }
   * }
   *
   * @apiSampleRequest /api/login/
   * @apiVersion 1.0.0
   */
  router.post('/api/login', function (ctx) {
    let {account, password} = ctx.request.body
    ctx.body = {
      result: {
        account, password
      }
    }
  })

  /**
   * 注册
   * @api {POST} /api/register 注册验证
   * @apiDescription 对上传的用户数据进行校验
   * @apiGroup User
   * @apiName register
   *
   * @apiParam (注册) {String} account 登录帐号
   * @apiParam (注册) {String} password 登录密码
   *
   * @apiParamExample {Object} 数据格式:
   * { account: 'sdsads@qq.com', password: '12345678' }
   *
   * @apiSuccessExample {json} 正确返回值:
   * {
   *    "success": true,
   *    "msg": "注册成功",
   *    "result": {}
   * }
   *
   * @apiErrorExample {json} 错误返回值:
   * {
   *    "success": false,
   *    "msg": "注册失败",
   *    "error": {
   *      "code": 1,
   *      "errorMsg": "账号已存在"
   *    }
   * }
   *
   * @apiSampleRequest /api/register/
   * @apiVersion 1.0.0
   */
  router.post('/api/register', function (ctx) {
    let {account, password} = ctx.request.body
    ctx.body = {
      result: {
        account, password
      }
    }
  })

  module.exports = { koaBody, router }
})()
