define({ "api": [
  {
    "type": "POST",
    "url": "/api/login",
    "title": "登录验证",
    "description": "<p>对上传的用户数据进行校验</p>",
    "group": "User",
    "name": "login",
    "parameter": {
      "fields": {
        "登录": [
          {
            "group": "登录",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录帐号</p>"
          },
          {
            "group": "登录",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "数据格式:",
          "content": "{ account: 'user001', password: '12345678' }",
          "type": "Object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "正确返回值:",
          "content": "{\n   \"success\": true,\n   \"msg\": \"登录成功\",\n   \"result\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回值:",
          "content": "{\n   \"success\": false,\n   \"msg\": \"登录失败\",\n   \"error\": {\n     \"code\": 1,\n     \"errorMsg\": \"账号密码不匹配\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/login/"
      }
    ],
    "version": "1.0.0",
    "filename": "server/routes.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/register",
    "title": "注册验证",
    "description": "<p>对上传的用户数据进行校验</p>",
    "group": "User",
    "name": "register",
    "parameter": {
      "fields": {
        "注册": [
          {
            "group": "注册",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>登录帐号</p>"
          },
          {
            "group": "注册",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "数据格式:",
          "content": "{ account: 'sdsads@qq.com', password: '12345678' }",
          "type": "Object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "正确返回值:",
          "content": "{\n   \"success\": true,\n   \"msg\": \"注册成功\",\n   \"result\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回值:",
          "content": "{\n   \"success\": false,\n   \"msg\": \"注册失败\",\n   \"error\": {\n     \"code\": 1,\n     \"errorMsg\": \"账号已存在\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/register/"
      }
    ],
    "version": "1.0.0",
    "filename": "server/routes.js",
    "groupTitle": "User"
  }
] });
