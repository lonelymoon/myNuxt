(function () {
  const router = require('koa-router')()
  const koaBody = require('koa-body')
  const handle = require('./dbHandle')
  const md5 = require('md5')
  const crypto = require('crypto')

  const isProd = Object.is(process.env.NODE_ENV, 'production')
  let domain = isProd ? '132.232.28.95' : 'localhost'

  function jiami(str, secret) {
    let cipher = crypto.createCipher('aes192', secret)
    let enc = cipher.update(str, 'utf8', 'hex')
    enc += cipher.final('hex')
    return enc
  }
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
  router.post('/api/login', async function (ctx) {
    let {account, password} = ctx.request.body
    try {
      let results = await handle.users.login(`email = '${account}' and password = '${md5(password)}'`)
      if (results[0].length > 0) {
        // 设置cookies
        ctx.cookies.set('user', jiami(JSON.stringify(results[0][0]), 'gamelife'), {
          domain: domain,
          path: '/',
          httpOnly: false,
          maxAge: 7 * 24 * 60 * 60 * 1000,
          expires: new Date().getDate() + 7 * 24 * 60 * 60 * 1000,
          overwrite: true
        })
        // 返回数据
        ctx.body = {
          'success': true,
          'msg': '登录成功',
          'result': results[0]
        }
      } else {
        ctx.body = {
          'success': false,
          'msg': '登录失败',
          'error': {
            'code': 1,
            'errorMsg': '账号密码不匹配',
            'log': null
          }
        }
      }
    } catch (err) {
      console.log(err)
      ctx.body = {
        'success': false,
        'msg': '登录失败',
        'error': err
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
  router.post('/api/register', async function (ctx) {
    let {account, password} = ctx.request.body
    let users = handle.users
    try {
      await users.addOneUser(`'${account}','${md5(password)}'`, `email = '${account}'`)
      let results = await users.login(`email = '${account}' and password = '${md5(password)}'`)
      ctx.cookies.set('user', jiami(JSON.stringify(results[0][0]), 'gamelife'), {
        domain: domain,
        path: '/',
        httpOnly: false,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        expires: new Date().getDate() + 7 * 24 * 60 * 60 * 1000,
        overwrite: true
      })
      ctx.body = {
        'success': true,
        'msg': '插入成功',
        'result': results
      }
    } catch (err) {
      ctx.body = {
        'success': false,
        'msg': '插入失败',
        'error': err
      }
    }
  })

  module.exports = { koaBody, router }
})()
